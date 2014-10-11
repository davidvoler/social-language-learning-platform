'use strict';

angular.module('sllp.app')
  .controller('HomeController', ['$scope','Lesson','Language','$cookieStore',
    function ($scope,Lesson,Language,$cookieStore) {
      $scope.controllerName = 'HomeController';
      $scope.lessons = Lesson.query();
      $scope.languages = Language.languages;
      $scope.languageChange = function(language){
      };
      $scope.user = $cookieStore.get('sllp_user');
    }
  ]
);
