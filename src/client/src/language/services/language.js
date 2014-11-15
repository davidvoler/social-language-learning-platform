(function () {
  function LanguageService($resource, gettextCatalog) {
    var service = {languages:false};
    var languageResource =  $resource('/api/language', {},
      {update: {method: 'PUT'}}
    );
    service.load= function(){
        service.languages = languageResource.query();
    };
    service.load();
    service.setUiLanguage= function(lang_code){
        gettextCatalog.setCurrentLanguage(lang_code);
    };
    return service
  }


  angular.module('sllp.language')
    .service('LanguageService',['$resource','gettextCatalog',LanguageService]);
}());
