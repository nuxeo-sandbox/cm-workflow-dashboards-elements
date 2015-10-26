'use strict';
var LIVERELOAD_PORT = 35729;
var mountFolder = function (dir) {
  return require('serve-static')(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: '.'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      options: {
        nospawn: true,
        livereload: {
          liveCSS: false
        }
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '*.html',
          '*.css',
          ]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp',
          src: '**/*.css',
          dest: '.tmp'
        }]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      proxies: [
        {
          context: '/nuxeo/site',
          host: 'localhost',
          port: '8080'
        }
        ],
      livereload: {
        options: {
          middleware: function () {
            return [
              require('grunt-connect-proxy/lib/utils').proxyRequest,
              require('connect-livereload')({
                port: LIVERELOAD_PORT
              }),
              mountFolder(yeomanConfig.app)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>/demo'
      }
    }

  });

  grunt.registerTask('serve', [
      'configureProxies',
      'autoprefixer:server',
      'connect:livereload',
      'open',
      'watch'
    ]);



  grunt.registerTask('default', [
    'serve']);
};