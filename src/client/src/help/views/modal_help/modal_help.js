(function () {
  function ModalHelpController($scope, $modalInstance, helpInfo) {
    var self = this;
    console.log(helpInfo);
    $scope.helpInfo = helpInfo;

    $scope.loadExerciseHelp = function () {
      //load exercise help from database

    };

    $scope.ok = function () {
      $modalInstance.close();
    };

  }

  function ModalHelpService($modal) {
    var self = this;
    self.info = {};

    /**
     * Load exercise help modal
     *
     */

    self.modalHelp = function (help_id) {
      //todo: get help from database - based on current language
      console.log(help_id);
      var helpInfo = {title: 'Title',
        content: 'some content',
        help_id:help_id
      };
      console.log(self.info);
      var modalInstance = $modal.open({
        templateUrl: '/static/src/help/views/modal_help/modal_help.html',
        controller: 'ModalHelpController',
        size: 'lg',
        resolve: {
          helpInfo: function () {
            return helpInfo;
          }
        }
      });
      modalInstance.result.then(function () {
        console.log('help closed');
      });
    }
  }

  angular.module('sllp.help')
    .controller('ModalHelpController',
    ['$scope', '$modalInstance','helpInfo', ModalHelpController]);


  angular.module('sllp.help')
    .service('ModalHelpService',
    ['$modal', ModalHelpService]);
}());