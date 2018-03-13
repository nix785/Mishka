"use strict";

module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);


  grunt.initConfig({
    less: {
      style: {
        files: {
          "build/css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")()
          ]
        },
        src: "build/css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css"
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "js/**",
            "img/**.*",
            "*.html"
],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
          progressive: true
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,svg}"],
          }]
      }
    },

    cwebp: {
      images: {
        options: {
          q: 90
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg}"]
        }]
      }
    },

    cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'build/css/style.min.css': ['build/css/style.css']
    }
  }},

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "cssmin"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);

  grunt.registerTask("build", [
   "clean",
    "copy",
    "less",
    "postcss",
    "cssmin",
    "imagemin",
    "cwebp",
    ]);
};
