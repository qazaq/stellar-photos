const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  gulp.src('sass/main.sass')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['sass', 'browserSync'], () => {
  gulp.watch(['sass/**/*.sass'], ['sass']);
  gulp.watch('index.html', browserSync.reload);
});
