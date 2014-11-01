'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        nggettext_extract: {
            pot: {
                files: {
                    'po/templates.pot': [
                      'partials/*.html',
                      'partials/directives/*.html',
                      '../templates/*.html',
                    'js/*.js',
                    'js/controllers/*.js',
                    'js/directives/*.js']
                    //,
                    //'po/directives.pot': ['partials/directives/*.html','partials/directives/complete/*.html'],
                    //'po/template.pot': ['../templates/*.html']

                }
            }
        },

        nggettext_compile: {
            all: {
                files: {
                    'js/translations.js': ['po/*.po']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile']);
};