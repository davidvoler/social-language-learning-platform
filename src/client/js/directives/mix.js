'use strict';

angular.module('sllp.app')
  .directive('editMix', function () {
    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
        $scope.init = function () {
          if (!exercise.text) {
            exercise.text = '';
          }
          if (!exercise.distraction) {
            exercise.distraction = '';
          }
          if (!exercise.items) {
            exercise.items = [];
          }
        };
        $scope.init();
      },
      templateUrl: '/static/partials/directives/mix/edit.html'
    };
  })
  .directive('previewMix', function () {
    return {
      restrict: 'E',
      scope: { exercise: '='},
      templateUrl: '/static/partials/directives/mix/preview.html'
    };

  });
