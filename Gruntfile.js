// Colby Palmer's Site
// ===

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: ['project/static/style/**/*.scss', 'project/static/bower/**/*.scss'],
        tasks: ['sass:colbystyle']
      },
      script: {
        files: ['project/static/script/site.js'],
        tasks: ['buildjs']
      }
    },

    // SCSS Compile
    sass: {
      colbystyle: {
        files: {
          'project/static/style/project.css': 'project/static/style/project.scss'
        },
        options: {
          banner: '/* This is Colby style, Mofo! */',
          style: 'compressed',
          quiet: true
        }
      }

    },

    // Hint JS
    jshint: {
      all: ['project/static/script/site.js']
    },

    // Concat JS
    concat: {
      dist: {
        options: {
          stripBanners: false,
          banner: '/*! DEVELOPMENT VERSION */ \n'
        },
        src: [
          'project/static/bower/jquery/dist/jquery.js',
          'project/static/script/site.js'
        ],
        dest: 'project/static/script/<%= pkg.name %>.js'
      }
    },

    // Uglify JS
    uglify: {
      options: {
        banner: '/*! Colby Palmer\'s Javascript v<%= pkg.version %> on ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */ \n'
      },
      dist: {
        files: {
          'project/static/script/<%= pkg.name %>.js': ['<%= concat.dist.dest %>'],
          'project/static/script/packery.min.js': ['project/static/bower/packery/js/packery.js']
        }
      }
    },

    // Live Reloading/Sync
    browserSync: {

      dev: {
        files: {
          src: [
            'project/static/style/*.css',
            'project/templates/**/*.html'
          ]
        },
        options: {
          debugInfo: true,
          watchTask: true,
          proxy: {
            host: 'localhost',
            port: 8000
          }
        }
      }

    }

  });

  // Tasks
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('buildcss', ['sass']);
  grunt.registerTask('buildjs', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('guide', ['sass', 'styleguide']);

};