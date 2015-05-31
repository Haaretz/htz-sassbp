
module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    sass: {
      compilation: {
        options: {
          precision: 10,
          sourcemap: 'none',
          style: 'expanded',
        },
        files: [{
          expand: true,
          cwd: 'tests',
          src: ['comp-test.scss', ],
          dest: 'tests/css',
          ext: '.css'
        }],
      },
    },


    // Empty folders for a clean start.
    clean: {
      options: {
        force: true
      },
      tests: 'tests/css/**/*',
    },

    concurrent: {
      tests: ['sass:compilation', ],
    },


  });



  // tasks


  grunt.registerTask('default', ['clean:tests', 'concurrent:tests']);
};
