(function () {
  function HomeController(LanguageService,ProfileService) {
    var self = this;
    self.profile = ProfileService.profile;
    self.languages = LanguageService.languages;
    self.lang = ProfileService.profile.lang;
    self.lang_exp = ProfileService.profile.exp_lang;
    self.setLang = function(){
      return ProfileService.setLang(self.lang);
    };
    self.setExpLang = function(){
      return ProfileService.setExpLang(self.exp_lang);
    };
  }
  angular.module('sllp.home')
    .controller('HomeController',HomeController);
}());