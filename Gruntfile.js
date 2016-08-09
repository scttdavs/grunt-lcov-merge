/*
 * grunt-contrib-jshint
 * http://gruntjs.com/
 *
 * Copyright (c) 2015 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
        files: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js'],
        options: {
            jshintrc: true
        }
    },

    mocha_istanbul: {
      coverage: {
          src: 'test/**/*.spec.js',
          options: {
              coverageFolder: 'build/coverage',
              reportFormats: ['lcov'],
          }
      }
    },

    lcovMerge: {
      options: {
          emitters: ['file', 'event'],
          outputFile: 'out.lcov'
      },
      files: ['build/coverage/*.info', 'build/coverage/**/*.info']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-istanbul');

  grunt.registerTask('ci', ['jshint', 'mocha_istanbul', 'lcovMerge']);
  grunt.registerTask('default', ['jshint', 'mocha_istanbul']);

};
