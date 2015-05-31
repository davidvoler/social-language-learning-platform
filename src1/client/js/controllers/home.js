'use strict';

angular.module('sllp.app')
  .controller('HomeController', ['$scope','Lesson','Language',
    function ($scope,Lesson,Language) {
      $scope.controllerName = 'HomeController';
      $scope.lessons = Lesson.query();
      $scope.languages = Language.languages;
      $scope.languageChange = function(language){
      };
      //$scope.user = $cookieStore.get('sllp_user');
      $scope.exercise = {};
      $scope.yurl='https://www.youtube.com/watch?v=0hgfLoI-UDA'
      $scope.yEvent = 1;
      $scope.videoTime = 0;
      $scope.player = false;
      $scope.$on('youtube.player.ready', function ($event, player) {
            //var ytplayer = document.getElementById("YtId");
            $scope.videoTime = player.getCurrentTime();
            $scope.player = player;
            //$scope.yEvent++;
      });
      $scope.getTime = function(){
        if (!$scope.player){
            return -1;
        }else{
          return $scope.player.getCurrentTime();
        }
      };
    }
  ]
);
