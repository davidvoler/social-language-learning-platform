(function () {
  /**
   * slEditText Directive
   *
   * @constructor
   */
  function slEditText() {

    return {

      restrict: 'E',
      scope: {exercise: "="},
      link: function (scope, element, attr) {
        scope.init = function () {
          if (!scope.exercise.text) {
            scope.exercise.text = '';
          }
        };
        scope.init();
      },
      templateUrl: '/static/src/exercise/web/text/edit.html'
    }
  }

  angular.module('sllp.exercise')
    .directive('slEditText', [slEditText])
}());