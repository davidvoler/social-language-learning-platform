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
      //scope: { exercise: '='},
      //templateUrl: '/static/partials/directives/match/preview.html'
      controller : function($scope) {
        $scope.currentItem = 0;
        $scope.selectedItems = [];
        $scope.checkCorrect = function(idx,part2,id){
          if(part2 == $scope.exercise.items[$scope.currentItem].part2){
            $scope.selectedItems.push({value:part2,correct:true});
            $scope.setExerciseResults(id,1);
          }else{
            $scope.selectedItems.push({value:part2,correct:false});
            $scope.setExerciseResults(id,-1);
          }
          $scope.currentItem++;
        }
      },
      template:
'<table class="table">\
<tr ng-repeat="item in exercise.items">\
<td>{{item.part1}}</td>\
<td><button ng-if="selectedItems[$index]">{{selectedItems[$index].value}}</button> </td>\
</tr>\
</table>\
<div>\
<button ng-click="checkCorrect($index,item.part2,exercise.id)" ng-repeat="item in exercise.items">{{item.part2}}</button>\
</div>\
'
    };
  });
