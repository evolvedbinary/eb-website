const { watch } = require('gulp');
const browserSync = require('browser-sync').create();
const livereload = require('gulp-livereload');

const stylesTask = require('./styles')
const scriptsTask = require('./scripts')
const staticsTask = require('./statics');

const SRC_PATH = 'src';
const DIST_PATH = 'dist';
const SCRIPTS_PATH = SRC_PATH + '/scripts/**/*.js';
const STYLES_PATH = SRC_PATH + '/scss/**/*.scss';


function watchFn() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: DIST_PATH
    }
  });

  function watchIndexFn() {
    staticsTask.build();
    browserSync.reload();
  }

  watch(SRC_PATH + '/index.html', watchIndexFn);

  livereload.listen();

  watch(SCRIPTS_PATH, scriptsTask.build);
  
  // gulp.watch(CSS_PATH, ['styles']);
  watch(STYLES_PATH, stylesTask.build);

}

// Watch
exports.build = watchFn;
