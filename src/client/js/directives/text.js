'use strict';

angular.module('sllp.app')
 .directive('editText', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {exercise:"="},
    controller: function($scope) {
      var exercise = $scope.exercise;
      var init = function(){
        exercise.items=[
            {type:'txt',val:''},
            {type:'select',
                options:[
                    {val:'',correct:true},
                    {val:'',correct:false},
                    {val:'',correct:false},
                    {val:'',correct:false},
                    ],
            },
            {type:'txt',val:''}
        ];
      };
      init();
      $scope.addTxt = function(){
        exercise.items.push({type:'txt',val:''});

      };
      $scope.addSelect = function(){
        exercise.items.push({type:'select',
                options:[
                    {val:'',correct:true},
                    {val:'',correct:false},
                    {val:'',correct:false},
                    {val:'',correct:false},
                    ],
            });

      };

    },
    templateUrl: '/static/partials/directives/text/edit.html'
  };
})
.directive('previewText', function() {
  return {
    restrict: 'E',
      scope: { exercise: '='},
      templateUrl: '/static/partials/directives/text/preview.html'
   };

});
