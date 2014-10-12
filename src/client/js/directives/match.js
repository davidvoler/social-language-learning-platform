'use strict';

angular.module('sllp.app')
  .directive('editMatch', function () {
    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
        var exercise = $scope.exercise;
        var init = function () {
          if (!exercise.items) {
            exercise.items = [];
            //add 3 empty items
            $scope.addItem();
            $scope.addItem();
            $scope.addItem();
          }
        };
        init();
        $scope.addItem = function () {
          exercise.items.push({part1: '', part2: ''});
        };
      },
      templateUrl: '/static/partials/directives/match/edit.html'
    };
  })
  .directive('previewMatch', function () {
    return {
      restrict: 'E',
      scope: { exercise: '='},
      templateUrl: '/static/partials/directives/match/preview.html'
    };
  });
