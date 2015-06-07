(function () {
  "use strict";
  function slTopEdit() {
    return {
      restrict: 'E',
      templateUrl: '/static/src/exercise/web/directives/top_edit/top_edit.html',
      scope:{name:'@name',help:'@help'},
      link: function (scope, element, attr) {
      }
    }
  }
  angular.module('sllp.exercise')
      .directive('slTopEdit', [slTopEdit]);

}());