(function () {
  /**
   * slPreviewQuestion Directive
   * The preview version
   */
  function slPreviewQuestion() {

    return {
      restrict: 'E',
      scope: {exercise: "="},
      link: function (scope, element, attr) {

      },
      templateUrl:'/static/src/exercise/web/question/preview.html'
    };
  }

  angular.module('sllp.exercise')
    .directive('slPreviewQuestion',[slPreviewQuestion]);
}());