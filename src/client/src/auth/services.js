(function () {

  function Auth($http) {

    var self = this;
    self.login = function () {
    };
    self.logout = function () {
    };
    //can use perform a certain action
    self.hasPermission = function (action, context) {
    };
    //can use perform a certain action
    self.isLoggedIn = function () {
    };
  }

  angular.angular.module('sllp.auth')
    .service('Auth', Auth)
}());