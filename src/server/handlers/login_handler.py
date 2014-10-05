__author__ = 'davidl'
from bson.json_util import dumps,loads
import datetime
import tornado

class LoginHandler(tornado.web.RequestHandler):
    def initialize(self,db):
        self._db = db

    def authenticate(self,username,password):
        """
        this is a temporary implementation of authentication
        :param username:
        :param password:
        :return:
        """
        try:
            user = self._db['local_auth'].find_one({'_id':username})
        except:
            return False
        #tmp
        if not user:
            return False
        if user['password'] == password:
            return user
        else:
            return False


    def post(self):
        body = loads(self.request.body.decode("utf-8"))
        try:
            username = body['username']
            password = body['password']
        except:
            self.write({'status':-2,'error':'User or password are missing','user':None})
            return
        auth = self.authenticate(username,password)
        if auth:
            res = self._db['user'].update({'_id':username},
                                    {"$set": {'last_login':datetime.datetime.now()}},
                                    upsert=True)
            user = self._db['user'].find_one({'_id':username})
            self.write(dumps({'status':0,'error':'','user':user}))
            try:
                self.set_secure_cookie("ollp_user", user['_id'])
            except:
                pass
        else:
            self.write({'status':-1,'error':'Wrong user or password','user':None})

    def put(self):
        self.write(dumps({'status':0}))
        self.clear_cookie("ollp_user")

