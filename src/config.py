from tornado.options import define, options
define('app_port', default=8897, help='application port', type=int)

#user cookie
define("auth_cookie_name", default='tfe_user', help="name of the cookie to use for authentication", type=str)

#inspection interval
define("inspect_interval", default=10000, help="device inspection interval", type=int)

#web socket url
define("web_socket_url", default="http://localhost:{}/wssrv".format(options.app_port), help='web socket url',
       type=str)

import os

db_dir = os.path.join(os.path.dirname(__file__),  '..')
define("storage_file_name", default="{}/tf_storage.db".format(db_dir), help='local db file name', type=str)
define('storage_driver', default='storage.storage_driver.StorageDriver', help='Storage driver', type=str)
define('xmlrpc_server_port', default=9876, help='xmlrpc server port', type=int)

#auth
define('dev_pass', default='crow2012', help='developer password', type=str)
define('tst_pass', default='tst', help='tester password', type=str)
define('opr_pass', default='crow12', help='operation password', type=str)


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


