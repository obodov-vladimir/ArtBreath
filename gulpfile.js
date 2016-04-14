var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		browserSync  = require('browser-sync');
		concat       = require('gulp-concat'),
		uglify			 = require('gulp-uglifyjs'),
		cssnano      = require('gulp-cssnano'),
		rename       = require('gulp-rename'),
		del 				 = require('del'),
		imagemin		 = require('gulp-imagemin'),
		pngquant     = require('imagemin-pngquant'),
		cache        = require('gulp-cache'),
		autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass',function(){
	return gulp.src('src/sass/**/*.sass')
				 .pipe(sass())
				 .pipe(autoprefixer(['last 15 versions','> 1%','ie 8', 'ie 7'],{cascade:true}))
				 .pipe(gulp.dest('src/css'))
				 .pipe(browserSync.reload({stream: true}))
});
gulp.task('scripts',function(){
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
		'src/libs/animate/animate-css.js',
		'src/libs/filterizr/jquery.filterizr.js',
		'src/libs/icheck/icheck.min.js',
		'src/libs/magnific-popup/jquery.magnific-popup.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});
gulp.task('css-libs',['sass'],function(){
	return gulp.src([
	  'src/libs/animate/animate.min.css',
	  'src/libs/bootstrap/bootstrap-grid.min.css',
	  'src/libs/fonts-awesome/css/font-awesome.min.css',
	  'src/libs/ihover/src/ihover.css',
	  'src/libs/magnific-popup/magnific-popup.css',
])

	.pipe(concat('libs.css'))
	.pipe(gulp.dest('src/css'));
});
gulp.task('css-libs-min',['css-libs'],function(){
	return gulp.src('src/css/libs.css')
	 .pipe(cssnano())
	 .pipe(gulp.dest('src/css'));
})	

gulp.task('browser-sync', function() {
		browserSync({
				server: {
						baseDir: "src"
				},
				notify: false
		});
});
gulp.task('clean',function(){
	return del.sync('dist');
});
gulp.task('clear',function(){
	return cache.clearAll();
});
gulp.task('img', function(){
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});
gulp.task('watch',['browser-sync','css-libs-min','scripts'], function () {
	gulp.watch('src/sass/*.sass', ['sass']);
	gulp.watch('src/js/*.js',browserSync.reload);
	gulp.watch('src/*.html',browserSync.reload);
});
gulp.task('build',['clean','img','sass','scripts'],function(){
	var builCss = gulp.src([
		'src/css/libs.min.css',
		'src/css/main.css',
		'src/css/media.css',
		])
		.pipe(gulp.dest('dist/css'));
		var buildJs =  gulp.src('src/js/**/*.js')
		 .pipe(gulp.dest('dist/js'));
		 var buildJs =  gulp.src('src/*.html')
			.pipe(gulp.dest('dist'));

});
