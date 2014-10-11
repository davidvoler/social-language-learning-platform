'use strict';

angular.module('sllp.app')
  .controller('ExerciseController', ['$scope', '$route', 'Lesson',
    function ($scope, $route, Lesson) {

      $scope.error = '';
      var slug = $route.current.params.slug
      var exid = $route.current.params.exid
      console.log(slug);
      console.log(exid);
      $scope.exercise = '';
      $scope.lesson = Lesson.get({slug: $route.current.params.slug}, function () {
        $scope.exercise = $scope.lesson.exercises[exid];
      });
      $scope.setCurrentExercise = function(idx){
        $scope.exercise = $scope.lesson.exercises[idx];
      };

    }
  ]
);