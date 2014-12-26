/**
 * Help controller should be a modal window showing help for exercise
 * Usually an example of the exercise with explanation.
 *
 */

(function () {
  function ExerciseHelpController($scope, $modalInstance, exercise_type) {
    var self = this;
    $scope.exercise_type = exercise_type;

    $scope.loadExerciseHelp = function(){
      //load exercise help from database

    };

    $scope.ok = function () {
      $modalInstance.close();
    };

  }

  function ExerciseHelpService( $modal) {
    var self = this;

    /**
     * Load exercise help modal
     *
     */
    self.modalHelp = function(exercise_type) {
      //todo: get help from database - based on current language

      var modalInstance = $modal.open({
        templateUrl: '/static/src/help/views/exercise_help/exercise_help.html',
        controller: 'ExerciseHelpController',
        size: 'lg',
        resolve: {
          exercise_type: function () {
            return exercise_type;
          }
        }
      });
      modalInstance.result.then(function () {
        console.log('help closed');
      });
    }
  }

  angular.module('sllp.help')
    .controller('ExerciseHelpController',
    ['$scope', '$modalInstance', ExerciseHelpController]);


  angular.module('sllp.help')
    .service('ExerciseHelpService',
    ['$modal',  ExerciseHelpService]);


}());