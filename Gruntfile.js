
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['**/*'],
      tasks: ['sass', 'connect:server'],
      options: {
        livereload: true,
      },    
    },
    connect: {
      server: {
        options: {
          base: 'www/',
          keepalive: true
        }
      }
    },
    sass: { 
      dist: {
        files: [{ 
          expand: true,
          cwd: 'www/assets/styles/*',
          src: ['*.scss'],
          dest: 'www/client/styles/*',
          ext: '.css',
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['sass', 'connect']);

};
