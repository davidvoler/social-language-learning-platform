'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        nggettext_extract: {
            pot: {
                files: {
                    'po/partials.pot': ['partials/*.html'],
                    'po/directives.pot': ['partials/directives/*.html','partials/directives/complete/*.html'],
                    'po/templates.pot': ['../templates/*.html']

                }
            },
        },

        nggettext_compile: {
            all: {
                files: {
                    'js/translations.js': ['po/*.po']
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile']);
};