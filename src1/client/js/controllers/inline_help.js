'use strict';

angular.module('sllp.app')
  .directive('editComplete', function () {
    return {
      restrict: 'E',
      scope: {help: "="}
    };
  });

