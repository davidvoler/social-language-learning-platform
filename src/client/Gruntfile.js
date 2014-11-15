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
    },

    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      web: {
        options: {
          beautify: {
            width: 80,
            beautify: true
          }
        },
        files: {
          'dist/web.js': [
            'src/auth/auth_module.js',
            'src/exercise_directives/exercise_directives.js',
            'src/language/language_module.js',
            'src/lesson/lesson_module.js',
            'src/menu/menu_module.js',
            'src/practice/practice_module.js',
            'src/practice/profile_module.js',
            'src/web/sllp_web.js',

            //after loading the modules in correct order we can load all files in any order
            'src/**/*.js'

          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-angular-gettext');

  grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile', 'uglify']);
};