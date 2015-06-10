from home.home_handler import HomeHandler
from home.login_handler import LoginHandler
from editor.editor_handler import EditorHandler

url_handlers = [
    (r'/', HomeHandler),
    (r'/api/accounts', LoginHandler),
    (r'/api/editor', EditorHandler),
]

