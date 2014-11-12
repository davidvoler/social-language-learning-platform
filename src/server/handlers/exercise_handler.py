"""
Lesson handler will query,get,add and delete exercises, that is documents of the exercise collection
"""
import tornado
import logging
from bson.objectid import ObjectId
from bson.json_util import dumps, loads
from slugify import slugify
from server.handlers.base_handler import BaseHandler


class ExerciseHandler(BaseHandler):
    def initialize(self, db):
        """
        Initializes the instance with a mongodn database instance
        :param db: an instance to pymongo database object
        """
        self._db = db
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
        exercise['created_by'] = self.get_current_user_id()

        try:
            self._db['exercise'].insert(exercise)
            self.write(dumps(exercise));
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
        if not exercise['created_by']== self.get_current_user_id():
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
            ret = self.db['exercise'].remove({'_id':_id})
            self.write(dumps(ret))
        except Exception as e:
            self.write(dumps({'status':'error','error':str(e)}))
