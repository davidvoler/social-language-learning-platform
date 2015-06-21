"""app.py


main application

"""
#loading config file
from utils import load_config
load_config()

import os

from tornado.options import options
from tornado import ioloop, web
from urls import url_handlers

app = web.Application( url_handlers,
                      static_path=os.path.join(os.path.dirname(__file__),  '..'),
                      autoreload=True
)


if __name__ == '__main__':
    print('Social Language Platform running on http://localhost:{}/'.format(options.app_port))
    ioloop = ioloop.IOLoop.instance()
    app.listen(options.app_port, xheaders=True)
    ioloop.start()

