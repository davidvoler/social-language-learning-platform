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
      templateUrl: '/static/partials/directives/mix_edit.html'
/*
      template:
'<div class="help" translate>Phrase words will be mixed and the student will have to put them in the right order</div>\
<div><input ng-change="setWords()" ng-model="exercise.text" class="form-control" placeholder="phrase">\
<input ng-model="exercise.distraction" class="form-control" placeholder="distraction - (optional)">\
</div>'
*/
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
    templateUrl: '/static/partials/directives/mix_preview.html'
/*      template:

'<div translate class="help">Put the words in the correct order</div>\
<div class="answer"><button ng-click="moveBack($index)" ng-repeat="a in exercise.answerWords track by $index">{{a}}</button></div>\
<div class="words"><button ng-click="moveAnswer($index)" ng-repeat="a in exercise.words track by $index">{{a}}</button></div>'
*/
    };

  });
