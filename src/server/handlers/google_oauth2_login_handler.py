"""
google login handler

TODO:
Solve issues:
Try reading email and profile from google 
See example in:
./gauth_login_handler


if it would not work consider using 
http://python-oauth2.readthedocs.org/en/latest/index.html
"""
__author__ = 'davidl'
import tornado
from tornado.options import options
from tornado.auth import GoogleOAuth2Mixin
from tornado.web import RequestHandler
from bson.json_util import dumps, loads
import json
import logging


class GoogleOAuth2LoginHandler(RequestHandler,
                               GoogleOAuth2Mixin):
    @tornado.gen.coroutine
    def get(self):
        logging.info(options.site_domain)
        logging.info('GoogleOAuth2LoginHandler - get')
        #self.write(dumps({'msg':'GoogleOAuth2LoginHandler.get'}))
        #return
        google_oauth2_redirect_uri = '{}api/auth/google'.format(options.site_domain)
        if self.get_argument('code', False):
            logging.info( self.get_argument('email', False))
            logging.info('probably call by google')
            user = yield self.get_authenticated_user(
                google_oauth2_redirect_uri,
                code=self.get_argument('code'),
                callback=self._on_auth)
            #response =  yield http_client.fetch('https://www.googleapis.com/oauth2/v1/userinfo?access_token='+access_token)
            #user = json.loads(response.body)
            # Save the user with e.g. set_secure_cookie
            #logging.info(str(user))
            #self.write(dumps(user))
            """
            TODO:
            if user is a new user - save it to the database
            else - save last login
            set_secure_cookie
            see if something like
            self.get_argument('email'), is working
            """

        else:
            logging.info('GoogleOAuth2LoginHandler - redirect')
            yield self.authorize_redirect(
                google_oauth2_redirect_uri,
                client_id=self.settings['google_oauth']['key'],
                scope=['profile', 'email'],
                response_type='code',
                extra_params={'approval_prompt': 'auto'})

    def _on_auth(self, response):
        logging.debug( response.body)
        #print response.request.headers
        if response.error:
            raise tornado.web.HTTPError(500, "Google auth failed")
        #self.set_secure_cookie("user", tornado.escape.json_encode(response))
        self.write(tornado.escape.json_encode(response))
        #self.redirect("/")