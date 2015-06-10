(function () {
    "use strict";
    function ProfileController(ProfileService, LanguageService) {
        var self = this;
        self.languages = LanguageService.getLanguages();


    }

    angular.module('sllp.profile')
        .controller('ProfileController', ['ProfileService','LanguageService', ProfileController]);
}());