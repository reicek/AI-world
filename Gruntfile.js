'use strict';

const gruntConfig = {
  express: {
    options: {
      debug: true,
      port: '8080',
    },
    app: {
      options: {
        script: 'server.js',
        node_env: 'development',
      },
    },
  },

  jshint: {
    options: {
      jshintrc: '.jshintrc',
      reporterOutput: '',
      reporter: require('jshint-stylish'),
      ignores: ['src/js/**/*.min.js'],
    },
    all: ['src/js/**/*.js'],
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
        'docs/index.html': 'src/index.html',
      },
    },
  },

  jsdoc2md : {
    oneOutputFile: {
      src: 'src/**/*.js',
      dest: 'src/README.md'
    },
    separateOutputFilePerInput : {
      files: [
        { src: 'src/js/world.js', dest: 'src/js/README.md' },
        { src: 'src/js/census/census.js', dest: 'src/js/census/README.md' },
        { src: 'src/js/creature/creature.js', dest: 'src/js/creature/README.md' },
        { src: 'src/js/eval/eval.js', dest: 'src/js/eval/README.md' },
        { src: 'src/js/vector/vector.js', dest: 'src/js/vector/README.md' }
      ]
    }
  },

  watch: {
    backend: {
      files: ['server.js'],
      tasks: ['jshint'],
    },

    modules: {
      files: ['node_modules'],
      tasks: ['vulcanize'],
    },

    scripts: {
      files: ['src/**/*.js', 'specs/**/*.js'],
      tasks: ['jshint', 'vulcanize'],
    },

    css: {
      files: ['src/**/*.css'],
      tasks: ['vulcanize'],
    },

    html: {
      files: ['src/**/*.html'],
      tasks: ['vulcanize'],
    },

    options: {
      livereload: true,
    },
  },
};

const tasks = (grunt) => {
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  grunt.initConfig(gruntConfig);

  grunt.registerTask('default', ['express', 'jshint', 'vulcanize', 'watch', 'jsdoc2md']);
  grunt.registerTask('travis', ['jshint', 'vulcanize', 'jsdoc2md']);
  grunt.registerTask('doc', ['jsdoc2md']);
};

module.exports = tasks;
