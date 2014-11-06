(function () {

  function Exercise($http) {

    var self = this;

    self.query = function (lesson_id) {

    };
    self.get = function (exercise_id) {

    };
    self.setMark = function (exercise_id,mark) {

    };
    self.loadPracticeList = function () {

    };

  }

  angular.module('sllp.exercise')
    .service('Exercise', Exercise)
}());