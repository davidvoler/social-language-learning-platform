(function () {
  /**
   * slPreviewVideo Directive
   * The preview version
   */
  function slPreviewVideo() {

    return {
      restrict: 'E',
      scope: { exercise: '='},
      link: function (scope, element, attr) {
        scope.videoTime = 0;
        scope.player = false;
        scope.$on('youtube.player.ready', function ($event, player) {
          scope.videoTime = player.getCurrentTime();
          scope.player = player;
        });
        scope.getTime = function () {
          if (!scope.player) {
            return -1;
          } else {
            return scope.player.getCurrentTime();
          }
        }
      },
      templateUrl: '/static/src/exercise/web/video/preview.html'
    };
  }

  angular.module('sllp.exercise')
    .directive('slPreviewVideo', [slPreviewVideo]);
}());