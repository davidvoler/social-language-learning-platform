(function () {
    "use strict";
    function EditorService($http) {
        var service = {
            url: '/api/editor'
        };
        service.get = function () {
            return $http.get(service.url);
        };
        service.save = function(lesson){
            return $http.post(service.url, lesson);
        };
        service.update = function(lesson){
            return $http.put(service.url, lesson);
        };
        return service;
    }

    angular.module('sllp.editor')
        .service('EditorService', ['$http', EditorService]);
}());