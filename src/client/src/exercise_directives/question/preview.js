(function () {
  /**
   * slPreviewQuestion Directive
   * The preview version
   */
  function slPreviewQuestion() {

    return {
      restrict: 'E',
      //scope: {exercise: "="},
      controller: function ($scope) {
      },
      templateUrl:'/static/src/exercise_directives/question/preview.html'
    };
  }

  angular.module('sllp.exercise_directives')
    .directive('slPreviewQuestion',slPreviewQuestion);
}());