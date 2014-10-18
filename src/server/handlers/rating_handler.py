"""Rating handler

Question

Should we save rating inside lesson or on a separated collection

Saving inside lesson
When loading lesson we also load rating


On a separate collection
 This  way we avoid updates to lessons
 Is update such a problem?
"""
import logging
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from slugify import slugify
from server.handlers.base_handler import BaseHandler


class RatingHandler(BaseHandler):

    def initialize(self, db):
        """
        Initializes the instance with a mongodb database instance
        :param db: an instance to pymongo database object
        """
        self._db = db

    def get(self):
        """
        Do we need the get
        Maybe rating should be loaded with lesson?
        loads a single rating entry
        """
        lesson_id = self.get_argument('lesson_id', None)
        query = self.get_argument('query', '')

        ratings = self._db['rating'].find({},{'name':1})
        ret = []
        for t in ratings:
            ret.append(t['name'])
        self.write(dumps(ret))
        return
        if query:
            if language:
                ratings = self._db['rating'].find({'language':language,'name':{"$regex": '*{}*'.format(query)}})
                self.write(dumps(ratings))
            else:
                ratings = self._db['rating'].find({'name':{"$regex": '*{}*'.format(query)}})
                self.write(dumps(ratings))
    
    def post(self):
        """
        add a new rating
        Allow rating only if user is registered
        """
        rating = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['rating'].insert(rating)
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))
