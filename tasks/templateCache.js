"use strict";

var gulp = require("gulp");
var templateCache = require("gulp-angular-templatecache");

module.exports = function() {
	var templateCacheOptions = {
		templateHeader: "angular.module(\"vd-modal.template-cache\", []);\nangular.module(\"vd-modal.template-cache\").run([\"$templateCache\", function($templateCache) {",
		root: "/src/js/"
	};
	
	return gulp.src("./src/js/**/*.html")
	    .pipe(templateCache("modal.template-cache.js", templateCacheOptions))
	    .pipe(gulp.dest("./src/js"));	
}