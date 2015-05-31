'use strict';

angular.module('sllp.app')
  .directive('editText', function () {
    return {
      restrict: 'E',
      //transclude: true,
      //scope: {exercise: "="},
      controller: function ($scope) {
        $scope.init = function () {
          if (!$scope.exercise.text) {
            $scope.exercise.text='';
          }
        };
        $scope.init();
      },
      templateUrl: '/static/partials/directives/text_edit.html'
/*      template:
'<div class="help" translate>Explanation, or a text easy that might follow with questions</div>\
<div translate>Edit Text</div>\
<label class="item item-input item-input-inset">\
<textarea class="form-control" rows="3" placeholder="Text" ng-model="exercise.text" ></textarea>\
</label>'
*/
    };
  })
  .directive('previewText', function () {
    return {
      restrict: 'E',
      //scope: { exercise: '='},
      templateUrl: '/static/partials/directives/text_preview.html'
    };

  });
