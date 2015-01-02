(function () {

  //optional for actions that are common to both learn and edit
  function LessonLearnService($http, UserService) {
    var self = this;
    var service = {};

    /**
     * Query
     * @param lessons: empty array
     * @param error_container : container of the error message
     */
    service.query = function (lessons, error_container) {
      $http.get('/api/lesson/learn').success(function (data, status, headers, config) {
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
    .service('LessonLearnService', ['$http','UserService', LessonLearnService]);
}());