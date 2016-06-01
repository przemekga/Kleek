var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
 

gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch', 'webserver']);