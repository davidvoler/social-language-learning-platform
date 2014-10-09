"""
Lesson handler will query,get,add and delete lessons, that is documents of the lesson collection
"""
import tornado
import logging
from bson.objectid import ObjectId
from bson.json_util import dumps, loads

class LessonHandler(tornado.web.RequestHandler):
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


    def query(self):
        """
        loads a list of lesson - using a query dict
        """
        qu = loads(self.request.body.decode("utf-8"))
        if qu:
            lessons = self._db['lesson'].find(qu)
        else:
            #rturn all lesson_entries
            lessons = self._db['lesson'].find()
        self.write(dumps(lessons))
    
    def post(self):
        """
        add a new lesson
        
        """
        lesson = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['lesson'].insert(lesson)
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))

    def put(self):
        """
        edit an existing lesson
        
        """
        argj = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['lesson'].update({'_id':ObjectId(argj['_id'])}, {"$set": argj}, upsert=False)
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))

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
