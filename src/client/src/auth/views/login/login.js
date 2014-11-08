(function () {

  function LoginController(UserService) {
    var self = this;
    self.on_login = function(success,data){
      if (success){
        $location.path('/');
      }else{
        this.username = '';
        this.password = '';
        self.error = data;
      }
    };
    self.login = function(){
      return UserService.login(self.username, self.password, self.on_login)
    };
  }
  angular.module('sllp.auth')
    .controller('LoginController', LoginController)
}());


