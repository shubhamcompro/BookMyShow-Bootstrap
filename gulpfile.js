var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cleanCss = require('gulp-clean-css'),
  minifyHtml = require('gulp-minify-html'),
  imagemin = require('gulp-imagemin');

// Uglify
gulp.task('uglify-css', function () {
  gulp.src('src/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

// Minify Css
gulp.task('clean-css', function () {
  gulp.src('src/assets/css/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('assets/css'));
});

// Minify Css
gulp.task('minify-html', function () {
  gulp.src('src/home.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest(''));
});

// Optimize images
gulp.task('image-min', function () {
  gulp.src('src/assets/img/**/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img'));
});

gulp.task('default', ['uglify-css', 'clean-css', 'minify-html','image-min']);
