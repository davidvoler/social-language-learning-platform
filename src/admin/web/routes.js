(function () {

    function routes($routeProvider) {
        $routeProvider
            .when('/admin', {
                templateUrl: '/static/src/admin/web/admin.html',
                controller: 'adminController'
            })
    }

    angular.module('sllp.admin')
        .config(['$routeProvider', routes])

}());
