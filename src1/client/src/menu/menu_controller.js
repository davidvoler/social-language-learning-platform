(function () {
  function MenuController(LanguageService,UserService) {
    var self = this;

    self.getLanguages = function(){
      return LanguageService.getLanguages();
    };
    self.setUiLanguage = function(lang_code){
      return LanguageService.setUiLanguage(lang_code);
    };
    self.isLoggedIn = function(){
      return UserService.isLoggedIn();
    };
    self.getUserId = function(){
      return UserService.getUserId();
    };
    self.logout = function(){
      return UserService.logout();
    }

    return self;


  }
  angular.module('sllp.menu')
    .controller('MenuController',['LanguageService','UserService',MenuController]);
}());

//menu could become a directive.