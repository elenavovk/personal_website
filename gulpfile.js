const gulp = require("gulp");
const svgSprite = require("gulp-svg-sprite");

// SVG Config
const config = {
  mode: {
    symbol: {
      // symbol mode to build the SVG
      dest: "src/assets/icon/", // destination folder
      sprite: "icons.svg", //sprite name
      // example: true // Build sample page
    },
  },
  svg: {
    xmlDeclaration: true, // strip out the XML attribute
    doctypeDeclaration: false, // don't include the !DOCTYPE declaration
  },
};

gulp.task(
  "sprite-page",
  gulp.series(function () {
    return gulp
      .src("src/assets/icons/**/*.svg")
      .pipe(svgSprite(config))
      .pipe(gulp.dest("."));
  })
);

gulp.task(
  "sprite-shortcut",
  gulp.series(function () {
    return gulp.src("src/assets/icon/icons.svg").pipe(gulp.dest("."));
  })
);

gulp.task("icons", gulp.series("sprite-page", "sprite-shortcut"));
