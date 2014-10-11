"""base_handler.py

Handling
"""
import tornado

class BaseHandler(tornado.web.RequestHandler):
    def get_current_user(self):
        return self.get_secure_cookie("sllp_user")

