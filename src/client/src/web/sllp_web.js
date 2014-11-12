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
    'sllp.lesson',
    'sllp.home',
    'sllp.exercise_directives'
  ]);

}());
