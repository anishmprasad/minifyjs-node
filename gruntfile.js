module.exports = function(grunt) {
  grunt.initConfig({
    // define source files and their destinations
    uglify: {
      files: {
        src: "source/*.js", // source files mask
        dest: "destination/", // destination folder
        expand: true, // allow dynamic building
        flatten: true, // remove all unnecessary nesting
        ext: ".min.js" // replace .js to .min.js
      }
    },
    watch: {
      js: { files: "source/*.js", tasks: ["uglify"] }
    }
  });

  // load plugins
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // register at least this one task
  grunt.registerTask("default", ["uglify"]);
};
