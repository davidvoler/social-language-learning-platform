(function () {
  /**
   * slEditText Directive
   *
   * @constructor
   */
  function slEditText() {

    return {

      restrict: 'E',
      //transclude: true,
      //scope: {exercise: "="},
      controller: function ($scope) {
        $scope.init = function () {
          if (!$scope.exercise.text) {
            $scope.exercise.text = '';
          }
        };
        $scope.init();
      },
      templateUrl: '/static/src/exercise_directives/text/edit.html'
    }
  }

  angular.module('sllp.exercise_directives')
    .directive('slEditText', [slEditText])
}());