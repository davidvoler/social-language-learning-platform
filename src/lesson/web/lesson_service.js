(function () {
    "use strict";
    function LessonService($http) {
        var service = {
            url: '/api/lesson'
        };
        service.get = function () {
            return $http.get(service.url);
        };
        service.save = function(lesson){
            return $http.put(service.url, lesson);
        };
        return service;
    }

    angular.module('sllp.lesson')
        .service('LessonService', ['$http', LessonService]);
}());