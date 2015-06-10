(function () {

  function ExerciseService($http) {

    var service = {
      exerciseTypes: [
        {etype: 'complete', icon: 'pencil-box-outline'},
        {etype: 'match', icon: 'view-quilt'},
        {etype: 'mix', icon: 'arrange-send-to-back'},
        {etype: 'question', icon: 'help'},
        {etype: 'text', icon: 'tooltip-text'},
        {etype: 'video', icon: 'video'},
        {etype: 'vocabulary', icon: 'briefcase'}
      ]
    };

    service.query = function (lesson_id) {

    };
    service.get = function (exercise_id) {

    };
    service.setMark = function (exercise_id, mark) {

    };
    service.loadPracticeList = function () {

    };
    service.getTypes = function () {
      return service.exerciseTypes
    };

    return service;


  }

  angular.module('sllp.exercise')
      .service('ExerciseService', ['$http', ExerciseService])
}());