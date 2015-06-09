(function () {
  "use strict";
  function LanguageService($http) {
    var service = {
      url:''
    };

    service.getLanguages = function(){
      return [
        {_id:'en',name:'English'},
        {_id:'he',name:'Hebrew'},
        {_id:'fr',name:'French'},
        {_id:'ar',name:'Arabic'}
      ];
    };
    return service;
  }

  angular.module('sllp.common')
      .service('LanguageService', ['$http', LanguageService]);
}());
