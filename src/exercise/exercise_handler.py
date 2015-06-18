"""
Exercise handler will query,get,add and delete exercises, that is documents of the exercise collection
"""
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from base_handler import BaseHandler
from utils import get_mongodb_connection, get_logger
from tornado.options import options

class ExerciseHandler(BaseHandler):
    def initialize(self):
        """
        Initializes the instance with a mongodn database instance
        """
        self.logger = get_logger('profile_handler')
        self._connection = get_mongodb_connection()
        self._db = self._connection[options.mongodb_name]

    def get(self):
        """
        loads a single exercise entry
        """
        id = self.get_argument('id', '')
        lesson_id = self.get_argument('lesson_id', '')
        if id:
            exercise = self._db['exercise'].find_one({'_id':id})
            self.write(dumps(exercise))
        elif lesson_id:
            exercises = self._db['exercise'].find({'lesson_id':lesson_id})
            self.write(dumps(exercises))
        else:
            self.write(dumps({'status':-2, 'error':'Must have id or lesson_id'}))
    
    def post(self):
        """
        add a new exercise
        """
        exercise = loads(self.request.body.decode("utf-8"))
        exercise['_id'] = str(ObjectId())
        exercise['created_by'] = self.get_current_user()

        try:
            self._db['exercise'].insert(exercise)
            self.write(dumps(exercise))
        except Exception as e:
            self.write(dumps({'status':-2,'error':str(e)}))


    def put(self):
        """
        edit an existing exercise
        TODO: Improve permission - move permission to the current user.

        """
        exercise = loads(self.request.body.decode("utf-8"))
        #check permission
        #This is not safe permission check
        if not exercise['created_by']== self.get_current_user():
            self.write(dumps({'status':-3,'error':'No Permission'}))
            return
        try:
            ret = self._db['exercise'].update({'_id':exercise['_id']},
                                                {"$set": exercise}, upsert=True)
            self.write(dumps({'slug':exercise['slug'],'status':0}))
        except Exception as e:
            self.write(dumps({'status':-1,'error':str(e)}))

    def delete(self):
        """
        delete a exercise
        """
        _id = self.get_argument('_id', False)
        try:
            ret = self._db['exercise'].remove({'_id':_id})
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))
