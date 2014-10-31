'use strict';

angular.module('sllp.app')
  .controller('ProfileController', ['$scope','$rootScope','Language',
    function ($scope,$rootScope,Language) {
        $scope.setUiLanguage = function(lang_code){
            Language.setUiLanguage(lang_code);
        };
        $scope.getLanguages = function(){
            return Language.languages;
        };
    }
  ]
);