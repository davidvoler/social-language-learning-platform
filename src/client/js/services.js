'use strict';

angular.module('sllp.app')
.service('Lesson', ['$resource',
  function ($resource) {
    return $resource('/api/lesson', {},
      {update: {method: 'PUT'}}
    );
  }
])
.service('Profile', ['$resource',
  function ($resource) {
    return $resource('/api/profile', {},
      {update: {method: 'PUT'}}
    );
  }
])
.service('Lesson', ['$resource',
  function ($resource) {
    return $resource('/api/lesson', {},
      {update: {method: 'PUT'}}
    );
  }
])
.service('Language', ['$resource',
  function ($resource) {
    var service = {languages:false};
    var languageResource =  $resource('/api/language', {},
      {update: {method: 'PUT'}}
    );

    service.load= function(){
        service.languages = languageResource.query();
    };
    service.load();
    return service
  }
])
;
