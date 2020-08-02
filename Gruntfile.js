'use strict';
const webpackConfig = require('./webpack.config.js');

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
    },
    all: ['src/js/**/*.js'],
  },

  jsdoc2md: {
    oneOutputFile: {
      src: 'src/**/*.js',
      dest: 'src/README.md'
    },
    separateOutputFilePerInput: {
      files: [
        { src: 'src/js/simulation.js', dest: 'src/js/README.md' },
        { src: 'src/js/census/census.js', dest: 'src/js/census/README.md' },
        { src: 'src/js/creature/creature.js', dest: 'src/js/creature/README.md' },
        { src: 'src/js/creature/body/body.js', dest: 'src/js/creature/body/README.md' },
        { src: 'src/js/creature/brain/brain.js', dest: 'src/js/creature/brain/README.md' },
        { src: 'src/js/creature/draw/draw.js', dest: 'src/js/creature/draw/README.md' },
        { src: 'src/js/eval/eval.js', dest: 'src/js/eval/README.md' },
        { src: 'src/js/vector/vector.js', dest: 'src/js/vector/README.md' },
        { src: 'src/js/world/world.js', dest: 'src/js/world/README.md' },
      ],
    },
  },

  webpack: {
    options: {
      stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
    },
    prod: webpackConfig,
    dev: Object.assign(webpackConfig),
  },

  watch: {
    server: {
      files: ['server.js'],
      tasks: ['jshint'],
    },

    dependencies: {
      files: ['node_modules'],
      tasks: ['webpack'],
    },

    scripts: {
      files: ['src/**/*.js', 'specs/**/*.js'],
      tasks: ['jshint', 'webpack', 'jsdoc2md'],
    },

    options: {
      livereload: true,
    },
  },
};

const tasks = (grunt) => {
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  grunt.initConfig(gruntConfig);

  grunt.registerTask('default', [
    'express',
    'jshint',
    'webpack',
    'watch',
    'jsdoc2md',
  ]);
  grunt.registerTask('travis', ['jshint', 'webpack', 'jsdoc2md']);
  grunt.registerTask('doc', ['jsdoc2md']);
};

module.exports = tasks;
