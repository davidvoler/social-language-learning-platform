'use strict';

angular.module('sllp.app')
  .directive('editComplete', function () {
    return {
      restrict: 'E',
      scope: {exercise: "="},
      controller: function ($scope) {
        $scope.addText = function () {
          $scope.exercise.items.push({type: 'txt', val: ''});
        };
        $scope.addOptions = function () {
          $scope.exercise.items.push({type: 'select',
            options: [
              {val: '', correct: true},
              {val: '', correct: false},
              {val: '', correct: false},
              {val: '', correct: false}
            ]
          });
        };
        $scope.init = function () {
          if (!$scope.exercise.items) {
            $scope.exercise.items = [];
          }
          if ($scope.exercise.items.length == 0) {
            $scope.addText();
            $scope.addOptions();
            $scope.addText();
          }
        };
        $scope.init();

      },
      //templateUrl: '/static/partials/directives/complete/edit11.html'
      template:
                '<div class="row">'+
                '<div  class="col-md-4" ng-repeat="item in exercise.items">'+
                '<input ng-if="item.type==\'txt\'" placeholder="text part" ng-model="item.val">'+
                '<div ng-if="item.type==\'select\'">'+
                '<div ng-repeat="o in item.options">'+
                    '<input size="15" placeholder="option"  ng-model="o.val">'+
                    '<input title="correct" type="checkbox" ng-model="o.correct">'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>'

    };
  })
  .directive('previewComplete', function () {
    return {
      restrict: 'E',
      scope: { exercise: '='},
      //templateUrl: '/static/partials/directives/complete/preview.html'
      template:
                '<div>'+
                '<span  ng-repeat="item in exercise.items">'+
                  '<span ng-if="item.type==\'txt\'">{{item.val}}</span>'+
                  '<select ng-if="item.type==\'select\'">'+
                    '<option></option>'+
                    '<option ng-repeat="option in item.options">{{option.val}}</option>'+
                  '</select>'+
                '</span>'+
                '</div>'
    };
  });
