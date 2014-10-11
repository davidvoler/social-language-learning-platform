"""Simple Language Handler
"""
import tornado
import logging
from bson.objectid import ObjectId
from bson.json_util import dumps

class LanguageHandler(tornado.web.RequestHandler):
    def initialize(self, db):
        """
        Initializes the instance with a mongodb database instance
        :param db: an instance to pymongo database object
        """
        self._db = db

    def get(self):
        """
        loads the complete language collection
        """
        languages = self._db['language'].find()
        self.write(dumps(languages))