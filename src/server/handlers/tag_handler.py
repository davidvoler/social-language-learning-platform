"""Tag handler

A (multilingual) tag handler
"""
import tornado
import logging
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from slugify import slugify
from server.handlers.base_handler import BaseHandler


class TagHandler(BaseHandler):

    def initialize(self, db):
        """
        Initializes the instance with a mongodb database instance
        :param db: an instance to pymongo database object
        """
        self._db = db

    def get(self):
        """
        loads a single tag entry
        """
        language = self.get_argument('language', None)
        query = self.get_argument('query', '')


        if language:
            tags = self._db['tag'].find({'language':language,'name':{"$regex": query}})
            self.write(dumps(tags))
        else:
            tags = self._db['tag'].find({'name':{"$regex": query}})
            self.write(dumps(tags))    
    
    def post(self):
        """
        add a new tag
        
        """
        tag = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['tag'].insert(tag)
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))
