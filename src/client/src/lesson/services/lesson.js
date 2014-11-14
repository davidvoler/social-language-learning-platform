(function () {

  //optional for actions that are common to both learn and edit
  function LessonService(UserService) {
    var self = this;
    var service = {};
    return service;
  }

  angular.module('sllp.lesson')
    .service('LessonService', ['UserService',LessonService]);
}());