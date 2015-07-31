var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var uglify = require('gulp-uglify');
var minifycss = require("gulp-minify-css");

gulp.task('js-minify', function () {
  gulp.src(['./src/ionic-ratings.js'])
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});
gulp.task('rimraf', function () {
  gulp.src('./dist')
    .pipe(rimraf());
});

gulp.task('build', ['rimraf', 'js-minify']);