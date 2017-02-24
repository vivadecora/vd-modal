"use strict";

var gulp = require("gulp");
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');

module.exports = function() {

	var filesToUglify = [
		"./src/js/modal.module.js",
		"./src/js/modal.template-cache.js",
		"./src/js/modal.run.js",
		"./src/js/models/*.js",
		"./src/js/directives/*.js",
		"./src/js/controllers/*.js",
		"./src/js/**/*.js"
	];
	
	var uglifyOptions = {
		outSourceMap: true
	};

	return gulp.src(filesToUglify)
	    .pipe(uglify("vd-modal.min.js", uglifyOptions))
	    .pipe(gulp.dest("./dist/js"));	
}