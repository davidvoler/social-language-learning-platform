"""base_handler.py

Handling
"""
import tornado
from bson.objectid import ObjectId


class BaseHandler(tornado.web.RequestHandler):

    def get_current_user(self):
        return self.get_secure_cookie("sllp_user")

    def get_current_user_id(self):
        return "TMP_USER_ID"

    def get_current_user_doc(self):
        if not self._db:
            return None
        user_id =  self.get_secure_cookie("sllp_user")
        if user_id:
            return self._db['user'].find_one({'_id':ObjectId(user_id)})
        else:
            return None