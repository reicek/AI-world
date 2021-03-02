'use strict';
/** Webpack configuration */
const webpackConfig = require('./webpack.config.js');

/** Grunt configuration */
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

  webpack: {
    options: {
      stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
    },
    prod: webpackConfig,
    dev: Object.assign(webpackConfig),
  },

  jsdoc2md : {
    oneOutputFile: {
      src: 'src/**/*.js',
      dest: 'src/README.md'
    },
    separateOutputFilePerInput : {
      files: [
        { src: 'src/js/app.js', dest: 'src/js/README.md' },
        { src: 'src/js/census/census.js', dest: 'src/js/census/README.md' },
        { src: 'src/js/creature/creature.js', dest: 'src/js/creature/README.md' },
        { src: 'src/js/creature/body/body.js', dest: 'src/js/creature/body/README.md' },
        { src: 'src/js/creature/brain/brain.js', dest: 'src/js/creature/brain/README.md' },
        { src: 'src/js/creature/draw/draw.js', dest: 'src/js/creature/draw/README.md' },
        { src: 'src/js/eval/eval.js', dest: 'src/js/eval/README.md' },
        { src: 'src/js/vector/vector.js', dest: 'src/js/vector/README.md' },
        { src: 'src/js/world/world.js', dest: 'src/js/world/README.md' }
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
      tasks: ['webpack'],
    },

    scripts: {
      files: ['src/**/*.js', 'specs/**/*.js'],
      tasks: ['jshint', 'webpack'],
    },

    css: {
      files: ['src/**/*.css'],
      tasks: ['webpack'],
    },

    html: {
      files: ['src/**/*.html'],
      tasks: ['webpack'],
    },

    options: {
      livereload: true,
    },
  },
};

const tasks = (grunt) => {
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  grunt.initConfig(gruntConfig);

  grunt.registerTask('default', ['express', 'jshint', 'webpack', 'watch', 'jsdoc2md']);
  grunt.registerTask('travis', ['jshint', 'webpack', 'jsdoc2md']);
  grunt.registerTask('doc', ['jsdoc2md']);
};

module.exports = tasks;
