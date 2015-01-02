(function () {
  function PracticeLessonController(LessonLearnService) {
    var self = this;
    self.lessons = [];
    self.lessons = LessonLearnService.query();


  }
  angular.module('sllp.lesson')
    .controller('PracticeLessonController',['LessonLearnService',PracticeLessonController])
}());