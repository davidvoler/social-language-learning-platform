(function () {
  /**
   * slPreviewText Directive
   * The preview version
   */
  function slPreviewText() {

    return {
      restrict: 'E',
      scope: {exercise: "="},
      templateUrl: '/static/src/exercise/web/text/preview.html'
    };
  }

  angular.module('sllp.exercise')
    .directive('slPreviewText', [slPreviewText]);
}());