(function () {
    "use strict";
    function LessonController(LessonService) {
        var self = this;
        self.q = '';

        self.lessons = [
            {
                name: 'First steps in Georgian',
                type: 'Min Li Chan',
                level: 1,
                weight: 0,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Numbers in Georgian',
                type: 'Min Li Chan',
                level: 1, weight: 1,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Meet and Greet',
                type: 'Min Li Chan',
                level: 1, weight: 2,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Dinner',
                type: 'Min Li Chan',
                level: 1, weight: 3,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Friends',
                type: 'Min Li Chan',
                level: 1, weight: 4,
                notes: " I'll be in your neighborhood doing errands"
            }
        ];
        self.selectedLesson = {};


        self.selectLesson = function (idx) {
            self.selectedLesson = self.lessons[idx];
        };

    }

    angular.module('sllp.lesson')
        .controller('LessonController', ['LessonService', LessonController]);
}());