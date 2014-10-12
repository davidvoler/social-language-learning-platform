#http://stackoverflow.com/questions/24536768/how-to-do-google-login-authorization-with-tornado-3-2-2-using-googleoauth2mixin

import tornado
import json
import logging
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from slugify import slugify
from server.handlers.base_handler import BaseHandler
from tornado.options import options

class GAuthLoginHandler(BaseHandler, tornado.auth.GoogleOAuth2Mixin):
    def initialize(self, db):
        """
        Initializes the instance with a mongodn database instance
        :param db: an instance to pymongo database object
        """
        self._db = db
    
    def get_or_create_user(self,auth_user):

        """

        :param auth_user:
        :return:
        TODO:
        add the following information we get from google

        {'picture': 'https://lh6.googleusercontent.com/-gB5V_h807C0/AAAAAAAAAAI/AAAAAAAABN8/6VscXezcai0/photo.jpg', 'email': 'davidvoler@gmail.com', 'verified_email': True, 'family_name': 'Levi', 'link': 'https://plus.google.com/118445257533392779273', 'name': 'David Levi', 'given_name': 'David', 'id': '118445257533392779273', 'locale': 'en', 'gender': 'male'}

        """
        user = self._db['user'].find_one({'username':auth_user['email']})
        if user:
            return user, False
        else:
            user = self._db['user'].insert({'username':auth_user['email']})
            return user, True            

                                   
    @tornado.gen.coroutine
    def get(self):
        google_oauth2_redirect_uri = '{}api/auth/google'.format(options.site_domain)
        if self.get_current_user():
            self.redirect('/')
            return

        if self.get_argument('code', False):
            user = yield self.get_authenticated_user(redirect_uri=google_oauth2_redirect_uri,
                code=self.get_argument('code'))
            if not user:
                self.clear_all_cookies() 
                raise tornado.web.HTTPError(500, 'Google authentication failed')

            access_token = str(user['access_token'])
            http_client = self.get_auth_http_client()
            response =  yield http_client.fetch('https://www.googleapis.com/oauth2/v1/userinfo?access_token='+access_token)
            if not response:
                self.clear_all_cookies() 
                raise tornado.web.HTTPError(500, 'Google authentication failed')
            #user = json.loads(response.body)
            user =loads(response.body.decode("utf-8"))
            logging.info(user)
            # save user here, save to cookie or database

            db_user, is_new = self.get_or_create_user(user)

            self.set_secure_cookie('sllp_user', db_user['_id'].__str__())
            if is_new:
                #todo: redirect to profile page or welcome message
                self.redirect('/')
            else:
                self.redirect('/')
            return

        elif self.get_secure_cookie('sllp_user'):
            self.redirect('/')
            return

        else:
            yield self.authorize_redirect(
                redirect_uri=google_oauth2_redirect_uri,
                client_id=self.settings['google_oauth']['key'],
                scope=['email','profile'],
                response_type='code',
                extra_params={'approval_prompt': 'auto'})

    def post(self):
        self.clear_cookie('sllp_user')


