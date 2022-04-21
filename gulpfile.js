const { src, dest, series, parallel } = require('gulp');
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

const processStyles = () => {
  return src('src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/styles'));
}
 
exports.default = series(processIndex, processPages, processBlogPages, processStyles);