'use strict';

const gruntConfig = {
    express: {
        options: {
            debug: true,
            port: '8080'
        },
        app: {
            options: {
                script: 'server.js',
                node_env: 'development'
            }
        },
    },

    jshint: {
        options: {
            jshintrc: '.jshintrc',
            reporterOutput: '',
            reporter: require('jshint-stylish'),
            ignores: [
                'src/scripts/**/*.min.js',
            ]
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

    watch: {
        backend: {
            files: [
                'server.js',
            ],
            tasks: [
                'jshint',
            ],
        },

        modules: {
            files: [
                'node_modules'
            ],
            tasks: [
                'vulcanize',
            ],
        },

        scripts: {
            files: [
                'src/**/*.js',
                'specs/**/*.js',
            ],
            tasks: [
                'jshint',
                'vulcanize',
            ]
        },

        css: {
            files: [
                'src/**/*.css',
            ],
            tasks: [
                'vulcanize',
            ]
        },

        html: {
            files: [
                'src/**/*.html',
            ],
            tasks: [
                'vulcanize',
            ]
        },

        options: {
            livereload: true
        }
    },
};

const tasks = grunt => {
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-vulcanize');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig(gruntConfig);

    grunt.registerTask('default', [
        'express',
        'jshint',
        'vulcanize',
        'watch',
    ]);

    grunt.registerTask('travis', [
        'jshint',
        'vulcanize',
    ]);
}

module.exports = tasks;
