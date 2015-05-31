(function () {

  function UserService($http) {

    var self = this;
    self.userid = false;
    self.loginStatus = false;
    self.checkedLogin = false;
    self.login = function (username, password, callback) {
      var data = {username: username, password: password};
      $http.post('/api/login', data)
        .success(function (data, status, headers, config) {
          if (data.status == 0) {
            //TODO: save user credentials somewhere to be accessible for other controllers
            callback(true, data);
          } else {
            callback(false, data);
          }
        }).error(function (data, status, headers, config) {
          callback(false, data);
        });
    };
    self.logout = function () {
      var data = {};
      //console.log($cookieStore.get('sllp_user'));
      return $http.post('/api/login', data);
    };
    //can use perform a certain action
    self.hasPermission = function (action, context) {
    };
    //can use perform a certain action


    self.checkLogin = function () {
      $http.put('/api/login')
        .success(function (data, status, headers, config) {
          console.log(data);
          if (data.status == 0) {
            self.loginStatus =  true;
            self.userid = data.userid;
          } else {
            self.loginStatus =  false;
          }
        }).error(function (data, status, headers, config) {
          self.loginStatus =  false;
        });
    };

    self.isLoggedIn = function(){
      if (self.checkedLogin){
        return self.loginStatus;
      }else{
        self.checkedLogin = true;
        self.checkLogin();
        return self.loginStatus;
      }
    };
    self.getUserId = function () {
      return self.userid;
    };
    return self;
  }

  angular.module('sllp.auth')
    .service('UserService', ['$http', UserService])
}());


