module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    srcDir: "src",
    buildDir: "build",
    
    watch: {
      test: {
        files: ['src/**/*.jsx', 'test/**/*.jsx'],
        tasks: ['jsx:test'],
      },
      shooting: {
        files: ['src/**/*.jsx', 'examples/shooting/src/*.jsx'],
        tasks: ['jsx:shooting'],
      }
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
      },
      shooting: {
        src: 'examples/shooting/src/main.jsx',
        dest: 'examples/shooting/main.js',
        executable: "web",
      },
      touchnumber: {
        src: 'examples/touchnumber/src/main.jsx',
        dest: 'examples/touchnumber/main.js',
        executable: "web",
      },
    },
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }
  
  grunt.registerTask('default', ['jsx']);
}