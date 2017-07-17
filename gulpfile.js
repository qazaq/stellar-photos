const gulp = require('gulp');
const sass = require('gulp-sass');
const babelify = require('babelify');
const browserify = require('browserify');
const vinylSource = require('vinyl-source-stream');
const es = require('event-stream');
const flatten = require('gulp-flatten');
const glob = require('glob');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');

gulp.task('copyStaticFiles', () => gulp.src([
  './src/**/*.*',
  '!./src/css/*.css',
  '!./src/js/**/*.js',
  '!./src/sass/**/*.sass',
])
  .pipe(gulp.dest('./dist')));

gulp.task('build', (done) => {
  glob('./src/js/*.js', (err, files) => {
    if (err) done(err);
    const tasks = files.map(entry => browserify({
      entries: [entry],
    })
      .transform(babelify)
      .bundle()
      .pipe(vinylSource(entry))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(flatten())
      .pipe(gulp.dest('./dist/js')));
    es.merge(tasks).on('end', done);
  });
});

gulp.task('sass', () => gulp.src('./src/sass/main.sass')
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(gulp.dest('./dist/css')));

gulp.task('default', () => {
  gulp.watch('./src/js/**/*.js', ['build']);
  gulp.watch(['./src/**/*.*', '!./src/js/**/*.js', '!./src/sass/**/*.sass'], ['copyStaticFiles']);
  gulp.watch(['./src/sass/**/*.sass'], ['sass']);
});
