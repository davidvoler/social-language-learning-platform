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
from server.handlers import LessonHandler, IndexHandler, ProfileHandler, LoginHandler, GoogleOAuth2LoginHandler

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

"""
Connecting to the mongodb database
"""
mongo_client = pymongo.MongoClient(options.mongodb_host)
db = mongo_client[options.mongodb_name]

app_settings = {
    'static_path': os.path.join(os.path.dirname(__file__), '..', 'client'),
    'autoreload': True,
    'google_oauth': {"key": options.google_client_id,
                     "secret": options.google_client_secret,
                     'scope': ['openid', 'email', 'profile']
    },
    'cookie_secret': options.cookie_secret,
    'xsrf_cookies': False

}
app = tornado.web.Application([
                                  (r'/', IndexHandler),
                                  #api prefix means that do REST operations
                                  (r'/api/lesson', LessonHandler, dict(db=db)),
                                  (r'/api/profile', ProfileHandler, dict(db=db)),
                                  (r'/api/login', LoginHandler, dict(db=db)),
                                  (r'/api/auth/google', GoogleOAuth2LoginHandler),
                              ],
                              **app_settings)

def init_db(db):
    try:
        db.create_collection('user')
    except:
        pass
    try:
        db['user'].insert({'username':'admin','password':'admin','role':'admin'})
    except:
        pass
    db['user'].ensure_index('username', unique=True)
    db['user'].ensure_index('_id', unique=True)
    try:
        db.create_collection('lesson')
    except:
        pass
    db['lesson'].ensure_index('slug', unique=True)
    db['lesson'].ensure_index('_id', unique=True)
    try:
        db['lesson'].insert({'slug':'lesson1','title':'lesson1','exercises':[],'overview':'',
                             'owner':'admin'})
        db['lesson'].insert({'slug':'lesson2','title':'lesson2','exercises':[],'overview':'',
                             'owner':'admin'})
    except:
        pass



if __name__ == '__main__':
    #read settings from commandline
    init_db(db)
    options.parse_command_line()
    logging.info('server running on http://localhost:{}'.format(options.port))
    app.listen(options.port, xheaders=True)
    logging.debug(app.settings)
    ioloop = tornado.ioloop.IOLoop.instance()
    ioloop.start()