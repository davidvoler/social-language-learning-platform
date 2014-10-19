'use strict';

angular.module('sllp.app')
 .controller('LessonAddController', ['$scope', '$location','$http', 'Lesson','Language',
    function ($scope, $location,$http, Lesson, Language) {
      $scope.error = '';
      $scope.exerciseResults = [];
      $scope.lesson = {
        title: '',
        description: '',
        tags: [],
        exercises:[],
        language:'',
        explanation_language:'',
        last_exercise_id:0
      };
      $scope.loadTags = function(query) {
                     return $http.get('/api/tag?query=' + query);
      };
      $scope.addTag = function($tag) {
            console.log($tag);
                     var data = {name:$tag, language: $scope.language};
                     return $http.post('/api/tag',data);
      };

      $scope.languages = Language.languages;
      $scope.save = function () {
        //is the new lesson valid
        if (!$scope.lesson.title) {
          $scope.error = 'Lesson name is mandatory';
          return false;
        } else {
          $scope.error = '';
        }
        var lesson = new Lesson($scope.lesson);
        lesson.$save(function (response) {
          console.log(response);
          if (response.status == 0) {
            //$location.path('/lesson/' + response.slug);
            $location.path('/');
          } else {
            $scope.error = response.error;
          }
        });
      };
      $scope.addExercise = function(exercise_type){
        $scope.lesson.exercises.push({type:exercise_type ,
                            id: $scope.lesson.last_exercise_id,
                            name:'',
                            editState:true});
        $scope.exerciseResults.push({id:$scope.lesson.last_exercise_id,
                                     correct:0});
        $scope.lesson.last_exercise_id++;
      };
      $scope.deleteExercise = function(idx){
        //delete from both lesson.exercises and exerciseResults
        $scope.lesson.exercises.splice(idx,1);
        $scope.exerciseResults.splice(idx,1);
      };
    }
  ]
)
  .controller('LessonEditController', ['$scope', '$location','$route', 'Lesson',
    function ($scope,$location,$route, Lesson) {
      $scope.error = '';
      $scope.lesson = Lesson.get({slug: $route.current.params.slug});
      $scope.save = function () {
        $scope.lesson.$update(function (response) {
          if (response.status == 0) {
            $location.path('/lesson/' + response.slug);
          } else {
            $scope.error = response.error;
          }
        });
      };
    }
  ]
)
  .controller('LessonViewController', ['$scope', '$route', 'Lesson',
    function ($scope, $route, Lesson) {
      console.log($route.current.params.slug);
      $scope.error = '';
      $scope.lesson = Lesson.get({slug: $route.current.params.slug}, function () {
        console.log($scope.lesson);
      });
    }
  ]
);