(function () {
  /**
   * slPreviewMatch Directive
   * The preview version
   */
  function slPreviewMatch() {

    return {
      restrict: 'E',
      scope: {exercise: "="},
      link: function (scope, element, attr) {
      },
      templateUrl:'/static/src/exercise/web/match/preview.html'
    };
  }

  angular.module('sllp.exercise')
    .directive('slPreviewMatch',[slPreviewMatch]);
}());