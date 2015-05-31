(function () {
    "use strict";
    function EditorService($http) {
        var service = {
            url: '/api/editor'
        };
        service.get = function () {
            return $http.get(service.url);
        };
        service.save = function(editor){
            return $http.put(service.url, editor);
        };
        return service;
    }

    angular.module('sllp.editor')
        .service('EditorService', ['$http', EditorService]);
}());