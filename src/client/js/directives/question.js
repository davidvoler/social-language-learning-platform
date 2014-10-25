'use strict';

angular.module('sllp.app')
  .directive('editQuestion', function () {
    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
      var exercise = $scope.exercise;
      var init = function () {
        if (!exercise.question){
          exercise.question = '';
        }
        if(!exercise.answers){
          exercise.answers = [
          {answer: '', correct: true},
          {answer: '', correct: false},
          {answer: '', correct: false},
          {answer: '', correct: false}
        ];
        }
      };
      init();

    },
      template:
      '<div>question:<input placeholder="question" ng-model="exercise.question"></div>\
      <div ng-repeat="a in exercise.answers">\
      answer:<input placeholder="answer" ng-model="a.answer">\
      correct:<input type="checkbox" ng-model="a.correct">\
      </div>'

    };
  })

  .directive('previewQuestion', function () {
    return {
      restrict: 'E',
      //scope: {exercise: "="},
      controller: function ($scope) {
      },
      template:
      '<div>{{exercise.question}}</div>\
      <div ng-repeat="a in exercise.answers" >\
      {{a.answer}} <input type="checkbox"></div>'
    };
  });
