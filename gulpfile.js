const { src, dest, series, parallel, watch } = require('gulp');
const gulpWebpack = require('webpack-stream');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const processIndex = () => {
  return src('src/index.html').pipe(dest('dist'));
}

const processPages = () => {
  return src('src/pages/*.html').pipe(dest('dist/pages'));
}

const processBlogPages = () => {
  return src('src/pages/blog-pages/*.html').pipe(dest('dist/pages/blog-pages'));
}

const processImages = () => {
  return src(['src/images/*.jpg', 'src/images/*.png']).pipe(dest('dist/images'));
}

const processStyles = () => {
  return src('src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/styles'));
}

const watchTask = () => {
  return watch(
    ['src/**/**/**'],
    parallel(
      series(processIndex, processPages, processBlogPages), 
      processImages, 
      processStyles
    )
  )
}
 
exports.default = parallel(
  series(processIndex, processPages, processBlogPages), 
  processImages, 
  processStyles
);

exports.watch = watchTask;