(function () {
    /**
     * Admin service - describe your service here
     * @param $http - using angular $http service
     *
     */
    function AdminService($http) {

        var service = {url: '/api/admin'};
        service.get = function () {
            return $http.get(service.url);
        };

        return service;
    }

    angular.module('sllp.admin')
        .service('AdminService', ['$http', AdminService]);
}());

