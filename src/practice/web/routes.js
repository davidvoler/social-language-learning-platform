(function () {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when('/practice', {
                templateUrl: '/static/src/practice/web/practice.html',
                controller: 'PracticeController',
                controllerAs:'practice'
            })
    }

    angular.module('sllp.practice')
        .config(['$routeProvider', routes])
}());
