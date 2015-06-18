(function () {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when('/editor', {
                templateUrl: '/static/src/editor/web/list/list.html',
                controller: 'EditorListController',
                controllerAs: 'list'
            })
            .when('/editor/edit/:id', {
                templateUrl: '/static/src/editor/web/edit/edit.html',
                controller: 'EditorEditController',
                controllerAs: 'edit'
            })
            .when('/editor/add', {
                templateUrl: '/static/src/editor/web/edit/edit.html',
                controller: 'EditorEditController',
                controllerAs: 'edit'
            })
    }

    angular.module('sllp.editor')
        .config(['$routeProvider', routes])
}());
