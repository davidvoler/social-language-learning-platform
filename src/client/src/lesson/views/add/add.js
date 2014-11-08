(function () {

  function AddLessonController($timeout,
                               $scope,
                               LanguageService,
                               ProfileService,LessonEdit) {
    var self = this;

    self.profile = ProfileService.profile;
    self.lesson = LessonEdit.create();
    self.setEditLang = function(){
      return ProfileService.setEditLang(self.lesson.language);
    };
    self.setEditExpLang = function(){
      return ProfileService.setEditExpLang(self.lesson.explanation_language);
    };
    self.languages = LanguageService.languages;

  }
  angular.module('sllp.lesson')
    .controller('AddLessonController', AddLessonController)
}());