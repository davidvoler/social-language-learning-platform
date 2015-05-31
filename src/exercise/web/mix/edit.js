(function () {
  /**
   * slRpmeComplete Directive
   *
   * @constructor
   */
  function slEditDirname() {

    return {


      templateUrl: '/static/src/exercise_directives/sdir/edit.html'
    }
  }
  angular.module('sllp.exercise_directives')
    .directive('slEditDirname', [slEditDirname])
}());