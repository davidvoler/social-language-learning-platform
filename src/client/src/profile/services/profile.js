(function () {
  function ProfileService($resource,UserService) {
    var self = this;
    var service = {profile: {}};
    var profileResource = $resource('/api/profile', {},
      {update: {method: 'PUT'}}
    );
    self.createAnonimProfile = function () {
      self.profile = {
        lang: '',
        exp_lang: '',
        edit_lang: '',
        edit_exp_lang: '',
        anon: true
      }
    };
    service.load = function () {
      if (UserService.isLoggedIn()){
        service.profile = profileResource.get({user_id:UserService.getUserId()});
      }else{
        self.createAnonimProfile();
      }
    };
    service.save = function () {
      if (UserService.isLoggedIn()){
        profileResource.update(service.profile);
      }else{
        return
      }
    };
    service.load();

    service.setLang = function (lang) {
      service.profile.lang = lang;
      service.save();
    };
    service.setExpLang = function (lang) {
      service.profile.exp_lang = lang;
      service.save();
    };
    service.setEditLang = function (lang) {
      service.profile.edit_lang = lang;
      service.save();
    };
    service.setEditExpLang = function (lang) {
      service.profile.edit_exp_lang = lang;
      service.save();
    };


    return service
  }

  angular.module('sllp.profile')
    .service('ProfileService', ProfileService);
}());

/*
function ProfileService1($http, UserService) {
    var self = this;
    self.profile = false;
    self.setLang = function (lang) {
      self.profile.lang = lang;
    };
    self.setExpLang = function (lang) {
      self.profile.exp_lang = lang;
    };
    self.setEditLang = function (lang) {
      self.profile.edit_lang = lang;
    };
    self.setEditExpLang = function (lang) {
      self.profile.edit_exp_lang = lang;
    };
    self.createAnonimProfile = function () {
      self.profile = {
        lang: '',
        exp_lang: '',
        edit_lang: '',
        edit_exp_lang: '',
        anon: true
      }
    };
    self.init = function () {
      //TODO: if user is loggedin - get profile from database
      //else: create local pseudo profile
      if (UserService.isLoggedIn()) {
        $http.get('/api/profile')
          .success(function (data) {
            if (data.status == 0) {
              self.profile = data.profile;
            } else {
              self.createAnonimProfile();
            }

          })
      } else {
        self.createAnonimProfile();
      }

    };
    self.init();

  }

 */