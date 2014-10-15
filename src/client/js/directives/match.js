'use strict';

angular.module('sllp.app')
  .directive('editMatch', function () {
    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
        $scope.addItem = function () {
          $scope.exercise.items.push({part1: '', part2: ''});
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
      templateUrl: '/static/partials/directives/match/edit.html'
    };
  })
  .directive('previewMatch', function () {
    return {
      restrict: 'E',
      scope: { exercise: '='},
      //templateUrl: '/static/partials/directives/match/preview.html'
      template:
'<table class="table">\
<tr ng-repeat="item in exercise.items">\
<td>{{item.part1}}</td><td>{{item.part2}}</td>\
</tr>\
</table>'
    };
  });
