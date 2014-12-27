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
        user_id = self.get_argument('user_id', None)
        if not user_id:
            self.write(dumps({'status':-1,'error':'user_id is not defined'}))
            return
        profile = self._db['profile'].find_one({'_id':user_id})
        if not profile:
            self._db['profile'].insert({'_id':user_id})
            profile = self._db['profile'].find_one({'_id':user_id})
        self.write(dumps(profile))


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
        profile = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['profile'].update({'_id':profile['_id']},
                                             {"$set": profile},
                                             upsert=True)
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':-1,'error':str(e)}))

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
