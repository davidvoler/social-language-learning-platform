'use strict';

angular.module('ollp.app')
.controller('LessonController', ['$scope','$route','Lesson',
    function ($scope,$route,Lesson) {
      $scope.controllerName = 'LessonController';
      $scope.slug = $route.current.params.slug;
      console.log($scope.slug);
      $scope.lesson = Lesson.get({slug:$scope.slug})
    }
  ]
);