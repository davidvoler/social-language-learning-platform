'use strict';

angular.module('sllp.app')
  .controller('LessonAddController', ['$scope', '$location', '$http', 'Lesson', 'Exercise', 'Language',
    function ($scope, $location, $http, Lesson, Exercise, Language) {
      $scope.error = '';
      $scope.isNew = false;
      $scope.exercises = [];

      $scope.init = function () {
        try {
          var id = $scope.lesson = Lesson.get({slug: $route.current.params.id});
          $scope.isNew = false;
          $scope.lesson = Lesson.get({_id: id});
        } catch (e) {
          $scope.isNew = true;
          $scope.lesson = {
            title: '',
            description: '',
            tags: [],
            exercises: [],
            language: '',
            explanation_language: '',
            last_exercise_id: 0
          };
        }
      };
      $scope.init();

      $scope.loadTags = function (query) {
        return $http.get('/api/tag?query=' + query);
      };
      $scope.addTag = function ($tag) {
        console.log($tag);
        var data = {name: $tag, language: $scope.language};
        return $http.post('/api/tag', data);
      };

      $scope.languages = Language.languages;
      $scope.updateLesson = function () {
        $scope.lesson.$update(function (response) {
          if (response.status == 0) {
            $location.path('/lesson/' + response.slug);
          } else {
            $scope.error = response.error;
          }
        });
      };

      $scope.saveNewLesson = function () {
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
            $scope.isNew = false;
            //$location.path('/');
          } else {
            $scope.error = response.error;
          }
        });
      };

      $scope.save = function () {
        if ($scope.isNew) {
          return $scope.saveNewLesson();
        } else {
          return $scope.updateLesson();
        }
      };
      $scope.addExercise = function (exercise_type) {
        $scope.exercises.push({type: exercise_type,
          order: $scope.lesson.last_exercise_id,
          name: '',
          deleted: false,
          editState: true});
        $scope.lesson.last_exercise_id++;
      };
      $scope.deleteExercise = function (idx) {
        $scope.exercises[idx].deleted = true;
      };
      $scope.saveExercise = function (idx) {
        $scope.exercises[idx].save();
      };
    }
  ]
)
  .controller('LessonEditController', ['$scope', '$location', '$route', 'Lesson',
    function ($scope, $location, $route, Lesson) {
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