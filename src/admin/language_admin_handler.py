
"""admin_handler.py


AdminHandler - describe you module here
"""

from bson.json_util import dumps, loads
from base_handler import BaseHandler
from utils import get_mongodb_connection
from tornado.options import options

class LanguageAdminHandler(BaseHandler):
    """

    """
    def initialize(self):
        self.connection = get_mongodb_connection()
        self._db = self.connection[options.mongodb_name]

    def get(self):
        langs = self._db['language'].find()
        self.write(dumps(langs))

    def post(self):
        lang = lesson = loads(self.request.body.decode("utf-8"))
        try:
            res = self._db['language'].insert(lang)
            self.write(dumps(res))
        except Exception as e:
            self.write(dumps({'status':-1,'error':str(e)}))

    def put(self):
        language = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['language'].update({'_id':language['_id']},
                                                {"$set": language}, upsert=False)
            self.write(dumps({'data':ret,'status':0}))
        except Exception as e:
            self.write(dumps({'status':-1,'error':str(e)}))

