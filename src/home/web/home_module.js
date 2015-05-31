(function () {
    "use strict";
    var app = angular.module('ate.tfe',
        [
            'ngRoute',
            'ngMaterial',
            'ngCookies',
            'ate.tfe.profile',
            'ate.tfe.monitor',
            'ate.tfe.devices',
            'ate.tfe.admin',
            'ate.tfe.methods',
            'ate.tfe.group'
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

