(function () {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when('/profile', {
                templateUrl: '/static/src/profile/web/profile.html',
                controller: 'ProfileController',
                controllerAs:'profile'
            })
    }

    angular.module('sllp.profile')
        .config(['$routeProvider', routes])
}());
