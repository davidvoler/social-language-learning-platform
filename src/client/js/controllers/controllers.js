'use strict';

angular.module('ollp.app')
  .controller('HomeController', ['$scope',
    function ($scope) {
      $scope.controllerName = 'HomeController';
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
.controller('LessonController', ['$scope',
    function ($scope) {
      $scope.controllerName = 'LessonController';
    }
  ]
)
  .controller('ProfileController', ['$scope',
    function ($scope) {
      $scope.controllerName = 'ProfileController';
    }
  ]
);