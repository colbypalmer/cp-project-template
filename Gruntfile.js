// My Site Template
// ===

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: ['<%= pkg.name %>/<%= pkg.name %>/static/style/**/*.scss', '<%= pkg.name %>/<%= pkg.name %>/static/bower/**/*.scss'],
        tasks: ['sass:colbystyle']
      },
      script: {
        files: ['<%= pkg.name %>/<%= pkg.name %>/static/script/site.js'],
        tasks: ['buildjs']
      }
    },

    // SCSS Compile
    sass: {
      colbystyle: {
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
          '<%= pkg.name %>/<%= pkg.name %>/static/bower/jquery/dist/jquery.js',
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
      dist: {
        files: {
          '<%= pkg.name %>/<%= pkg.name %>/static/script/site.min.js': ['<%= pkg.name %>/<%= pkg.name %>/static/script/site.js'],
          '<%= pkg.name %>/<%= pkg.name %>/static/script/libs/modernizr.min.js': ['<%= pkg.name %>/<%= pkg.name %>/static/bower/modernizr/modernizr.js'],
          '<%= pkg.name %>/<%= pkg.name %>/static/script/libs/html5shiv.min.js': ['<%= pkg.name %>/<%= pkg.name %>/static/bower/html5shiv/dist/html5shiv.js']
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
        src: '<%= pkg.name %>/<%= pkg.name %>/static/bower/jquery/dist/jquery.min.map',
        dest: '<%= pkg.name %>/<%= pkg.name %>/static/script/jquery.min.map'

      }
    }

  });

  // Tasks
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('buildcss', ['sass']);
  grunt.registerTask('buildjs', ['jshint', 'uglify', 'concat']);
  grunt.registerTask('guide', ['sass', 'styleguide']);

};
