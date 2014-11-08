(function () {

  function AddLessonController($timeout,
                               $scope,
                               LanguageService,
                               ProfileService) {
    var self = this;

    $scope.profile = ProfileService.profile;
    $scope.lesson = {
      language:ProfileService.profile.edit_lang,
      explanation_language:ProfileService.profile.edit_exp_lang,
      tags:'',
      title:''
    };
    $scope.setEditLang = function(){
      return ProfileService.setEditLang($scope.lesson.language);
    };
    $scope.setEditExpLang = function(){
      return ProfileService.setEditExpLang($scope.lesson.explanation_language);
    };
    $scope.languages = LanguageService.languages;
    console.log($scope.languages);
    $scope.profile = ProfileService;

    self.f = function(){
      //$scope.languages = LanguageService.languages;
      console.log($scope.languages);
      //console.log(LanguageService.languages);
    };
    $timeout(self.f,500);

  }
  angular.module('sllp.lesson')
    .controller('AddLessonController', AddLessonController)
}());