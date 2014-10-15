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
          {answer: '', correct: true},
          {answer: '', correct: true},
          {answer: '', correct: true}
        ];
        }
      };
      init();

    },
      templateUrl: '/static/partials/directives/question/edit.html'
    };
  })

  .directive('previewQuestion', function () {
    return {
      restrict: 'E',
      //transclude: true,
      scope: {exercise: "="},
      controller: function ($scope) {
        var exercise = $scope.parts = [];
        $scope.selectOption = function (i) {
          alert('Option ' + i + ' selected')
        };
        $scope.select = function (part) {
          /*
           angular.forEach(panes, function(pane) {
           pane.selected = false;
           });
           */
          part.selected = true;
        };


      },
      templateUrl: '/static/partials/directives/question/preview.html'
    };
  })
