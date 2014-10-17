"""
Lesson handler will query,get,add and delete lessons, that is documents of the lesson collection
"""
import tornado
import logging
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from slugify import slugify
from server.handlers.base_handler import BaseHandler


class LessonHandler(BaseHandler):
    def initialize(self, db):
        """
        Initializes the instance with a mongodn database instance
        :param db: an instance to pymongo database object
        """
        self._db = db

    def get(self):
        """
        loads a single lesson entry
        """
        _id = self.get_argument('_id', None)
        slug = self.get_argument('slug', None)
        logging.info(_id)
        logging.info(slug)
        if _id:
            lesson = self._db['lesson'].find_one({'_id':ObjectId(_id)})
            self.write(dumps(lesson))
        elif slug:
            lesson = self._db['lesson'].find_one({'slug':slug})
            self.write(dumps(lesson))
        else:
            lessons = self._db['lesson'].find()
            self.write(dumps(lessons))    
    
    def post(self):
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
        del lesson['_id']
        try:
            ret = self._db['lesson'].update({'slug':lesson['slug']},
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
