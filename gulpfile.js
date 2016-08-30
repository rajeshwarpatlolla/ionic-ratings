var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('del', function () {
  del(['dist/**/*']);
});

gulp.task('js-minify', ['del'], function () {
  gulp.src(['./src/ionic-ratings.js'])
    .pipe(concat('ionic-ratings.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['js-minify']);