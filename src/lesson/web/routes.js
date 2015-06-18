(function () {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when('/lesson', {
                templateUrl: '/static/src/lesson/web/lesson.html',
                controller: 'LessonController',
                controllerAs:'lesson'
            })
    }

    angular.module('sllp.lesson')
        .config(['$routeProvider', routes])
}());
