(function () {
    "use strict";
    function ProfileService($http) {
        var service = {
            url: '/api/profile'
        };
        service.get = function () {
            return $http.get(service.url);
        };
        service.save = function(profile){
            return $http.put(service.url, profile);
        };
        return service;
    }

    angular.module('sllp.profile')
        .service('ProfileService', ['$http', ProfileService]);
}());