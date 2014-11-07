"""Tornado server social language learning platform

revision: 0.1 1.11.2014 initial by David Levy

"""
import os
import sys
import tornado
import pymongo
from tornado.options import options
from tornado import ioloop, web
import logging
sys.path.append(os.path.join(os.path.dirname(os.path.realpath(__file__)), '..'))
from server.handlers import LessonHandler, IndexHandler, ProfileHandler, LoginHandler, \
    GoogleOAuth2LoginHandler,LanguageHandler,GAuthLoginHandler,TagHandler, AppHandler

# adding local directory to path

"""
Loading default setting files
"""
import server.settings

"""
searching for a local_setting.py file that overrides default configuration
"""
try:
    tornado.options.parse_config_file(
        os.path.join(os.path.dirname(os.path.realpath(__file__)), 'local_settings.py'),
        False)
except Exception as e:
    #print ('local settings: {}'.format(str(e)))
    #TODO: handle different exceptions
    logging.info('local_settings.py not defined, using default settings')
#get options from commandline
options.parse_command_line()

"""
Connecting to the mongodb database
"""

try:
    mongo_client = pymongo.MongoClient(options.mongodb_host)
    db = mongo_client[options.mongodb_name]
except Exception as e:
    logging.critical('connection to mongodb failed - make sure your mongodb is up')
    logging.critical('exiting')
    logging.critical(str(e))
    exit(-1)

app_settings = {
    'static_path': os.path.join(os.path.dirname(__file__), '..', 'client'),
    'autoreload': True,
    'google_oauth': {"key": options.google_client_id,
                     "secret": options.google_client_secret,
                     'scope': ['openid', 'email', 'profile']
    },
    'cookie_secret': options.cookie_secret,
    'xsrf_cookies': False,
    'debug':True

}
app = tornado.web.Application([
                                  (r'/', IndexHandler),
                                  (r'/app', AppHandler),
                                  #api prefix means that do REST operations
                                  (r'/api/lesson', LessonHandler, dict(db=db)),
                                  (r'/api/profile', ProfileHandler, dict(db=db)),
                                  (r'/api/login', LoginHandler, dict(db=db)),
                                  (r'/api/auth/google', GAuthLoginHandler, dict(db=db)),
                                  (r'/api/language', LanguageHandler, dict(db=db)),
                                  (r'/api/tag', TagHandler, dict(db=db)),
                              ],
                              **app_settings)



if __name__ == '__main__':
    #read settings from commandline
    from server.init_db import init_db
    init_db(db)
    logging.info('server running on http://localhost:{}'.format(options.port))
    app.listen(options.port, xheaders=True)
    logging.debug(app.settings)
    ioloop = tornado.ioloop.IOLoop.instance()
    ioloop.start()