(function () {

  function AddLessonController($timeout,
                               $scope,
                               LanguageService,
                               ProfileService,
                               LessonEdit) {
    var self = this;
    self.profile = ProfileService.profile;
    //self.lesson = LessonEdit.create();
    self.createLesson = function () {
      if (ProfileService.loaded){
        self.lesson =  {
        language:ProfileService.profile.edit_lang,
        explanation_language:ProfileService.profile.edit_exp_lang,
        tags:'',
        title:''};
      }else {
        ProfileService.loadProfile().$promise.then(function (results) {
          console.log(results);
          self.lesson = {
            language: results.edit_lang,
            explanation_language: results.edit_exp_lang,
            tags: '',
            title: ''};
        });
      }
    };
    self.createLesson();
    self.profile = ProfileService.profile;
    self.setEditLang = function(){
      return ProfileService.setEditLang(self.lesson.language);
    };
    self.setEditExpLang = function(){
      return ProfileService.setEditExpLang(self.lesson.explanation_language);
    };
    self.loadTags = function($query){
      return LessonEdit.loadTags($query);
    };
    self.addTag = function(tag){
      return LessonEdit.addTag(tag,self.lesson.language);
    };
    self.languages = LanguageService.languages;

  }
  angular.module('sllp.lesson')
    .controller('AddLessonController', AddLessonController)
}());