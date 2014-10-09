'use strict';

angular.module('ollp.app')
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
]);
