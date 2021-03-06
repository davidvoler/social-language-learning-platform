"""
loads a list of lesson in learning mode for current user.
"""
import logging
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from slugify import slugify
from base_handler import BaseHandler
from utils import get_mongodb_connection, get_logger
from tornado.options import options

class LessonHandler(BaseHandler):
    def initialize(self):
        """
        Initializes the instance with a mongodn database instance
        :param db: an instance to pymongo database object


        """
        self.logger = get_logger('lesson_handler')
        self._connection = get_mongodb_connection()
        self._db = self._connection[options.lesson_db]

    def get(self):
        """
        loads a lesson or a list of lessons
        """
        _id = self.get_argument('_id', None)
        slug = self.get_argument('slug', None)
        exercises = self.get_argument('exercises', True)
        logging.info(_id)
        logging.info(slug)
        if _id:
            lesson = self._db['lesson'].find_one({'_id':ObjectId(_id)})
            if exercises:
                lesson['exercise']= self._db['exercise'].find({'lesson_id':lesson['_id']})
            self.write(dumps(lesson))
        elif slug:
            lesson = self._db['lesson'].find_one({'slug':slug})
            if exercises:
                lesson['exercise']= self._db['exercise'].find({'lesson_id':lesson['_id']})
            self.write(dumps(lesson))
        else:
            lang = self.get_argument('lang', '')
            exp_lang = self.get_argument('exp_lang', '')
            lessons = self._db['lesson'].find({'lang':lang,'exp_lang':exp_lang})
            self.write(dumps(lessons))    
    
    def post(self):
        """
        add a new lesson
        """
        lesson = loads(self.request.body.decode("utf-8"))
        lesson['_id'] = str(ObjectId())
        lesson['created_by'] = self.get_current_user()
        try:
            self._db['lesson'].insert(lesson)
            self.write({'status':0,'error':'','slug':lesson['slug']})
        except Exception as e:
            self.write(dumps({'status':-2,'error':str(e)}))

    def post_slug(self):
        """
        add a new lesson

        """
        lesson = loads(self.request.body.decode("utf-8"))
        if not lesson['title']:
            self.write(dumps({'status':-1,'error':'title is mandatory'}))
            return

        slug = slugify(lesson['title'])
        #make sure slug in unique in lesson collection
        # the following request will return all slug in the collection
        lesson_slugs = self._db['lesson'].distinct('slug')

        nslug = slug
        i=0
        while nslug in lesson_slugs:
            nslug = '{}-{}'.format(slug, i)
            i+=1
        lesson['slug']=nslug

        try:
            self._db['lesson'].insert(lesson)
            self.write({'status':0,'error':'','slug':lesson['slug']})
        except Exception as e:
            self.write(dumps({'status':-2,'error':str(e)}))



    def put(self):
        """
        edit an existing lesson
        
        """
        lesson = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['lesson'].update({'_id':lesson['_id']},
                                                {"$set": lesson}, upsert=False)
            self.write(dumps({'slug':lesson['slug'],'status':0}))
        except Exception as e:
            self.write(dumps({'status':-1,'error':str(e)}))

    def delete(self):
        """
        delete a lesson
        """
        _id = self.get_argument('_id', False)
        try:
            ret = self.db['lesson'].remove({'_id':ObjectId(_id)})
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))
