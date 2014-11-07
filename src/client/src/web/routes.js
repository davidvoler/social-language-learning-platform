/**
 * Created by davidl on 06/11/14.
 */
// Angular routs - must include ngRoute in main module
// angr
(function () {

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/src/home/views/home.html',
        controller: 'HomeController'
      })

  }

  angular.module('sllp.web')
    .config(routes);

}());