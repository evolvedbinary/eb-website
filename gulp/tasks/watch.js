const { watch } = require('gulp');
const browserSync = require('browser-sync').create();
const livereload = require('gulp-livereload');

const stylesTask = require('./styles')
const scriptsTask = require('./scripts')

const SRC_PATH = 'src';
const SCRIPTS_PATH = SRC_PATH + '/scripts/**/*.js';


function watchFn() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: SRC_PATH
    }
  });

  function watchIndexFn() {
    browserSync.reload();
  }

  watch(SRC_PATH + '/index.html', watchIndexFn);
  
  require('../../server.js');
  livereload.listen();

  watch(SCRIPTS_PATH, scriptsTask.build);
  
  // gulp.watch(CSS_PATH, ['styles']);
  watch(SRC_PATH + '/scss/**/*.scss', stylesTask.build);

}

// Watch
exports.build = watchFn;
