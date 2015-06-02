(function () {
  /**
   * slRpmeComplete Directive
   *
   * @constructor
   */
  function slEditMix() {

    return {
      restrict: 'E',
      scope: {exercise: "="},
      link: function (scope, element, attr) {

        if(!scope.exercise.words){
          scope.exercise.words = [];
        }
        if(!scope.exercise.text){
          scope.exercise.text = '';
        }
        scope.setWords = function(){
          scope.exercise.words = scope.exercise.text.split(' ');
        }
      },
      templateUrl: '/static/src/exercise/web/mix/edit.html'
    }
  }

  angular.module('sllp.exercise')
      .directive('slEditMix', [slEditMix])
}());