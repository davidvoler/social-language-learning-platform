(function () {

  function ExerciseEdit($resource, UserService, ProfileService) {

    var self = this;
    var exerciseResource = $resource('/api/exercise', {},
      {update: {method: 'PUT'}}
    );
    self.create = function (lesson_id,exercise_type) {
      return {
        lesson_id: lesson_id,
        type: exercise_type,
        order: 0,
        name: '',
        deleted: false,
        editState: true};
    };
    self.save = function (exercise) {
      if (exercise._id){
        exerciseResource.put(exercise);
      }else{
        exerciseResource.post(exercise);
      }
    };
    self.saveAs = function (exercise) {
      new_ex =  angular.copy(exercise);
      delete new_ex._id;
      return new_ex;
    };
    //get a list of exercises the user can edit
    self.find = function () {

    };
    self.get = function (exercise_id) {
      http.get(exercise_id)
    };
    self.delete = function (exercise) {
      $http.delete(exercise);
    };
    return self

  }

  angular.module('sllp.lesson')
    .service('ExerciseEdit', ['$resource', 'UserService', 'ProfileService',ExerciseEdit]);
}());