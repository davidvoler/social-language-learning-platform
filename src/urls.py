from home.home_handler import HomeHandler
from home.login_handler import LoginHandler

url_handlers = [
    (r'/', HomeHandler),
    (r'/api/accounts', LoginHandler),
]

