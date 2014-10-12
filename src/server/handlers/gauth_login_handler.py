import tornado
import json
import logging
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from slugify import slugify
from server.handlers.base_handler import BaseHandler


class GAuthLoginHandler(BaseHandler, tornado.auth.GoogleOAuth2Mixin):
    @tornado.gen.coroutine
    def get(self):
        if self.get_current_user():
            self.redirect('/products')
            return

        if self.get_argument('code', False):
            user = yield self.get_authenticated_user(redirect_uri=self.settings.google_redirect_url,
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
            user = json.loads(response.body)
            # save user here, save to cookie or database
            self.set_secure_cookie('trakr', user['email']) 
            self.redirect('/products')
            return

        elif self.get_secure_cookie('trakr'):
            self.redirect('/products')
            return

        else:
            yield self.authorize_redirect(
                redirect_uri=self.settings.google_redirect_url,
                client_id=self.settings['google_oauth']['key'],
                scope=['email'],
                response_type='code',
                extra_params={'approval_prompt': 'auto'})