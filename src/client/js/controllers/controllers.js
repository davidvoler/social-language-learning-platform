'use strict';

angular.module('ollp.app')
  .controller('HomeController', ['$scope','Lesson',
    function ($scope,Lesson) {
      $scope.controllerName = 'HomeController';
      $scope.lessons = Lesson.query();
    }
  ]
)
  .controller('HelpController', ['$scope',
    function ($scope) {
      $scope.controllerName = 'HelpController';
    }
  ]
)
 .controller('AboutController', ['$scope',
    function ($scope) {
      $scope.controllerName = 'AboutController';
    }
  ]
)
  .controller('ProfileController', ['$scope',
    function ($scope) {
      $scope.controllerName = 'ProfileController';
    }
  ]
);