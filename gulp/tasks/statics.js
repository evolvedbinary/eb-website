const { src, dest, parallel } = require('gulp');
const replace = require('gulp-replace');

//File paths
const SRC_PATH = 'src';
const DIST_PATH = 'dist';

// copy HTML resources
function htmlFn() {
  return src(SRC_PATH + "/**.html")
    .pipe(replace('dist/', ''))
    .pipe(dest(DIST_PATH));
}

// copy the Technical Reports
function techReportsFn() {
  return src(SRC_PATH + "/technical-reports*/**/*")
    .pipe(dest(DIST_PATH));
}

// copy the Publications
function techReportsFn() {
  return src(SRC_PATH + "/publications*/**/*")
    .pipe(dest(DIST_PATH));
}

// other static resorces
function othersFn() {
  return src(SRC_PATH + "/LICENSE.txt")
    .pipe(dest(DIST_PATH));
}

staticsFn = parallel(
    htmlFn,
    techReportsFn,
    othersFn
);

exports.build = staticsFn;
