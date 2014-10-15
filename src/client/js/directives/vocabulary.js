'use strict';

angular.module('sllp.app')
  .directive('editVocabulary', function () {
    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
        $scope.addItem = function () {
          $scope.exercise.items.push({term: '', translation: ''});
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
      templateUrl: '/static/partials/directives/vocabulary/edit.html'
    };
  })
  .directive('previewVocabulary', function () {
    return {
      restrict: 'E',
      scope: { exercise: '='},
      templateUrl: '/static/partials/directives/vocabulary/preview.html'
    };
  });
