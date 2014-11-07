(function () {

  function Auth($http) {

    var self = this;
    self.login = function (username,password,callback) {
        var data = {username: username, password: password};
        $http.post('/api/login', data)
          .success(function (data, status, headers, config) {
          if (data.status == 0) {
            //TODO: save user credentials somewhere to be accessible for other controllers
            callback(true,data);
          } else {
            callback(false,data);
          }
        }).error(function (data, status, headers, config) {
          callback(false,data);
        });
    };
    self.logout = function () {
       var data = {};
        //console.log($cookieStore.get('sllp_user'));
        return $http.put('/api/login', data);
    };
    //can use perform a certain action
    self.hasPermission = function (action, context) {
    };
    //can use perform a certain action
    self.isLoggedIn = function () {
    };
    //optional - add profile to this service
    self.getProfile = function () {
    };
    self.saveProfile = function (profile) {
    };
  }
  angular.angular.module('sllp.auth')
    .service('Auth', Auth)
}());


