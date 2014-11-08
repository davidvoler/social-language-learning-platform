(function () {

  function LessonEdit($http, UserService,ProfileService) {

    var self = this;

    self.create = function () {
      return {
        language:ProfileService.profile.edit_lang,
      explanation_language:ProfileService.profile.edit_exp_lang,
      tags:'',
      title:''};
    };
    self.save = function (lesson) {
      if (lesson._id){
        $http.put();
      }else{
        $http.post();
      }
    };
    self.saveAs = function (lesson) {
      lesson.copied_from = lessen._id;
      delete lessen._id
      $http.post(lesson);

    };
    //get a list of lessons the user can edit
    self.find = function () {

    };
    self.get = function (lesson_id) {
      http.get(lesson_id)
    };
    self.delete = function (lesson) {
      $http.delete(lesson);
    };
    self.publish = function (lesson) {
      lesson.published = true;
      $http.post(lesson);
    };
    self.loadTags = function (query,language) {
      var data = {query:query, language:language};
      return $http.get('/api/tag',data);
    };
    self.addTag = function (tag,language) {
      if (!UserService.isLoggedIn()){
        return false;
      }
      console.log($tag);
      var data = {name: $tag,language: language};
      return $http.post('/api/tag', data);
    };
    return self

  }

  angular.module('sllp.lesson')
    .service('LessonEdit', LessonEdit)
}());