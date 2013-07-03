module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    srcDir: "src",
    buildDir: "build",
    
    watch: {
      jsx: {
        files: ['**/*.jsx'],
        tasks: ['jsx:build']
      },
    },
    jsx: {
      /*
      build: {
        src: 'test/geom/main.jsx',
        dest: 'test/geom/main.js',
        add_search_path: "src",
        executable: "web",
      },
      */
      test: {
        src: 'test/geom/vector2.jsx',
        args: '--test'
      }
    },
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }
  
  grunt.registerTask('default', ['jsx']);
}