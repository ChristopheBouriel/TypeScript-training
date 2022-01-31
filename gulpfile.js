/** Exemple simple pour utilisation sur Node */

/* Avec tsconfig */
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
gulp.task("default", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});


/* Sans tsconfig */
/*
var gulp = require("gulp");
var ts = require("gulp-typescript");
gulp.task("default", function () {
  return gulp.src("src/*.ts").pipe(ts()).js.pipe(gulp.dest("dist"));
});*/

/**********************************************/

/** Exemple avec création d'un bundle pour utilisation sur navigateur */

/*var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var paths = {
  pages: ["src/*.html"],
};

gulp.task("copy-html", function () {
  return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

gulp.task(
  "default",
  gulp.series(gulp.parallel("copy-html"), function () {
    return browserify({
      basedir: ".",
      debug: true,
      entries: ["src/main.ts"],
      cache: {},
      packageCache: {},
    })
      .plugin(tsify)
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(gulp.dest("dist"));
  })
);*/
