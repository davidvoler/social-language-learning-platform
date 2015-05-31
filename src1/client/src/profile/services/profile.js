(function () {
  function ProfileService($resource,$timeout,UserService) {
    var self = this;
    var service = {profile: {},loaded:false};
    var profileResource = $resource('/api/profile', {},
      {update: {method: 'PUT'}}
    );
    service.createAnonimProfile = function () {
      service.profile = {
        lang: '',
        exp_lang: '',
        edit_lang: '',
        edit_exp_lang: '',
        anon: true
      };
      service.loaded = true;
    };
    service.load = function () {
      if (UserService.isLoggedIn()){
        service.profile = profileResource.get({user_id:UserService.getUserId()})
          /*.$promise.then(function(results){
            console.log(results);
            service.profile = results;
            service.loaded = true;

          });
         */
      }else{
        service.createAnonimProfile();
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
    service.loadProfile = function(){
      return profileResource.get({user_id:UserService.getUserId()})
    };
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
    .service('ProfileService', ['$resource','$timeout','UserService',ProfileService]);
}());
