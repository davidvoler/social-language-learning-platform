(function () {
  /**
   * slPreviewText Directive
   * The preview version
   */
  function slPreviewText() {

    return {
      restrict: 'E',
      templateUrl: '/static/src/exercise_directives/text/preview.html'
    };
  }

  angular.module('sllp.exercise_directives')
    .directive('slPreviewText', slPreviewText);
}());