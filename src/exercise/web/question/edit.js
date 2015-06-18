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
      link: function (scope, element, attr) {
        var exercise = scope.exercise;
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

      templateUrl: '/static/src/exercise/web/question/edit.html'
    }
  }

  angular.module('sllp.exercise')
    .directive('slEditQuestion', [slEditQuestion])
}());