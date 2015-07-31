var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var uglify = require('gulp-uglify');
var minifycss = require("gulp-minify-css");

gulp.task('build', function () {
  gulp.src(['./src/ionic-ratings.js'])
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});
gulp.task('rimraf', function () {
  return gulp.src('dist', {read: false})
    .pipe(rimraf());
});

gulp.task('default',['rimraf','build']);