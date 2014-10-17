'use strict';

angular.module('sllp.app')
  .directive('editVideo', function () {
    return {
      restrict: 'E',
      //transclude: true,
      scope: {exercise: "="},
      controller: function ($scope) {
        $scope.init = function () {
          if (!$scope.exercise.videoUrl) {
            $scope.exercise.videoUrl='';
          }
        };
        $scope.init();
      },
      templateUrl: '/static/partials/directives/video/edit.html'
    };
  })
  .directive('previewVideo', function () {
    return {
      restrict: 'E',
      scope: { exercise: '='},
      controller: function ($scope) {
        $scope.videoTime = 0;
        $scope.player = false;
        $scope.$on('youtube.player.ready', function ($event, player) {
            $scope.videoTime = player.getCurrentTime();
            $scope.player = player;
        });
        $scope.getTime = function(){
        if (!$scope.player){
            return -1;
        }else{
          return $scope.player.getCurrentTime();
        }
      }
      },
      templateUrl: '/static/partials/directives/video/preview.html'
    };

  });
