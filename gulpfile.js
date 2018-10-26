var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename");

gulp.task('js', function() {
  return gulp.src('builds/sassEssentials/js/myscript.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('minify-css', ['sass'], () => {
  return gulp.src('builds/sassEssentials/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
        suffix: "-min"
    }))
    .pipe(gulp.dest('builds/sassEssentials/css-min'));
});

gulp.task('sass', function () {
    return sass('process/sass/style.scss', {
      sourcemap: true,
      style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('builds/sassEssentials/css'));
});

gulp.task('watch', function() {
  gulp.watch('builds/sassEssentials/js/**/*', ['js']);
  gulp.watch(['process/sass/**/*'], ['sass', 'minify-css']);
});

gulp.task('webserver', function() {
    gulp.src('builds/sassEssentials/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch', 'sass','minify-css', 'webserver']);
