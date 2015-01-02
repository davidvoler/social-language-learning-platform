(function () {
  function ListLessonController(LessonLearnService) {
    var self = this;
    self.error = '';
    self.lessons = [];
    LessonLearnService.query(self.lessons, self);

  }
  angular.module('sllp.lesson')
    .controller('ListLessonController',['LessonLearnService',ListLessonController])
}());