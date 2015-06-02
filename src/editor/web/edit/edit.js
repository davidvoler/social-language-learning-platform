(function () {
  "use strict";
  function EditorEditController(EditorService) {
    var self = this;
    self.lesson = {};

    self.exerciseTypes = [
      {etype: 'complete', icon: 'pencil-box-outline'},
      {etype: 'match', icon: 'view-quilt'},
      {etype: 'mix', icon: 'arrange-send-to-back'},
      {etype: 'question', icon: 'help'},
      {etype: 'text', icon: 'tooltip-text'},
      {etype: 'video', icon: 'video'},
      {etype: 'vocabulary', icon: 'briefcase'}
    ];
    self.getClass = function (e) {
      return 'mdi-' + e.icon;
    };
    self.exercises = [

      {
        name: 'Meet and Greet',
        etype: 'complete',
        level: 1,
        items:[],
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        name: 'Dinner',
        etype: 'complete',
        level: 1,
        items:[],
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        name: 'Friends',
        etype: 'video',
        level: 1,
        items:[],
        notes: " I'll be in your neighborhood doing errands"
      }
    ];
    self.selectedExercise = {};
    self.moveUp = function (idx) {
      if (idx <= 0) {
        return;
      } else {
        var elm = self.exercises[idx];
        self.exercises.splice(idx, 1);
        self.exercises.splice(idx - 1, 0, elm);
      }
      self.save();
    };

    self.moveDown = function (idx) {
      if (idx >= self.exercises.length - 1) {
        return;
      } else {
        var elm = self.exercises[idx];
        self.exercises.splice(idx, 1);
        self.exercises.splice(idx + 1, 0, elm);
      }
      self.save();
    };
    self.save = function () {
      return true;
    };
    self.selectExercise = function (idx) {
      self.selectedExercise = self.exercises[idx];
    };

    self.createExercise = function(etype){
      return {
        etype:etype.etype,
        data:{},
        items:[],
        name:'New Exercise'
      };
    };
    self.addExercise = function(etype){
      self.exercises.push(self.createExercise(etype));
      self.selectExercise(self.exercises.length -1);
    };
    self.getExerciseClass = function(e){
      for (var i in self.exerciseTypes){
        if (self.exerciseTypes[i].etype == e.etype){
          return self.getClass(self.exerciseTypes[i]);
        }
      }
      return 'mdi-dots-vertical';
    };
    self.deleteExercise = function(idx){
      self.exercises.splice(idx, 1);
    };

  }

  angular.module('sllp.editor')
      .controller('EditorEditController', ['EditorService', EditorEditController]);
}());