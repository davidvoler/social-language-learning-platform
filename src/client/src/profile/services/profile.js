(function () {
  function ProfileService($http,UserService){
    var self = this;
    self.profile = false;
    self.createAnonimProfile = function(){
      self.profile = {
        lang:'',
        exp_lang:'',
        anon:true
      }
    };
    self.init = function(){
      //TODO: if user is loggedin - get profile from database
      //else: create local pseudo profile
      if (UserService.isLoggedIn()){
        $http.get('/api/profile')
          .success(function(data){
            if (data.status == 0){
              self.profile = data.profile;
            }else{
              self.createAnonimProfile();
            }

          })
      }else{
        self.createAnonimProfile();
      }
      
    };
    self.init();
    
  }

  angular.module('sllp.profile')
    .service('ProfileService',ProfileService);
}());