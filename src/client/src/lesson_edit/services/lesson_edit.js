(function () {

  //optional for actions that are common to both learn and edit
  function LessonEditService(UserService) {
    var self = this;
    var service = {};

    service.query = function (lessons, error_container) {
      $http.get('/api/lesson/edit').success(function (data, status, headers, config) {
        console.log(data);
        if (data.status == 0) {
          lessons = data.data;
        } else {
          error_container.error = data.error;
        }
      }).error(function (data, status, headers, config) {
        error_container.error = data;
      });
    };
    return service;
  }

  angular.module('sllp.lesson')
    .service('LessonEditService', ['UserService', LessonEditService]);
}());