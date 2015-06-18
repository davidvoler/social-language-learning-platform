"""practice_handler.py

Recording user's grade in a lesson and its general vocabulary level.

Question:
Q: Should we use post or put for updating exercise results?
A: As we are in upsert mode - maybe put is the right method.

"""
import tornado
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from tornado.options import options
from base_handler import BaseHandler
from utils import get_mongodb_connection, get_logger




class PracticeHandler(BaseHandler):
    def initialize(self, db):
        """
        Initializes the instance with a mongodn database instance
        """
        self.logger = get_logger('profile_handler')
        self._connection = get_mongodb_connection()
        self._db = self._connection[options.mongodb_name]

    def get(self):
        """
        loads a list of exercises for the user to practice
        User's knowledge or memory of an exercise is leveled 1-5
        1 completely new
        5 The user's get's it right almost always
        When we ask the user to practice we want to encourage him by presenting
        him some words he is likely to get right combined with some challenge and a
        completely new exercises.
        The list will be combined in the following manner:

        15% of level 5
        40% of level 4
        30% of level 3
        10% of level 2
        5%  of level 1

        Level 5 and 4 are time based try, always choose the exercises that were last viewed
        as remotely as possible

        """
        #defualt number of exercise
        no_exercise = self.username = int(self.get_argument('no_exercise', options.practice_no_exercise))
        user = self.get_current_user()
        #practice = self._db['practice'].find_one({'_id':ObjectId(_id)})
        self.write(dumps({'status':-1,'error':'not implemented'}))

    def post(self):
        """
        User has answered an exercise:
        We save it into vocabulary practice and into lesson practice.
        update:
        1. update practice_exercise collection
        2. update practice_lesson collection
        3. update vocabulary collection it is a vocabulary item
        """
        #the data of the post should have the following format
        example_exercise_results = {
            'user_id':'',       #mandatory
            'lang':'',          #
            'exp_lang':'',      #
            'lesson_id':'',     #
            'exercise_id':'',   #mandatory
            'mark':4,           #Numeric
            'exercise_type':'',  #
            'is_vocabulary':False,  #do we need it?
            'vocabulary_items':[]  #Items in the vocabulary
        }

        exercise_results = loads(self.request.body.decode("utf-8"))
        user = self.get_current_user()
        try:
            ret = self._db['user_practice'].update({})
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))

    def put(self):
        """
        edit an existing practice
        
        """
        argj = loads(self.request.body.decode("utf-8"))
        try:
            ret = self._db['practice'].update({'_id':ObjectId(argj['_id'])}, {"$set": argj}, upsert=False)
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))
