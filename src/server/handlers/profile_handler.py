"""
Profile handler will query,get,add and delete profiles, that is documents of the profile collection
"""
import tornado
from bson.objectid import ObjectId
from bson.json_util import dumps, loads

class ProfileHandler(tornado.web.RequestHandler):
    def initialize(self, db):
        """
        Initializes the instance with a mongodn database instance
        :param db: an instance to pymongo database object
        """
        self._db = db

    def get(self):
        """
        loads a single profile entry

        """
        _id = self.username = self.get_argument('_id', '')
        profile = self._db['profile'].find_one({'_id':ObjectId(_id)})
        self.write(dumps(profile))

    def query(self):
        """
        loads a list of profile - using a query dict
        """
        qu = loads(self.request.body.decode("utf-8"))
        if qu:
            profiles = self._db['profile'].find(qu)
        else:
            #rturn all profile_entries
            profiles = self._db['profile'].find()
        self.write(dumps(profiles))
    
    def post(self):
        """
        add a new profile
        
        """
        profile = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['profile'].insert(profile)
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))

    def put(self):
        """
        edit an existing profile
        
        """
        argj = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['profile'].update({'_id':ObjectId(argj['_id'])}, {"$set": argj}, upsert=False)
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))

    def delete(self):
        """
        delete a profile
        """
        _id = self.get_argument('_id', False)
        try:
            ret = self.db['profile'].remove({'_id':ObjectId(_id)})
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))
