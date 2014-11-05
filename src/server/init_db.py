"""Database Initialization

Although Mongodb does not require explicit initialization of collection, We use this file to
create indexes and add default data.


"""

import pymongo
from tornado.options import options
import logging

def init_db(db):
    logging.info('Initializing Database')
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
    db['lesson'].ensure_index('language', unique=False)
    db['lesson'].ensure_index('explanation_language', unique=False)
    db['lesson'].ensure_index('slug', unique=True)
    db['lesson'].ensure_index('_id', unique=True)
    try:
        db['lesson'].insert({'slug':'lesson1','title':'lesson1','exercises':[],'overview':'',
                             'owner':'admin'})
        db['lesson'].insert({'slug':'lesson2','title':'lesson2','exercises':[],'overview':'',
                             'owner':'admin'})
    except:
        pass

    try:
        db.create_collection('language')
    except:
        pass
    db['language'].ensure_index('_id', unique=True)
    try:
        db['language'].insert({'_id':'en','name':'English'})
        db['language'].insert({'_id':'he','name':'Hebrew'})
        db['language'].insert({'_id':'ar','name':'Arabic'})
        db['language'].insert({'_id':'fr','name':'French'})
        db['language'].insert({'_id':'de','name':'German'})
    except:
        pass

    try:
        db.create_collection('user_practice')
    except:
        pass

    # Is it the correct key for practice?

    db['user_practice'].ensure_index([('username',pymongo.ASCENDING),
                                      ('language',pymongo.ASCENDING),
                                      ('term', pymongo.ASCENDING),
                                      ('explanation_language', pymongo.ASCENDING)],
                                     unique=True)
    try:
        db.create_collection('lesson_practice')
    except:
        pass

    try:
        db.create_collection('tag')
    except:
        pass
    db['tag'].ensure_index([('name',pymongo.ASCENDING),('language',pymongo.ASCENDING)], unique=True)
    try:
        db['tag'].insert({'name':'Beginner','language':'en'})
        db['tag'].insert({'name':'Advanced','language':'en'})
        db['tag'].insert({'name':'Intermediate','language':'en'})
    except:
        pass

    try:
        db.create_collection('rating')
    except:
        pass
    db['rating'].ensure_index([('lesson_id',pymongo.ASCENDING),('user_id',pymongo.ASCENDING)], unique=True)

    #db['lesson_practice'].ensure_index({'username':1,'lesson_id':1,'exercise_id':1}, unique=True)
    try:
        db.create_collection('exercise')
    except:
        pass
    #db['exercise'].ensure_index([('lesson_id',pymongo.ASCENDING),('user_id',pymongo.ASCENDING)], unique=True)
