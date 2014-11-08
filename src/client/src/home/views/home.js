(function () {
  function HomeController($scope,LanguageService,ProfileService) {
    var self = this;
    $scope.profile = ProfileService.profile;
    $scope.languages = LanguageService.languages;
    $scope.lang = ProfileService.profile.lang;
    $scope.lang_exp = ProfileService.profile.exp_lang;
    $scope.setLang = function(){
      return ProfileService.setLang($scope.lang);
    };
    $scope.setExpLang = function(){
      return ProfileService.setExpLang($scope.exp_lang);
    };
  }
  angular.module('sllp.home')
    .controller('HomeController',HomeController);
}());