(function () {
  /**
   * slEditVideo Directive
   *
   * @constructor
   */
  function slEditVideo() {

    return {
      restrict: 'E',
      //transclude: true,
      scope: {exercise: "="},
      controller: function ($scope) {
        $scope.init = function () {
          if (!$scope.exercise.videoUrl) {
            $scope.exercise.videoUrl = '';
          }
        };
        $scope.init();
      },

      templateUrl: '/static/src/exercise_directives/video/edit.html'
    }
  }

  angular.module('sllp.exercise_directives')
    .directive('slEditVideo', slEditVideo)
}());