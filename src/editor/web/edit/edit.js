(function () {
  "use strict";
  function EditorEditController($location, $route, EditorService, LanguageService,
                                ExerciseService) {
    var self = this;
    self.lesson = {};
    self.languages = LanguageService.getLanguages();
    self.exerciseTypes = ExerciseService.getTypes();
    self.lesson_id = $route.current.params.id;
    self.loadLesson = function () {
      if (self.lesson_id) {
        var req = EditorService.get(self.lesson_id);
        req.success(function (data) {
          self.lesson = data;
        }).error(function (err) {
          self.error = err;
        });
      } else {
        self.lesson = EditorService.create()
      }
    };


    self.loadLesson();


    self.getClass = function (e) {
      return 'mdi-' + e.icon;
    };
    self.exercises = [];
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
      if (self.lesson._id) {
        var req = EditorService.update(self.lesson);

      } else {
        var req = EditorService.save(self.lesson);
        req.success(function (data) {
          console.log(data);
          self.lesson._id = data._id;
        }).error(function (err) {
          self.error = err;
        });
      }

    };
    self.selectExercise = function (idx) {
      self.selectedExercise = self.exercises[idx];
    };

    self.createExercise = function (etype) {
      return {
        etype: etype.etype,
        data: {},
        items: [],
        name: 'New Exercise'
      };
    };
    self.addExercise = function (etype) {
      self.lesson.exercises.push(self.createExercise(etype));
      self.selectExercise(self.lesson.exercises.length - 1);
      self.save();
    };
    self.getExerciseClass = function (e) {
      for (var i in self.exerciseTypes) {
        if (self.exerciseTypes[i].etype == e.etype) {
          return self.getClass(self.exerciseTypes[i]);
        }
      }
      return 'mdi-dots-vertical';
    };
    self.deleteExercise = function (idx) {
      self.exercises.splice(idx, 1);
    };

  }

  angular.module('sllp.editor')
      .controller('EditorEditController', ['$location', '$route', 'EditorService',
        'LanguageService', 'ExerciseService', EditorEditController]);
}());