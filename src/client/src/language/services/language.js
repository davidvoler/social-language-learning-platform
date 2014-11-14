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



/*
function LanguageService1($http){
    var self = this;
    self.loaded = false;
    self.error = '';
    self.languages = [];
    self.init = function(){
      $http.get('/api/language')
        .success(function(data){
          self.languages = data;
          console.log('In service');
          console.log(self.languages);
          self.loaded= true;
      });
    };
    self.init();
  }
 */