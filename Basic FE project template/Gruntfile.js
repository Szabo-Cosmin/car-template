module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: [
          "ui-src/js/test.js",
          "ui-src/js/utilities.js",
          "ui-src/js/increase-number.js",
        ],
        dest: "ui/js/main.js",
        options: {
          separator: "\n\n",
          interrupts: true,
        },
      },
      vendor: {
        src: ["node_modules/jquery/dist/jquery.min.js"],
        dest: "ui/js/vendor.js",
        options: {
          separator: "\n\n",
          interrupts: true,
        },
      },
    },
    sass: {
      styles: {
        src: "ui-src/styles/style.scss",
        dest: "ui/css/main.css",
      },
    },
    watch: {
      js: {
        files: ["ui-src/js/*.js", "ui-src/js/**/*.js", "ui-src/js/**/**/*.js"],
        tasks: ["concat"],
      },
      sass: {
        files: [
          "ui-src/styles/*.scss",
          "ui-src/styles/**/*.scss",
          "ui-src/styles/**/**/*.scss",
        ],
        tasks: ["sass"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");

  grunt.registerTask("default", ["watch"]);
};
