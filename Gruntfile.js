'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-vulcanize');

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporterOutput: '',
                reporter: require('jshint-stylish')
            },
            all: [
                'src/scripts/**/*.js',
            ],
        },

        vulcanize: {
            default: {
                options: {
                    inlineScripts: true,
                    inlineCss: true,
                    stripComments: true,
                    stripExcludes: true,
                },
                files: {
                    'docs/index.html': 'src/index.html'
                },
            },
        },
    });

    grunt.registerTask('default', [
        'jshint',
        'vulcanize'
    ]);

    grunt.registerTask('travis', [
        'jshint',
        'vulcanize'
    ]);
};
