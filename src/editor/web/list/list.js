(function () {
  "use strict";
  function EditorListController($location, EditorService) {
    var self = this;
    self.q = '';
    self.error = '';

    self.lessons = [];
    self.selectedLesson = {};

    self.load= function (){
      var req = EditorService.getList();
      req.success(function(data){
        self.lessons = data;
      }).error(function (err){
        self.error = err;
      });
    };
    self.load();
    self.edit = function (lesson) {

    };


    self.selectLesson = function (idx) {
      self.selectedLesson = self.lessons[idx];
    };


  }

  angular.module('sllp.editor')
      .controller('EditorListController', ['$location', 'EditorService', EditorListController]);
}());