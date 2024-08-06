// const gulp = require('gulp');
// const concat = require('gulp-concat-css');
// const plumber = require('gulp-plumber');
// const del = require('del');
// const browserSync = require('browser-sync').create();
// const postcss = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
// const mediaquery = require('postcss-combine-media-query');
// const cssnano = require('cssnano');
// const htmlMinify = require('html-minifier');

// function html() {
// 	return gulp.src('**/*.html')
// 		.pipe(plumber())
// 		.pipe(gulp.dest('dist/'))
// 	   .pipe(browserSync.reload({stream: true}))
	   
// }

// exports.html = html


// function css() {
// 	const plugins = [
// 		autoprefixer(),
// 		mediaquery(),
// 		// cssnano(),
// 	];

// 	return gulp.src('styles/*.css')
// 		// return gulp.src('src/blocks/**/*.css')
// 		.pipe(plumber())
// 		.pipe(concat('bundle.css'))
// 		.pipe(postcss(plugins))
// 		.pipe(gulp.dest('dist/'))
// 		.pipe(browserSync.reload({stream: true}));
// }


// exports.css = css;

// function images() {
// 	return gulp.src('images/*.{jpg,png,svg,gif,ico,webp,avif}')
// 		.pipe(gulp.dest('dist/images'))
// 		.pipe(browserSync.reload({stream: true}));
// }

// exports.images = images;


// function clean() {
// 	return del('dist');
// }

// exports.clean = clean;


// // const build = gulp.series(clean, gulp.parallel(html, css, images));
// const build = gulp.series(clean, gulp.parallel(html, css, images));

// exports.build = build;


// function watchFiles() {
// 	gulp.watch(['**/*.html'], html);
// 	gulp.watch(['styles/*.css'], css);
// 	gulp.watch(['images/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
// }
// const watchapp = gulp.parallel(build, watchFiles, serve);

// exports.watchapp = watchapp;


// function serve() {
// 	browserSync.init({
// 		server: {
// 			baseDir: './dist'
// 		}
// 	});
// }

// // function html() {
// //     const options = {
// //       removeComments: true,
// //       removeRedundantAttributes: true,
// //       removeScriptTypeAttributes: true,
// //       removeStyleLinkTypeAttributes: true,
// //       sortClassName: true,
// //       useShortDoctype: true,
// //       collapseWhitespace: true,
// //         minifyCSS: true,
// //         keepClosingSlash: true
// //     };
// //   return gulp.src('src/**/*.html')
// //         .pipe(plumber())
// // 		.on('data', function(file) {
// // 			const buferFile = Buffer.from(htmlMinify.minify(file.contents.toString(), options))
// // 			return file.contents = buferFile
// // 		  })
// //                 .pipe(gulp.dest('dist/'))
// //         .pipe(browserSync.reload({stream: true}));
// // }

// exports.default = watchapp;



  const gulp = require('gulp');
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();

function serve() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
}

function html() {
  return gulp.src('./*.html')
        .pipe(plumber())
				.pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function css() {
  return gulp.src('./styles/*.css')
        .pipe(plumber())
        .pipe(concat('bundle.css'))
				.pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
}

function images() {
  return gulp.src('./images/**/*.{jpg,png,svg,gif,ico,webp,avif}')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({stream: true}));
}

function clean() {
  return del('dist');
}

function watchFiles() {
  gulp.watch(['./*.html'], html);
  gulp.watch(['./styles/**/*.css'], css);
  gulp.watch(['./images/**/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
}

const build = gulp.series(clean, gulp.parallel(html, css, images));
const watchapp = gulp.parallel(build, watchFiles, serve);

exports.html = html;
exports.css = css;
exports.images = images;
exports.clean = clean;

exports.build = build;
exports.watchapp = watchapp;
exports.default = watchapp;