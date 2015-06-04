(function () {
  /**
   * slEditVideo Directive
   *
   * @constructor
   */
  function slEditVideo() {

    return {
      restrict: 'E',
      scope: {exercise: "="},
      link: function (scope, element, attr) {
        scope.init = function () {
          if (!scope.exercise.videoUrl) {
            scope.exercise.videoUrl = '';
          }
        };
        scope.init();
      },

      templateUrl: '/static/src/exercise/web/video/edit.html'
    }
  }

  angular.module('sllp.exercise')
    .directive('slEditVideo', [slEditVideo])
}());