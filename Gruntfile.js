// My Site Template
// ===

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: ['<%= pkg.name %>/<%= pkg.name %>/static/style/**/*.scss', 'bower/**/*.scss'],
        tasks: ['sass:compilestyle']
      },
      script: {
        files: ['<%= pkg.name %>/<%= pkg.name %>/static/script/site.js'],
        tasks: ['buildjs']
      }
    },

    // SCSS Compile
    sass: {
      compilestyle: {
        files: {
          '<%= pkg.name %>/<%= pkg.name %>/static/style/site.css': '<%= pkg.name %>/<%= pkg.name %>/static/style/site.scss'
        },
        options: {
          style: 'compressed',
          quiet: true
        }
      }

    },

    // Hint JS
    jshint: {
      all: ['<%= pkg.name %>/<%= pkg.name %>/static/script/site.js']
    },

    // Concat JS
    concat: {
      dist: {
        options: {
          stripBanners: false,
          banner: '/*! DEVELOPMENT VERSION */ \n'
        },
        src: [
          'bower/jquery/dist/jquery.js',
          'bower/parsleyjs/dist/parsley.min.js',
          'bower/chosen/chosen.jquery.min.js',
          'bower/magnific-popup/dist/jquery.magnific-popup.min.js',
          '<%= pkg.name %>/<%= pkg.name %>/static/script/site.min.js'
        ],
        dest: '<%= pkg.name %>/<%= pkg.name %>/static/script/site-compiled.js'
      }
    },

    // Uglify JS
    uglify: {
      options: {
        banner: '/*! Compiled Site Javascript v<%= pkg.version %> on ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */ \n'
      },
      dev: {
        files: {
          '<%= pkg.name %>/<%= pkg.name %>/static/script/site.min.js': ['<%= pkg.name %>/<%= pkg.name %>/static/script/site.js'],
          '<%= pkg.name %>/<%= pkg.name %>/static/script/libs/html5shiv.min.js': ['bower/html5shiv/dist/html5shiv.js']
        }
      },
      all: {
        files: {
          '<%= pkg.name %>/<%= pkg.name %>/static/script/site.min.js': ['<%= pkg.name %>/<%= pkg.name %>/static/script/site.js'],
        }
      }
    },

    // Live Reloading/Sync
    browserSync: {

      dev: {
        files: {
          src: [
            '<%= pkg.name %>/<%= pkg.name %>/static/style/*.css',
            '<%= pkg.name %>/<%= pkg.name %>/templates/**/*.html'
          ]
        },
        options: {
          debugInfo: true,
          watchTask: true,
          proxy: "127.0.0.1:8000"
        }
      }

    },

    // Copy files
    copy: {
      main: {
        files: [
          {
            src: 'bower/jquery/dist/jquery.min.map',
            dest: '<%= pkg.name %>/<%= pkg.name %>/static/script/jquery.min.map'
          },
          {
            expand: true,
            src: 'bower/bourbon/**',
            dest: '<%= pkg.name %>/<%= pkg.name %>/static/style/'
          },
          {
            expand: true,
            src: 'bower/normalize-css/**',
            dest: '<%= pkg.name %>/<%= pkg.name %>/static/style/'
          },
          {
            src: 'bower/magnific-popup/dist/magnific-popup.css',
            dest: '<%= pkg.name %>/<%= pkg.name %>/static/style/'
          }
        ]
      }
    }

  });

  // Tasks
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('buildcss', ['sass']);
  grunt.registerTask('buildjs', ['jshint', 'uglify:dev', 'concat']);
  grunt.registerTask('buildall', ['copy', 'sass', 'jshint', 'uglify:all', 'concat']);
  grunt.registerTask('guide', ['sass', 'styleguide']);

};
