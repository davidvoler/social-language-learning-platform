(function () {
  /**
   * slPreviewDirname Directive
   * The preview version
   */
  function slPreviewDirname() {

    return {

      templateUrl:'/static/src/exercise_directives/sdir/preview.html'
    };
  }

  angular.module('sllp.exercise_directives')
    .directive('slPreviewDirname',[slPreviewDirname]);
}());