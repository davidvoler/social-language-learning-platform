'use strict';

angular.module('ollp.app')
 .controller('LessonAddController', ['$scope', '$location', 'Lesson',
    function ($scope, $location, Lesson) {
      $scope.error = '';
      $scope.lesson = {
        title: '',
        description: '',
        tags: [],
        exercises:[]
      };
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