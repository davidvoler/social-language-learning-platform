/**
 * Created by davidl on 06/11/14.
 */
// Angular routs - must include ngRoute in main module
// angr
(function () {

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/src/auth/views/login/login.html',
        controller: 'LoginController'
      })

  }

  angular.module('sllp.web')
    .config(routes);

}());