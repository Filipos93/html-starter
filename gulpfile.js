'use strict';

const gulp = require('gulp'),
	sass = require('gulp-sass'),
	jsmin = require('gulp-jsmin'),
	rename = require('gulp-rename'),
	postcss      = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	mcss = require('gulp-mcss');
 
gulp.task('js', function () {
	gulp.src('./src/js/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/js'));
});
 
gulp.task('sass', function (){
	return gulp.src('./src/sass/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([ autoprefixer() ]))
		.pipe(mcss())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/css/'));
});
 
gulp.task('watch', ['sass', 'js'], function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.js', ['js']);
});