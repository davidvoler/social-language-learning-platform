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
.service('Exercise', ['$resource',
  function ($resource) {
    return $resource('/api/exercise', {},
      {update: {method: 'PUT'}}
    );
  }
])
.service('Language', ['$resource','gettextCatalog',
  function ($resource, gettextCatalog) {
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
])
.service('Exercise', ['$resource',
  function ($resource) {
    var service = {lesson:false,
                   exercise:false
    };

    var lessonResource =  $resource('/api/lesson', {},
      {update: {method: 'PUT'}}
    );

    service.get= function(slug,exid){
    if (service.lesson.slug != slug ||!service.lesson){
        //load lesson
        service.lesson = lessonResource.get({slug:slug}, function () {
        service.exercise = service.lesson.exercises[exid];
        return service;
      });
    }
    else{
        service.exercise = service.lesson.exercises[exid];
        return service;
    }

    }
    return service
  }
])
;
