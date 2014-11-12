(function () {
  /**
   * slEditVocabulary Directive
   *
   * @constructor
   */
  function slEditVocabulary() {

    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
        $scope.addItem = function () {
          $scope.exercise.items.push({term: '', translation: '', translit: ''});
        };
        $scope.init = function () {
          if (!$scope.exercise.items) {
            $scope.exercise.items = [];
          }
          if ($scope.exercise.items.length < 4) {
            //add 4 empty items
            for (var i = $scope.exercise.items.length; i < 4; i++) {
              $scope.addItem();
            }
          }
        };
        $scope.init();
      },

      templateUrl: '/static/src/exercise_directives/vocabulary/edit.html'
    }
  }

  angular.module('sllp.exercise_directives')
    .directive('slEditVocabulary', slEditVocabulary)
}());