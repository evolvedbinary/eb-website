const { task, parallel, series } = require('gulp');

const imagesTask = require('./gulp/tasks/images');
const scriptsTask = require('./gulp/tasks/scripts');
const stylesTask = require('./gulp/tasks/styles');
const staticsTask = require('./gulp/tasks/statics');
const spritesTask = require('./gulp/tasks/sprites');
const watchTask = require('./gulp/tasks/watch');
const cleanTask = require('./gulp/tasks/clean');

task('images', imagesTask.build);
task('scripts', scriptsTask.build);
task('styles', stylesTask.build);
task('statics', staticsTask.build);
task('clean', cleanTask.build);

// Simply just all the web assets
const assetsFn = parallel(
  stylesTask.build,
  scriptsTask.build,
  imagesTask.build,
  staticsTask.build
);
task('assets', assetsFn);

task('watch', series(assetsFn, watchTask.build));

task('default', assetsFn);