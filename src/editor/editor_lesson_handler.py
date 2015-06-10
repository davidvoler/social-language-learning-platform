"""
Lesson handler will query,get,add and delete lessons,
that is documents of the lesson collection
"""
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from slugify import slugify
from base_handler import BaseHandler
from utils import get_mongodb_connection, get_logger
from tornado.options import options


class EditorLessonHandler(BaseHandler):
    def initialize(self):
        """
        Initializes the instance with a mongodn database instance
        :param db: an instance to pymongo database object
        """
        self._logger = get_logger('lesson_handler')
        self._connection = get_mongodb_connection()
        self._db = self._connection[options.lesson_db]

    def get(self):
        """
        loads a lesson or a list of lessons
        """
        _id = self.get_argument('_id', None)
        slug = self.get_argument('slug', None)
        self._logger.info(_id)
        self._logger.info(slug)
        if _id:
            lesson = self._db['lesson'].find_one({'_id': _id})
            self.write(dumps(lesson))
        #elif slug:
        #    lesson = self._db['lesson'].find_one({'slug': slug})
        #    self.write(dumps(lesson))
        else:
            lessons = self._db['lesson'].find()
            self.write(dumps(lessons))

    def create_slug(self, lesson):
        slug = slugify(lesson['title'])
        lesson_slugs = self._db['lesson'].distinct('slug')
        nslug = slug
        i = 0
        while nslug in lesson_slugs:
            nslug = '{}-{}'.format(slug, i)
            i += 1
        lesson['slug'] = nslug

    def post(self):
        """
        add a new lesson
        """
        print('in post')
        lesson = loads(self.request.body.decode("utf-8"))
        lesson['_id'] = str(ObjectId())
        lesson['created_by'] = self.get_current_user()
        print(lesson)
        #self.create_slug(lesson)
        try:
            self._db['lesson'].insert(lesson)
            self.write({'status': 0, 'error': '',  '_id': lesson['_id']})
        except Exception as e:
            self.write(dumps({'status':-2,'error':str(e)}))

    def put(self):
        """
        edit an existing lesson
        
        """
        lesson = loads(self.request.body.decode("utf-8"))
        print('in put')
        try:
            ret = self._db['lesson'].update({'_id': lesson['_id']},
                                            {"$set": lesson}, upsert=False)
            self.write(dumps({'slug': lesson['slug'], 'status': 0}))
        except Exception as e:
            self.write(dumps({'status': -1, 'error': str(e)}))

    def delete(self):
        """
        delete a lesson
        """
        _id = self.get_argument('_id', False)
        try:
            ret = self.db['lesson'].remove({'_id': ObjectId(_id)})
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status': 'error', 'error': str(e)}))
