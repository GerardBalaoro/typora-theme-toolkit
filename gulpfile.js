const gulp = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-string-replace');
const config = require('./theme/config');

function copyAssets() {
	return gulp.src('theme/custom/**/*.*')
		.pipe(gulp.dest('dist/' + config.name + '/'));
}

function renameTheme() {
	return gulp.src('theme/custom.css')
		.pipe(replace(/url\(\'\.\/custom\//gm, `url('./${config.name}/`))
		.pipe(rename({ basename: config.name }))
		.pipe(gulp.dest('dist/'));
}

gulp.task('build', gulp.series(
	copyAssets,
	renameTheme
));