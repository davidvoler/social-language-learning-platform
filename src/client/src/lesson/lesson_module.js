(function () {

  function lessonRoutes($routeProvider) {
    $routeProvider
      .when('/lessons', {
        templateUrl: '/static/src/lesson/views/list/list.html',
        controller: 'ListLessonController'
      })
      .when('/lesson/add', {
        templateUrl: '/static/src/lesson/views/add/add.html',
        controller: 'AddLessonController'
      })
      .when('/lesson/edit/:id', {
        templateUrl: '/static/src/lesson/views/edit/edit.html',
        controller: 'EditLessonController'
      })
      .when('/lesson/practice/:id', {
        templateUrl: '/static/src/lesson/views/practice/practice.html',
        controller: 'PracticeLessonController'
      })

  }

  angular.module('sllp.lesson', ['sllp.language']).config(lessonRoutes);
}());
