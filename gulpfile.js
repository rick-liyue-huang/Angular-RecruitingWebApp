var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

// define some directories and put in the app object
var app = {

	srcPath: 'src/',
	devPath: 'build/',
	prdPath: 'dist/'
};

// turn the libs in source to libs in build and dist directory
gulp.task('lib', function() {

	gulp.src('bower_components/**/*')
		.pipe(gulp.dest(app.devPath + 'vender'))
		.pipe(gulp.dest(app.prdPath + 'vender'))
		.pipe($.connect.reload());
});

// turn the html file to the different directories
gulp.task('html', function() {
	gulp.src(app.srcPath + '**/*.html')
		.pipe(gulp.dest(app.devPath))
		.pipe(gulp.dest(app.prdPath))
		.pipe($.connect.reload());
});

// same as the html file
gulp.task('json', function() {
	gulp.src(app.srcPath + 'data/**/*.json')
		.pipe(gulp.dest(app.devPath + 'data'))
		.pipe(gulp.dest(app.prdPath + 'data'))
		.pipe($.connect.reload());
});

// turn the less file to css and compass
gulp.task('less', function() {

	gulp.src(app.srcPath + 'styles/**/*.less')
		.pipe($.less())
		.pipe(gulp.dest(app.devPath + 'css'))
		.pipe($.cssmin())
		.pipe(gulp.dest(app.prdPath + 'css'))
		.pipe($.connect.reload());
});

// concat the js files to one and compass it
gulp.task('js', function() {

	gulp.src(app.srcPath + 'scripts/**/*.js')
		.pipe($.concat('index.js'))
		.pipe(gulp.dest(app.devPath + 'js'))
		.pipe($.uglify())
		.pipe(gulp.dest(app.prdPath + 'js'))
		.pipe($.connect.reload());
});

// turn the images to smaller size
gulp.task('image', function() {

	gulp.src(app.srcPath + 'images/**/*')
		.pipe(gulp.dest(app.devPath + 'images'))
		.pipe($.imagemin())
		.pipe(gulp.dest(app.prdPath + 'images'))
		.pipe($.connect.reload());
});

// compose the different tasks to one,
gulp.task('build', ['lib', 'less', 'js', 'image', 'json', 'html']);

// clean the directories
gulp.task('clean', function() {

	gulp.src([app.devPath, app.prdPath])
		.pipe($.clean());
});

// open the html file and watch it
gulp.task('serve', function() {

	$.connect.server({
		root: [app.devPath],
		livereload: true,
		port: 8888
	});

	open('http://localhost:8888');

	gulp.watch('bower_components' + '**/*', ['lib']);
	gulp.watch(app.srcPath + 'scripts/**/*.js', ['js']);
	gulp.watch(app.srcPath + '**/*.html', ['html']);
	gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
	gulp.watch(app.srcPath + 'styles/**/*.less', ['less']);
	gulp.watch(app.srcPath + 'images/**/*', ['image']);

});

gulp.task('default', ['serve']);



























