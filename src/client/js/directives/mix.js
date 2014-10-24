'use strict';

angular.module('sllp.app')
  .directive('editMix', function () {
    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
        $scope.init = function () {
          if (!$scope.exercise.text) {
            $scope.exercise.text = '';
          }
          if (!$scope.exercise.distraction) {
            $scope.exercise.distraction = '';
          }
          if (!$scope.exercise.words) {
            $scope.exercise.words = [];
          }
        };
        $scope.init();
        $scope.setWords = function(){
            $scope.exercise.words = $scope.exercise.text.split(" ");
        }


      },
      template: '<div><input ng-change="setWords()" ng-model="exercise.text" placeholder"text">\
      <input ng-model="exercise.distraction" placeholder"distraction">\
      </div>'
    };
  })
  .directive('previewMix', function () {
    return {
      restrict: 'E',
      //scope: { exercise: '='},
      controller : function($scope) {
        $scope.exercise.answerWords = [];
        //$scope.exercise.mixWords = $scope.exercise.words;
        //$scope.words = $scope.exercise.text.split();

        $scope.checkCorrect = function(idx,part2,id){
        };
        $scope.moveAnswer = function(idx){
           var w = $scope.exercise.words.splice(idx,1);
           $scope.exercise.answerWords.push(w[0]);

        };
        $scope.moveBack = function(idx){
           var w = $scope.exercise.answerWords.splice(idx,1);
           $scope.exercise.words.push(w[0]);
        };

      },
      //templateUrl: '/static/partials/directives/mix/preview.html'
      template:
'<div class="answer"><button ng-click="moveBack($index)" ng-repeat="a in exercise.answerWords track by $index">{{a}}</button></div>\
<div class="words"><button ng-click="moveAnswer($index)" ng-repeat="a in exercise.words track by $index">{{a}}</button></div>'
    };

  });
