(function () {
  /**
   * The preview version
   */
  function slPreviewComplete() {
    return {
      restrict: 'E',
      scope: {exercise: '='},
      link: function (scope, element, attr) {
        scope.init = function () {
          //shuffle exercise options
          for (var i = 0; i < scope.exercise.items; i++) {
            if (scope.exercise.items[i].type == 'options') {
              scope.exercise.items[i].options = Shuffle(scope.exercise.items[i].options);
            }
          }
        };
        //set user's mark for the exercise
        scope.setMark = function () {
          //call the scope.setUserMark();
        };

        scope.checkCorrect = function (item, id) {
          for (var i = 0; i < item.options.length; i++) {
            if (item.options[i].correct) {
              if (item.user_selection == item.options[i].val) {
                //user selected a correct answer
                console.log('correct');
                scope.setExerciseResults(id, 1);
                return;
              }
            }
          }
          //user selected a wrong answer
          scope.setExerciseResults(id, -1);
          console.log('wrong answer');

        };
      },
      templateUrl: '/static/src/exercise/web/complete/preview.html'
    };
  }

  angular.module('sllp.exercise')
      .directive('slPreviewComplete', [slPreviewComplete]);
}());