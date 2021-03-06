(function () {
  /**
   * An Exercise the requires the student to complete a phrase
   * using a predefined selection of words
   * @constructor
   */
  function slEditComplete() {

    return {
      restrict: 'E',
      scope: {exercise: "="},
      link: function (scope, element, attr) {
        scope.addText = function () {
          scope.exercise.items.push({type: 'txt', val: ''});
        };
        scope.addOptions = function () {
          scope.exercise.items.push({type: 'select',
            user_selection:'',
            options: [
              {val: '', correct: true},
              {val: '', correct: false},
              {val: '', correct: false},
              {val: '', correct: false}
            ]
          });
        };
        scope.init = function () {
          if (!scope.exercise.items) {
            scope.exercise.items = [];
          }
          if (scope.exercise.items.length == 0) {
            scope.addText();
            scope.addOptions();
            scope.addText();
          }
        };
        scope.init();

      },
      templateUrl: '/static/src/exercise/web/complete/edit.html'
    }
  }
  angular.module('sllp.exercise')
    .directive('slEditComplete', [slEditComplete])
}());