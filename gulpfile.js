const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const scssFiles = './sass/**/*.?(s)css';

gulp.task('css', () => {
  gulp.src(scssFiles)
  	.pipe(sass())
    .pipe(concat('ana.css'))
    .pipe(gulp.dest('css'))
});

gulp.task('serve', () => {
  browserSync.init({
    files: ['./**'],
    port: 4000,
    server: {
      baseDir: "./"
    }
  });

  gulp.watch(scssFiles, ['css']);

  // watch();
});

gulp.task('default', ['css', 'serve']);