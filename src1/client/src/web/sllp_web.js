(function () {
  //replace MODULE_NAME and add dependencies
  angular.module('sllp.web', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'youtube-embed',
    'ngTagsInput',
    'gettext',
    'sllp.auth',
    'sllp.help',
    'sllp.lesson',
    'sllp.home',
    'sllp.menu',
    'sllp.exercise_directives'
  ]);

}());
