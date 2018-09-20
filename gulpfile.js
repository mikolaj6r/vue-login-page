var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename');

gulp.task("sass", () => gulp.src("src/*.scss")
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest("./assets/css"))
  .pipe(rename({suffix: '.min'}))
  .pipe(cssnano())
  .pipe(gulp.dest("./assets/css")));
 
gulp.task("default", () => {
  gulp.watch("./src/*.scss", ["sass"]);
});