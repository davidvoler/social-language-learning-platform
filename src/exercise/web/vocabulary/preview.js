(function () {
  /**
   * slPreviewVocabulary Directive
   * The preview version
   */
  function slPreviewVocabulary() {

    return {
      restrict: 'E',
      //scope: { exercise: '='},
      //templateUrl: '/static/partials/directives/vocabulary/preview.html'
      controller: function ($scope) {
        $scope.currentItem = 0;
        $scope.selectedItems = [];
        $scope.checkCorrect = function (idx, translation, id) {
          if (translation == $scope.exercise.items[$scope.currentItem].translation) {
            $scope.selectedItems.push({value: translation, correct: true});
            $scope.setExerciseResults(id, 1);
          } else {
            $scope.selectedItems.push({value: translation, correct: false});
            $scope.setExerciseResults(id, -1);
          }
          $scope.currentItem++;
        }
      },
      templateUrl: '/static/src/exercise_directives/vocabulary/preview.html'
    };
  }

  angular.module('sllp.exercise_directives')
    .directive('slPreviewVocabulary', [slPreviewVocabulary]);
}());