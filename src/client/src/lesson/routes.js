(function () {

  function lessonRoutes($routeProvider) {
    $routeProvider
      .when('/lessons', {
        templateUrl: '/static/src/lesson/views/list/list.html',
        controller: 'ListLessonController as list'
      })
      .when('/lesson/add', {
        templateUrl: '/static/src/lesson/views/add/add.html',
        controller: 'AddLessonController as add'
      })
      .when('/lesson/edit/:id', {
        templateUrl: '/static/src/lesson/views/edit/edit.html',
        controller: 'EditLessonController as edit'
      })
      .when('/lesson/practice/:id', {
        templateUrl: '/static/src/lesson/views/practice/practice.html',
        controller: 'PracticeLessonController as practice'
      })

  }

  angular.module('sllp.lesson')
    .config(['$routeProvider',lessonRoutes]);
}());
