import gulp from 'gulp';
import less from'gulp-less'
import sourceMaps from'gulp-sourcemaps';
import uglify from'gulp-uglify';
import watch from'gulp-watch';
import htmlmin from'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import babel from 'gulp-babel';

function compilaLess() {
  return gulp.src('./src/styles/main.less')
    .pipe(sourceMaps.init())
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./dist/styles'))
};

function comprimeHtml() {
  return gulp.src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true}))
  .pipe(gulp.dest('dist/'))
}

function comprimeJavaScript(){
  return gulp.src('src/scripts/*.js')
    .pipe(babel()) 
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/scripts'))
}

function gulpWatch() {
  return watch('./src/styles/*.less', {ignoreInitial: false}, gulp.series(compilaLess)), 
  watch('./src/*.html', {ignoreInitial: false}, gulp.series(comprimeHtml)),
  watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
}

function comprimeImagens(callback) {
  gulp.src('./src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/images'))
  callback();
}

export default gulp.series(comprimeHtml, compilaLess, comprimeJavaScript, comprimeImagens, gulpWatch)

export const watchFiles = () => {
  gulpWatch(); 
};



