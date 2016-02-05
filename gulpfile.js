var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var buffer = require('gulp-buffer');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var rimraf = require('rimraf');

gulp.task('scripts', ['images'], function (cb) {
  return browserify({entries: ['./js/index.js'], extensions: ['.js', '.jsx'], debug: true})
    .transform('babelify', {presets: ['es2015', 'stage-0', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(rev())
    .pipe(gulp.dest('public'))
    .pipe(rev.manifest('./public/rev-manifest.json', { merge: true }))
    .pipe(gulp.dest(''))
});

gulp.task('build', ['clean', 'styles', 'scripts'], function() {
  var manifest = gulp.src("./public/rev-manifest.json");
  return gulp.src('./index.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload());
});

gulp.task('clean', function(cb) {
  rimraf('./public', cb);
})

gulp.task('styles', function() {
  return gulp.src('stylesheets/application.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rev())
    .pipe(gulp.dest('./public/assets/'))
    .pipe(rev.manifest('./public/rev-manifest.json', { merge: true }))
    .pipe(gulp.dest(''))
});

gulp.task('watch', ['scripts'], function () {
    gulp.watch(['js/**/*.jsx', 'js/**/*.js'], ['build']);
    gulp.watch(['stylesheets/**/*.scss'], ['build']);
});

gulp.task('images', function() {
  return gulp.src('./images/**/*')
    .pipe(gulp.dest('./public/assets/'));
});

gulp.task('webserver', function() {
  connect.server({
    root: 'public',
    livereload: true,
  });
});

gulp.task('default', ['watch', 'webserver', 'build']);
