(function () {
    "use strict";
    function PracticeService($http) {
        var service = {
            url: '/api/practice'
        };
        service.get = function () {
            return $http.get(service.url);
        };
        service.save = function(practice){
            return $http.put(service.url, practice);
        };
        return service;
    }

    angular.module('sllp.practice')
        .service('PracticeService', ['$http', PracticeService]);
}());