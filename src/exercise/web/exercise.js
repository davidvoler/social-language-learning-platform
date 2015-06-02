(function () {

    function Exercise($http) {

        var service = this;

        service.query = function (lesson_id) {

        };
        service.get = function (exercise_id) {

        };
        service.setMark = function (exercise_id, mark) {

        };
        service.loadPracticeList = function () {

        };
        return service;


    }

    angular.module('sllp.exercise')
        .service('Exercise', ['$http', Exercise])
}());