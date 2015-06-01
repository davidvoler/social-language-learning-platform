(function () {
    "use strict";
    function EditorEditController(EditorService) {
        var self = this;
        self.exercises = [
            {
                name: 'First steps in Georgian',
                type: 'Min Li Chan',
                level: 1,
                weight:0,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Numbers in Georgian',
                type: 'Min Li Chan',
                level: 1, weight:1,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Meet and Greet',
                type: 'Min Li Chan',
                level: 1, weight:2,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Dinner',
                type: 'Min Li Chan',
                level: 1, weight:3,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Friends',
                type: 'Min Li Chan',
                level: 1, weight:4,
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
        self.save = function(){
            return true;
        };
        self.selectExercise = function(idx){
            self.selectedExercise = self.exercises[idx];
        };
    }

    angular.module('sllp.editor')
        .controller('EditorEditController', ['EditorService', EditorEditController]);
}());