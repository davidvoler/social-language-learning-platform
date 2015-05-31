(function () {
    "use strict";
    function EditorEditController(EditorService) {
        var self = this;

    }

    angular.module('sllp.editor')
        .controller('EditorEditController', ['EditorService', EditorEditController]);
}());