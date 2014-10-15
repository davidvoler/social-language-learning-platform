'use strict';

angular.module('sllp.app')
  .directive('editText', function () {
    return {
      restrict: 'E',
      //transclude: true,
      scope: {exercise: "="},
      controller: function ($scope) {
        var exercise = $scope.exercise;
        var init = function () {
          if (!exercise.text) {
            exercise.text='';
          }

        };
        init();
      },
      templateUrl: '/static/partials/directives/text/edit.html'
    };
  })
  .directive('previewText', function () {
    return {
      restrict: 'E',
      scope: { exercise: '='},
      templateUrl: '/static/partials/directives/text/preview.html'
    };

  });
