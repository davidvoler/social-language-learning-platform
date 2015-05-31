(function () {
  /**
   * slEditQuestion Directive
   *
   * @constructor
   */
  function slEditQuestion() {

    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
        var exercise = $scope.exercise;
        var init = function () {
          if (!exercise.question) {
            exercise.question = '';
          }
          if (!exercise.answers) {
            exercise.answers = [
              {answer: '', correct: true},
              {answer: '', correct: false},
              {answer: '', correct: false},
              {answer: '', correct: false}
            ];
          }
        };
        init();

      },

      templateUrl: '/static/src/exercise_directives/question/edit.html'
    }
  }

  angular.module('sllp.exercise_directives')
    .directive('slEditQuestion', [slEditQuestion])
}());