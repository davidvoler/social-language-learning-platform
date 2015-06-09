(function () {
  /**
   * Login Controller using the following services:

   * @param $mdSidenav
   * @param AuthService
   */
  function MenuController(AuthService, LanguageService) {
    var self = this;

    self.username = AuthService.getUsername();
    self.language = 'en';
    self.languages = LanguageService.getLanguages();

    self.openLeftMenu = function () {

    };

    self.logout = function () {
      return AuthService.logout();
    };
    self.hasPermission = function (action) {
      return AuthService.hasPermission(action);
    };

  }

  angular.module('sllp')
      .controller('MenuController', ['AuthService', 'LanguageService',
        MenuController]);
}());