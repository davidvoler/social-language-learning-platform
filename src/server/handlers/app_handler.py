"""
Simple Index Handler
"""
from tornado import web
import os
from tornado.options import options


class AppHandler(web.RequestHandler):
    def get(self):
        """
        Loading the main page for the application
        As we are working in a single web page application it will be the only page to load
        """
        index_path = os.path.join(options.templates_dir,'app_md.html')
        self.render(index_path)
