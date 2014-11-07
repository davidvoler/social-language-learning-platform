(function () {

  function LessonEdit($http) {

    var self = this;

    self.create = function () {
      return {};
    };
    self.save = function (lesson) {
      if (lesson._id){
        $http.put();
      }else{
        $http.post();
      }
    };
    self.saveAs = function (lesson) {
      lesson.copied_from = lessen._id;
      delete lessen._id
      $http.post(lesson);

    };
    //get a list of lessons the user can edit
    self.find = function () {

    };
    self.get = function (lesson_id) {
      http.get(lesson_id)
    };
    self.delete = function (lesson) {
      $http.delete(lesson);
    };
    self.publish = function (lesson) {
      lesson.published = true;
      $http.post(lesson);
    };

  }

  angular.module('sllp.lesson')
    .service('LessonEdit', LessonEdit)
}());