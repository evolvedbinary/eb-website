const del = require('del');

const DIST_PATH = 'dist';

function cleanFn() {
  return del([
    DIST_PATH + "/**"
  ]);
}

exports.build = cleanFn;