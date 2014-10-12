"""
Practice handler will query,get,add and delete practices, that is documents of the practice collection
"""
import tornado
from bson.objectid import ObjectId
from bson.json_util import dumps, loads

class PracticeHandler(tornado.web.RequestHandler):
    def initialize(self, db):
        """
        Initializes the instance with a mongodn database instance
        :param db: an instance to pymongo database object
        """
        self._db = db

    def get(self):
        """
        loads a single practice entry
        """
        _id = self.username = self.get_argument('_id', '')
        practice = self._db['practice'].find_one({'_id':ObjectId(_id)})
        self.write(dumps(practice))

    def query(self):
        """
        loads a list of practice - using a query dict
        """
        qu = loads(self.request.body.decode("utf-8"))
        if qu:
            practices = self._db['practice'].find(qu)
        else:
            #rturn all practice_entries
            practices = self._db['practice'].find()
        self.write(dumps(practices))
    
    def post(self):
        """
        User has answered an exercise:
        We save it into vocabulary practice and into lesson practice.
        """

        exercise = loads(self.request.body.decode("utf-8"))
        user_practice_line = []
        try:
            ret = self._db['user_practice'].update({})
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))

    def put(self):
        """
        edit an existing practice
        
        """
        argj = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['practice'].update({'_id':ObjectId(argj['_id'])}, {"$set": argj}, upsert=False)
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))

    def delete(self):
        """
        delete a practice
        """
        _id = self.get_argument('_id', False)
        try:
            ret = self.db['practice'].remove({'_id':ObjectId(_id)})
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))
