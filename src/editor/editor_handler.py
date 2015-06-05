"""
Lesson handler will query,get,add and delete lessons, that is documents of the lesson collection
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
        :returns: a list of lessons that current user can edit
        """
        lang = self.get_argument('lang', '')
        exp_lang = self.get_argument('exp_lang', '')
        lessons = self._db['lesson'].find({'lang':lang,'exp_lang':exp_lang})
        self.write(dumps(lessons))
    
