(function () {
  /**
   * slPreviewMatch Directive
   * The preview version
   */
  function slPreviewMatch() {

    return {
      restrict: 'E',
      //scope: { exercise: '='},
      //templateUrl: '/static/partials/directives/match/preview.html'
      controller: function ($scope) {
        $scope.currentItem = 0;
        $scope.selectedItems = [];
        $scope.checkCorrect = function (idx, part2, id) {
          if (part2 == $scope.exercise.items[$scope.currentItem].part2) {
            $scope.selectedItems.push({value: part2, correct: true});
            $scope.setExerciseResults(id, 1);
          } else {
            $scope.selectedItems.push({value: part2, correct: false});
            $scope.setExerciseResults(id, -1);
          }
          $scope.currentItem++;
        }
      },
      templateUrl: '/static/src/exercise_directives/match/preview.html'
    };
  }

  angular.module('sllp.exercise_directives')
    .directive('slPreviewMatch', [slPreviewMatch]);
}());