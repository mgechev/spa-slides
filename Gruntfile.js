module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: '.'
        }
      }
    },
    bower: {
      install: {
        options: {
          targetDir: './lib',
          layout: 'byType',
          install: true,
          verbose: true,
          cleanBowerDir: true
        }
      }
    }
  });
};

