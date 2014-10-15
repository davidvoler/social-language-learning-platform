'use strict';

angular.module('sllp.app')
  .directive('editText', function () {
    return {
      restrict: 'E',
      //transclude: true,
      //scope: {exercise: "="},
      controller: function ($scope) {
        $scope.init = function () {
          if (!$scope.exercise.text) {
            $scope.exercise.text='';
          }
        };
        $scope.init();
      },
      templateUrl: '/static/partials/directives/text/edit.html'
    };
  })
  .directive('previewText', function () {
    return {
      restrict: 'E',
      //scope: { exercise: '='},
      templateUrl: '/static/partials/directives/text/preview.html'
    };

  });
