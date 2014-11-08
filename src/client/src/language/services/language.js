(function () {
  function LanguageService($http){
    var self = this;
    self.loaded = false;
    self.error = '';
    self.languages = [];
    self.init = function(){
      $http.get('/api/language')
        .success(function(data){
        self.languages = data;
        self.loaded= true;
      });
    };
    self.init();
  }
  angular.module('sllp.language')
    .service('LanguageService',LanguageService);
}());