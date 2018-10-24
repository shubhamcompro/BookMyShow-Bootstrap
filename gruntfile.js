// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function (grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    concat: {
      js: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'dist/css/style.css'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dist/js/main.js': ['src/js/main.js'],
        }
      },
    },
    cssmin: {
      target: {
        files: [{
          'dist/css/style.css': ['src/css/style.css']
        }]
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/home.html': 'src/home.html',     // 'destination': 'source'
        }
      }
    }
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');


  // Register Task
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);
  grunt.registerTask('default', ['uglify','cssmin','htmlmin']);
};
