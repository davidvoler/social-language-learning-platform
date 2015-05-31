(function () {
    'use strict';
    function HomeController() {
        var self = this;

        var imagePath = 'img/list/60.jpeg';
        self.lessons = [
            {
                name: 'First steps in Georgian',
                author: 'Min Li Chan',
                level: 1,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Numbers in Georgian',
                author: 'Min Li Chan',
                level: 1,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Meet and Greet',
                author: 'Min Li Chan',
                level: 1,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Dinner',
                author: 'Min Li Chan',
                level: 1,
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                name: 'Friends',
                author: 'Min Li Chan',
                level: 1,
                notes: " I'll be in your neighborhood doing errands"
            }
        ];
        self.selectedLesson = self.lessons[0];
        self.selectLessen = function(idx){
             self.selectedLesson = self.lessons[idx];
        }
    }

    angular.module('sllp')
        .controller('HomeController',
        [HomeController]);

}());