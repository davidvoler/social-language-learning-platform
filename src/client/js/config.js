'use strict';

var checkLogin= function ($location,$cookieStore) {
   var user = $cookieStore.get('sllp_user_prof');
    console.log(user);
    if (user) {
      return true;
    } else {
        $location.path("/login");
    }
};


angular.module('sllp.app').config(['$routeProvider','$locationProvider',
  function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/partials/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: '/static/partials/about.html',
        controller: 'AboutController'
      })
      .when('/help', {
        templateUrl: '/static/partials/help.html',
        controller: 'HelpController'
      })
      .when('/lesson/:slug', {
        templateUrl: '/static/partials/lesson.html',
        controller: 'LessonViewController'
      })
      .when('/lesson/:slug/:exid', {
        templateUrl: '/static/partials/exercise.html',
        controller: 'ExerciseController'
      })
      .when('/add/lesson', {
        templateUrl: '/static/partials/lesson_edit.html',
        controller: 'LessonAddController'
      })
      .when('/edit/lesson/:slug', {
        templateUrl: '/static/partials/lesson_edit.html',
        controller: 'LessonEditController'
      })
      .when('/profile', {
        templateUrl: '/static/partials/profile.html',
        controller: 'ProfileController'
      })
    .when('/login', {
        templateUrl: '/static/partials/login.html',
        controller: 'LoginController'
      })
    .when('/login_google', {
        templateUrl: '/static/partials/login_google.html',
        controller: 'LoginGoogleController'
      });
    $locationProvider.html5Mode(true);
  }
]);
