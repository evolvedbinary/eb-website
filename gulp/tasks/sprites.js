const { task, src, dest, series } = require('gulp');
const rename = require('gulp-rename');
const svgSprite = require('gulp-svg-sprite');
const del = require('del');

// sprites
const config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './src/templates/sprite.css'
        }
      }
    }
  }
}

function beginCleanFn() {
  return del(['./src/sprite', './dist/images/sprites']);
}

//File paths
function createSpriteFn() {
  return src('./src/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(dest('./src/sprite/'));
}

function copySpriteGraphicFn() {
  return src('./src/sprite/css/**/*.svg')
    .pipe(dest('./dist/images/sprites'));
}

function copySpriteCssFn() {
  return src('./src/sprite/css/*.css')
    .pipe(rename('_sprite.scss'))
    .pipe(dest('./src/scss/abstracts'));
}

function endCleanCss() {
  return del('./src/sprite');
}

task('beginClean', beginCleanFn);
task('createSprite', series('beginClean', createSpriteFn));
task('copySpriteGraphic', series('createSprite', copySpriteGraphicFn));
task('copySpriteCSS', series('createSprite', copySpriteCssFn));
task('endClean', series('copySpriteGraphic', 'copySpriteCSS', endCleanCss));

task('icons', series('beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean'));
