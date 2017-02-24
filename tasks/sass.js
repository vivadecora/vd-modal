"use strict";

var gulp = require("gulp");
var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');

module.exports = function() {

	return gulp.src("./src/sass/vd-modal.sass")
	    .pipe(sass())
	    .pipe(gulp.dest("./dist/css"));	
}