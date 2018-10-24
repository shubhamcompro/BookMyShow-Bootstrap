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
        src: ['src/assets/js/*.js'],
        dest: 'assets/js/script.js'
      },
      css: {
        src: ['src/assets/css/*.css'],
        dest: 'assets/css/style.css'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/js/main.js': ['src/assets/js/main.js'],
        }
      },
    },
    cssmin: {
      target: {
        files: [{
          'assets/css/style.css': ['src/assets/css/style.css']
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
          'home.html': 'src/home.html',     // 'destination': 'source'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd:'src/assets/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/img/'
        }]
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
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  // Register Task
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);
  grunt.registerTask('default', ['uglify','cssmin','htmlmin','imagemin']);
};
