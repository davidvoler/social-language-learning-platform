__author__ = 'davidl'

from src.base_handler import BaseHandler
from bson.json_util import dumps, loads
from bson.objectid import ObjectId
from src.utils import get_logger
from tornado.options import options


class LoginHandler(BaseHandler):

    def initialize(self):
        self.logger = get_logger('auth')

    def post(self):
        """
        Post action is used for login
        Expecting username password in request body
        :return:
        """
        body = loads(self.request.body.decode("utf-8"))
        authenticated = -1
        error = 'Wrong password'
        user_type = ''
        try:
            username = body['username']
            password = body['password']

        except:
            self.write({'status': -2,
                        'error': 'User or password are missing',
                        'user': None,
                        'debug': ''})
            return

        if username == 'dev':
            if password ==options.dev_pass:
                authenticated = 0
                error = ''
                user_type = 'dev'
        elif username == 'opr':
            if password ==options.opr_pass:
                authenticated = 0
                error = ''
                user_type = 'opr'
        elif username == 'tst':
            if password ==options.tst_pass:
                authenticated = 0
                error = ''
                user_type = 'tst'
        else:
            error = 'Wrong username - username can be dev, opr or tst'

        self.set_cookie(options.auth_cookie_name, username)
        self.write(dumps({'status': authenticated,
                'error': error,
                'data': user_type}))




    def put(self):
        self.write(dumps({'status': 0}))
        self.clear_cookie(options.auth_cookie_name)


