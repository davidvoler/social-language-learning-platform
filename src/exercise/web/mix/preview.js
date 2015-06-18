(function () {
  /**
   * slPreviewMix Directive
   * The preview version
   */
  function slPreviewMix() {

    return {
      restrict: 'E',
      scope: { exercise: '='},
      link: function (scope, element, attr) {
        scope.answerWords = [];
      },
      templateUrl: '/static/src/exercise/web/mix/preview.html'
    };
  }

  angular.module('sllp.exercise')
    .directive('slPreviewMix', [slPreviewMix]);
}());