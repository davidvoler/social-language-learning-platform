from tornado import web
from tornado.options import options
from utils import get_driver

class BaseHandler(web.RequestHandler):
    def get_current_user(self):
        return self.get_cookie(options.auth_cookie_name)


