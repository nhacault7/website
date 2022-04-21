const { src, dest, series, parallel } = require('gulp');
const gulpWebpack = require('webpack-stream');
const cleanCSS = require('clean-css');
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
 
exports.default = series(processIndex, processPages, processBlogPages);