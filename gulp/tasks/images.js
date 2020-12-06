const { src, dest } = require('gulp');

// Image Compression
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

//File paths
const DIST_PATH = 'dist';
const IMAGES_PATH = 'src/images/**/*.{png,jpeg,jpg,svg,gif,xml,ico,jason}';

// Images
function imagesFn() {
  return src(IMAGES_PATH)
    .pipe(imagemin(
      [
        imagemin.gifsicle(),
        imagemin.mozjpeg(),
        imagemin.optipng(),
        imagemin.svgo(),
        imageminPngquant(),
        imageminJpegRecompress()
      ]
    ))
    .pipe(dest(DIST_PATH + '/images'));
}

exports.build = imagesFn;
