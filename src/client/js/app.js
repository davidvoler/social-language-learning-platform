'use strict';

angular.module('sllp.app', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'youtube-embed',
  'ngTagsInput',
  'gettext'
]);

angular.module('sllp.app').run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('it');
});
