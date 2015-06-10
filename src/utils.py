__author__ = 'davidl'

import pymongo
import motor
from tornado.options import options, parse_config_file
import os, sys
import logging
import os
import sys
from functools import partial, wraps
import tornado.ioloop
import tornado.web
from concurrent.futures import ThreadPoolExecutor
import logging


EXECUTOR = ThreadPoolExecutor(max_workers=128)
mongodb_connection = False
async_mongodb_connection = False

def get_async_mongodb_connection():
    global async_mongodb_connection
    if not async_mongodb_connection:
        try:
            async_mongodb_connection = motor.MotorClient(options.mongodb_host)
        except Exception as e:
            print('connection failed')
            print(e)
    return async_mongodb_connection


def get_mongodb_connection():
    global mongodb_connection
    if not mongodb_connection:
        try:
            mongodb_connection = pymongo.MongoClient(options.mongodb_host)
        except Exception as e:
            print('connection failed')
            print(e)
    return mongodb_connection


def get_logger(name=None):
    logging.getLogger(name)


def import_class(cl):
    # print(cl)
    d = cl.rfind(".")
    class_name = cl[d + 1:len(cl)]
    m = __import__(cl[0:d], globals(), locals(), [class_name])
    return getattr(m, class_name)


def get_driver(class_path):
    """
    imports a driver with class path
    :param class_path:
    :return:
    """
    klass = import_class(class_path)
    return klass()


def unblock(executor):
    def decorator(f):
        @tornado.web.asynchronous
        @wraps(f)
        def wrapper(*args, **kwargs):
            self = args[0]

            def callback(future):
                self.write(future.result())
                self.finish()

            executor.submit(
                partial(f, *args, **kwargs)
            ).add_done_callback(
                lambda future: tornado.ioloop.IOLoop.instance().add_callback(
                    partial(callback, future)))

        return wrapper

    return decorator


config_loaded = False


def load_config():
    global config_loaded
    if not config_loaded:
        config_loaded = True
        import config

        path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'local_config.py')
        try:
            if os.path.exists(path):
                parse_config_file(path, False)
                print ('Configuration in local_config.py Loaded')
            else:
                print('local Config not loaded: Using default configuration' )
        except Exception as exc:
            print('Exception occurred while loading config file: {}'.format(exc))
            sys.exit(1)