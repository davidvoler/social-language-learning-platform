(function () {
  /**
   * slEditMatch Directive
   *
   * @constructor
   */
  function slEditMatch() {

    return {
      restrict: 'E',
      scope: {exercise: "="},
      link: function (scope, element, attr) {
        scope.addItem = function () {
          scope.exercise.items.push({part1: '', part2: ''});
        };
        scope.init = function () {
          if (!scope.exercise.items) {
            scope.exercise.items = [];
          }
          if (scope.exercise.items.length < 4) {
            //add 4 empty items
            for (var i = scope.exercise.items.length; i < 4; i++) {
              scope.addItem();
            }
          }
        };
        scope.init();

      },

      templateUrl: '/static/src/exercise/web/match/edit.html'
    }
  }

  angular.module('sllp.exercise')
    .directive('slEditMatch', [slEditMatch])
}());