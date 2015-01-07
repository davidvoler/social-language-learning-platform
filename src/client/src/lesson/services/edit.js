(function () {

  function LessonEdit($http, UserService, ProfileService,$resource) {

    var self = this;

    var lessonResource = $resource('/api/lesson/edit', {},
      {update: {method: 'PUT'}}
    );
    self.createExercise = function (lesson) {
      if (!lesson._id) {
        self.save(lesson);
      }
      return {
        lesson_id: lesson._id,
        type: exercise_type,
        order: $scope.lesson.last_exercise_id,
        name: '',
        deleted: false,
        editState: true};
    };
    self.save = function (lesson) {
      if (lesson._id) {
        var lessonRes = new lessonResource(lesson);
        lessonRes.$save(function (response) {
          console.log(response);
          if (response.status == 0) {
            //$location.path('/lesson/' + response.slug);
            lesson._id = response._id;
            console.console.log(response);
            //$location.path('/');
          } else {
            console.console.log(data);
          }
        });
      } else {
        lessonResource.update(lesson);
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
    self.loadTags = function (query, language) {
      var data = {query: query, language: language};
      console.log(data);
      var url = '/api/tag?query=' + query + '&language=' + language;
      return $http.get(url);
    };
    self.addTag = function ($tag, language) {
      if (!UserService.isLoggedIn()) {
        return false;
      }
      console.log($tag);
      var data = {name: $tag.text, language: language};
      return $http.post('/api/tag', data);
    };
    return self;
  }

  angular.module('sllp.lesson')
    .service('LessonEdit',['$http', 'UserService', 'ProfileService','$resource', LessonEdit])
}());