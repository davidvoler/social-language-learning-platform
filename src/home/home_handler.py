from src.base_handler import BaseHandler
from tornado.options import options
from bson.json_util import dumps, loads


class HomeHandler(BaseHandler):
    def get(self):
        self.render(
            'web/index.html',
            auth_cookie_name=options.auth_cookie_name,
            web_socket_url=options.web_socket_url
        )
