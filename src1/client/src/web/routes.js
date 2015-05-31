/**
 * Created by davidl on 06/11/14.
 */

(function () {

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/src/home/views/home.html',
        controller: 'HomeController as home'
      })


  }
  //configure location to be html5 compliant - removing the # sign
  //creates issues when trying to reload
  //ISSUE: Using this mode requires URL rewriting on server side,
  function locationConf($locationProvider){
    $locationProvider.html5Mode(true);
  }

  angular.module('sllp.web')
    .config(['$routeProvider',routes]);

}());