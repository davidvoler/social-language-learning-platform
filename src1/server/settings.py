__author__ = 'davidl'
"""
settings.py
default configuration file
"""
from tornado.options import define
import os
define("port", default=9917, help="port", type=int)
define("mongodb_host",default='localhost:27017', help='Monogo Database Host', type=str)
define("mongodb_name",default='social_language_learning', help='Database Name', type=str)

define("templates_dir",
       default=os.path.join(os.path.dirname(os.path.realpath(__file__)),'..','templates'),
       help='templates directory', type=str)


define("site_domain",default='http://localhost/', help='site domain is used for oauth redirection must end with /', type=str)
define("google_client_id",default='', help='google client id', type=str)
define("google_client_secret",default='', help='google client secret', type=str)

define("cookie_secret",default='', help='internal cookie_secret', type=str)


