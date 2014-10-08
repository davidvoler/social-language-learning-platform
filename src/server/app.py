"""app.py
revision: 0.1 24.4.2014 initial by David Levy

Tornado server for mongodb tornado angular tutorial
"""
import os
import sys
import tornado
import pymongo
from tornado.options import options
from tornado import ioloop, web
sys.path.append(os.path.join(os.path.dirname(os.path.realpath(__file__)),'..'))

from server.handlers import LessonHandler, IndexHandler, ProfileHandler, LoginHandler, GoogleOAuth2LoginHandler

#adding local directory to path

"""
Loading default setting files
"""
import server.settings

"""
searching for a local_setting.py file that overrides default configuration
"""
try:
    tornado.options.parse_config_file(
        os.path.join(os.path.dirname(os.path.realpath(__file__)),'local_settings.py'),
        False)
except Exception as e:
    #print ('local settings: {}'.format(str(e)))
    #TODO: handle different exceptions
    print ('local_settings.py not defined, using default settings')

"""
Connecting to the mongodb database
"""
mongo_client = pymongo.MongoClient(options.mongodb_host)
db = mongo_client[options.mongodb_name]


app = tornado.web.Application([
                          (r'/', IndexHandler),
                          #api prefix means that do REST operations
                          (r'/api/lesson', LessonHandler, dict(db=db)),
                          (r'/api/profile', ProfileHandler, dict(db=db)),
                          (r'/api/login', LoginHandler, dict(db=db)),
                          (r'/auth/google', GoogleOAuth2LoginHandler),
                      ],
                      static_path=os.path.join(os.path.dirname(__file__), '..','client'),
                      autoreload=True,
                      google_oauth = {"key": options.google_client_id, "secret": options.google_client_secret}
)

if __name__ == '__main__':
    #read settings from commandline
    options.parse_command_line()
    print ('server running on http://localhost:{}'.format(options.port))
    app.listen(options.port,xheaders=True)
    ioloop = tornado.ioloop.IOLoop.instance()
    ioloop.start()
