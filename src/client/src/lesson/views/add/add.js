(function () {

  function AddLessonController($timeout, $scope, LanguageService, ProfileService, LessonEdit, ExerciseEdit) {
    var self = this;
    self.profile = ProfileService.profile;
    self.languages = LanguageService.languages;
    self.exercises = [];
    //self.lesson = LessonEdit.create();
    self.createLesson = function () {
      if (ProfileService.profile._id || ProfileService.profile.anon) {
        //console.log(ProfileService.profile);
        self.lesson = {
          language: ProfileService.profile.edit_lang,
          explanation_language: ProfileService.profile.edit_exp_lang,
          tags: '',
          title: ''};
      } else {
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
    self.setEditLang = function () {
      return ProfileService.setEditLang(self.lesson.language);
    };
    self.setEditExpLang = function () {
      return ProfileService.setEditExpLang(self.lesson.explanation_language);
    };
    self.loadTags = function ($query) {
      return LessonEdit.loadTags($query, self.lesson.language);
    };
    self.addTag = function ($tag) {
      console.log('On tag added');
      return LessonEdit.addTag($tag, self.lesson.language);
    };

    self.addExercise = function (type) {
      console.log('adding a new exercise:' + type);
      self.exercises.push(ExerciseEdit.create(1, type));
    };
    self.saveLesson = function () {
      LessonEdit.save(self.lesson)

    }

  }

  angular.module('sllp.lesson')
    .controller('AddLessonController',
    ['$timeout',
      '$scope',
      'LanguageService',
      'ProfileService',
      'LessonEdit',
      'ExerciseEdit',
      AddLessonController])
}());