import gulp from "gulp";
import concat from "gulp-concat";
import autoPrefixer from "gulp-autoprefixer";
import GulpCleanCss from "gulp-clean-css";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import GulpUglify from "gulp-uglify";
import { deleteSync } from "del";
import browserSync from "browser-sync";
import imagemin from "gulp-imagemin";
import gcmq from "gulp-group-css-media-queries";
import sourcemaps from "gulp-sourcemaps";
import babel from "gulp-babel";
import htmlmin from "gulp-htmlmin";

// fix sass bug
const sass = gulpSass(dartSass);

// output path
const path = "./build";

// rask for scss convert to css
async function preproc () {
	return gulp.src("./src/scss/styles.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gcmq())
		.pipe(sourcemaps.init())
		.pipe(concat("styles.css"))
		.pipe(autoPrefixer({
			overrideBrowserslist: ["> 0.0001%"],
			cascade: false
		}))
		.pipe(GulpCleanCss({
			level: 2
		}))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(path+"/css"))
		.pipe(browserSync.stream());
}

// task for other css files to concat in one css file
async function libsCSS () {
	return gulp.src("./src/libsCSS/**/*.css")
	.pipe(gcmq())
	.pipe(concat("libs-css-file.css"))
	.pipe(autoPrefixer({
		overrideBrowserslist: ["> 0.0001%"],
		cascade: false
	}))
	.pipe(GulpCleanCss({
		level: 2
	}))
	.pipe(gulp.dest(path+"/css"))
	.pipe(browserSync.stream());
}

// task for all javascript files with babel
async function scripts () {
	return gulp.src("./src/js/**/*.js")
		.pipe(sourcemaps.init())
		.pipe(concat("all.js"))
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		.pipe(GulpUglify({
			toplevel: true,
			warnings: false
		}))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(path+"/js"))
		.pipe(browserSync.stream());
}

// task for pictures with imagemin
async function pictures () {
	return gulp.src("./src/img/**/*")
		.pipe(imagemin())
		.pipe(gulp.dest(path+"/img"));
}

// task for remove build folder and him files
async function toClear () {
	return deleteSync([path]);
}

// task for fonts
async function fonts () {
	return gulp.src("./src/fonts/**/*")
		.pipe(gulp.dest(path+"/fonts"));
}

// task for other js files (libs)
async function libsJS () {
	return gulp.src("./src/libsJS/**/*.js")
		.pipe(gulp.dest(path+"/libsJS"))
		.pipe(browserSync.stream());
}

// task for all html files with htmlmin plugin
async function htmls () {
	return gulp.src("./src/**/*.html")
		.pipe(htmlmin({ 
			collapseWhitespace: true,
			removeTagWhitespace: true
		}))
		.pipe(gulp.dest(path))
		.pipe(browserSync.stream());
}

async function watch () {
	browserSync.init({
		server: path,
		tunnel: false,
		port: 4587 // default: 3000
	});

	gulp.watch("./src/scss/**/*.scss", preproc);
	gulp.watch("./src/libsCSS/**/*.css", libsCSS);
	gulp.watch("./src/js/**/*.js", scripts);
	gulp.watch("./src/img/**/*", pictures);
	gulp.watch("./src/fonts/**/*", fonts);
	gulp.watch("./src/libsJS/**/*.js", libsJS);
	gulp.watch("./src/**/*.html", htmls);
	gulp.watch("./**/*.html").on("change", browserSync.reload)
}

// different tasks
// gulp.task("toClear", toClear);
// gulp.task("htmls", htmls);
// gulp.task("preproc", preproc);
// gulp.task("libsCSS", libsCSS);
// gulp.task("scripts", scripts);
// gulp.task("pictures", pictures);
// gulp.task("fonts", fonts);
// gulp.task("libsJS", libsJS);

// task for stream on our project
gulp.task("watch", watch);

// task for build (production) our project
gulp.task("build", gulp.series(toClear, gulp.parallel(htmls, preproc, libsCSS, scripts, pictures, fonts, libsJS)));

// task for parallel build and watch tasks running
gulp.task("dev", gulp.series("build", "watch"));