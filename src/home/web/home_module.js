(function () {
    "use strict";
    var app = angular.module('sllp',
        [
            'ngRoute',
            'ngMaterial',
            'ngCookies',
            'sllp.profile'
        ]
    );
    app.run(function ($location, $cookies, $rootScope) {
      $rootScope.$on('$routeChangeStart', function (scope, next, current) {
        //in case of refresh - the current page is undefined
        if (typeof(current) == "undefined" || $location.path == '/login') {
          $location.path($location.path())
        }
        else {
          if (!$cookies.tfe_user) {
            $location.path("/login");
          }
        }
      });
    })

}());

