(function () {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when('/editor', {
                templateUrl: '/static/src/editor/web/editor.html',
                controller: 'EditorController',
                controllerAs:'editor'
            })
    }

    angular.module('sllp.editor')
        .config(['$routeProvider', routes])
}());
