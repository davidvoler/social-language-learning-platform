'use strict';

angular.module('sllp.app')
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