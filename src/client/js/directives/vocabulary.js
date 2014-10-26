'use strict';

angular.module('sllp.app')
  .directive('editVocabulary', function () {
    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
        $scope.addItem = function () {
          $scope.exercise.items.push({term: '', translation: '',translit:''});
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
      template:
'<table class="table">\
  <thead>\
  <tr>\
    <td>Term </td>\
    <td>Translation </td>\
  </tr>\
  </thead>\
  <tbody>\
  <tr ng-repeat="item in exercise.items" >\
    <td><input ng-model="item.term" placeholder="Term"></td>\
    <td><input ng-model="item.translation" placeholder="Translation"></td>\
  </tr>\
  </tbody>\
</table>'
    };
  })
  .directive('previewVocabulary', function () {
    return {
      restrict: 'E',
      //scope: { exercise: '='},
      //templateUrl: '/static/partials/directives/vocabulary/preview.html'
      controller : function($scope) {
        $scope.currentItem = 0;
        $scope.selectedItems = [];
        $scope.checkCorrect = function(idx,translation,id){
          if(translation == $scope.exercise.items[$scope.currentItem].translation){
            $scope.selectedItems.push({value:translation,correct:true});
            $scope.setExerciseResults(id,1);
          }else{
            $scope.selectedItems.push({value:translation,correct:false});
            $scope.setExerciseResults(id,-1);
          }
          $scope.currentItem++;
        }
      },
      template:
'<table class="table">\
<tr ng-repeat="item in exercise.items">\
<td>{{item.term}}</td>\
<td><button ng-if="selectedItems[$index]">{{selectedItems[$index].value}}</button> </td>\
</tr>\
</table>\
<div>\
<button ng-click="checkCorrect($index,item.translation,exercise.id)" ng-repeat="item in exercise.items">{{item.translation}}</button>\
</div>\
'
    };
  });
