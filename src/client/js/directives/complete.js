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
            user_selection:'',
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
      templateUrl: '/static/partials/directives/complete_edit.html'
/*      template:
'<div class="help" translate>Let the student match a phrase parts to each other</div>\
<div class="row">\
<div  class="col-md-4" ng-repeat="item in exercise.items">\
<input ng-if="item.type==\'txt\'" placeholder="text part" ng-model="item.val">\
<div ng-if="item.type==\'select\'">\
<div ng-repeat="o in item.options">\
    <input size="15" placeholder="option"  ng-model="o.val">\
    <input title="correct" type="checkbox" ng-model="o.correct">\
</div>\
</div>\
</div>\
</div>'
*/
    };
  })
  .directive('previewComplete', function () {
    return {
      restrict: 'E',
      //scope: { exercise: '='},
      controller : function($scope) {
        $scope.checkCorrect = function(item,id){
            for (var i = 0;i<item.options.length;i++){
                if (item.options[i].correct){
                    if(item.user_selection == item.options[i].val){
                        //user selected a correct answer
                        console.log('correct');
                        $scope.setExerciseResults(id,1);
                        return;
                    }
                }
            }
            //user selected a wrong answer
            $scope.setExerciseResults(id,-1)
            console.log('wrong answer');

        }
      },
      templateUrl:'/static/partials/directives/complete_preview.html'
/*      template:
'<div class="help" translate>choose the correct option to complete the phrase</div>\
<div>\
<span  ng-repeat="item in exercise.items">\
<span ng-if="item.type==\'txt\'">{{item.val}}</span>\
<select ng-change="checkCorrect(item, exercise.id)" ng-model="item.user_selection" ng-if="item.type==\'select\'">\
<option></option>\
<option ng-repeat="option in item.options">{{option.val}}</option>\
</select>\
</span>\
</div>'
*/
    };
  })
  .directive('practiceComplete', function () {
    return {
      restrict: 'E',
      //scope: { exercise: '='},
      controller : function($scope) {
        $scope.init =function(){
          //shuffle exercise options
          for (var i = 0;i<$scope.exercise.items;i++){
            if ($scope.exercise.items[i].type=='options'){
                $scope.exercise.items[i].options = Shuffle($scope.exercise.items[i].options);
            }
          }
        };
        //set user's mark for the exercise
        $scope.setMark = function(){
           //call the $scope.setUserMark();
        };

        $scope.checkCorrect = function(item,id){
            for (var i = 0;i<item.options.length;i++){
                if (item.options[i].correct){
                    if(item.user_selection == item.options[i].val){
                        //user selected a correct answer
                        console.log('correct');
                        $scope.setExerciseResults(id,1);
                        return;
                    }
                }
            }
            //user selected a wrong answer
            $scope.setExerciseResults(id,-1)
            console.log('wrong answer');

        };
      },
      templateUrl:'/static/partials/directives/complete_preview.html'
      /*template:
'<div class="help" translate>choose part to match current phrase</div>'+
'<div>'+
'<span  ng-repeat="item in exercise.items">'+
'<span ng-if="item.type==\'txt\'">{{item.val}}</span>'+
'<select ng-change="checkCorrect(item, exercise.id)" ng-model="item.user_selection" ng-if="item.type==\'select\'">'+
'<option></option>'+
'<option ng-repeat="option in item.options">{{option.val}}</option>'+
'</select>'+
'</span>'+
'</div>'*/
    };
  });


