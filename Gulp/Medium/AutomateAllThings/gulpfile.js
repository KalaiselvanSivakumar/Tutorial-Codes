var gulp = require('gulp');

// Tutorial 1 - Hello World

// gulp.task('default', () => {
//     console.log('Hello World! From Gulp tool');
// })

// Tutorial 2 - Setting up tasks

// Step 1 - Setting up the folder structure
var paths = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',

    tmp: 'tmp',
    tmpIndex: 'tmp/index.html',
    tmpCSS: 'tmp/**/*.css',
    tmpJS: 'tmp/**/*.js',

    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js'
};

// Step 2 - Set up HTML task
gulp.task('html', () => {
    return gulp.src(paths.srcHTML)
            .pipe(gulp.dest(paths.tmp));
});

// Step 3 - Set up CSS task
gulp.task('css', () => {
    return gulp.src(paths.srcCSS)
            .pipe(gulp.dest(paths.tmp));
});

// Step 4 - Set up JS task
gulp.task('js', () => {
    return gulp.src(paths.srcJS)
            .pipe(gulp.dest(paths.tmp));
});

// Step 5 - Run dependent tasks (parallel)
gulp.task('copy', ['html', 'css', 'js']);

// Tutorial 3 - Inject files into HTML

var inject = require('gulp-inject');

gulp.task('inject', ['copy'], () => {
    var css = gulp.src(paths.tmpCSS);
    var js = gulp.src(paths.tmpJS);
    return gulp.src(paths.tmpIndex)
            .pipe(inject(css, { relative: true }))
            .pipe(inject(js, { relative: true }))
            .pipe(gulp.dest(paths.tmp));
});

// Tutorial 4 - Serve the development web-server

var webserver = require('gulp-webserver');

gulp.task('serve', ['inject'], () => {
    return gulp.src(paths.tmp)
            .pipe(webserver({
                port: 3000,
                livereload: true
            }))
});

// Tutorial 5 - Watching for file changes
gulp.task('watch', ['serve'], () => {
    gulp.watch(paths.src, ['inject']);
});

gulp.task('default', ['watch']);

// Tutorial 6 - Building for distribution (production)

var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('html:dist', () => {
    return gulp.src(paths.srcHTML)
            .pipe(htmlclean())
            .pipe(gulp.dest(paths.dist));
});

gulp.task('css:dist', () => {
    return gulp.src(paths.srcCSS)
            .pipe(concat('style.min.css'))
            .pipe(cleanCSS())
            .pipe(gulp.dest(paths.dist));
});

gulp.task('js:dist', () => {
    return gulp.src(paths.srcJS)
            .pipe(concat('script.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(paths.dist));
});

gulp.task('copy:dist', ['html:dist', 'css:dist', 'js:dist']);

gulp.task('inject:dist', ['copy:dist'], () => {
    var css = gulp.src(paths.distCSS);
    var js = gulp.src(paths.distJS);
    return gulp.src(paths.distIndex)
            .pipe(inject(css, { relative: true }))
            .pipe(inject(js, { relative: true }))
            .pipe(gulp.dest(paths.dist));
});

gulp.task('build', ['inject:dist']);

// Tutorial 7 - Deleting un-wanted files

var del = require('del');

gulp.task('clean', () => {
    return del([paths.tmp, paths.dist], {
        force: true
    });
});

var rename = require('gulp-rename');

gulp.task('rename', ['clean'], () => {
    return gulp.src(paths.src)
            .pipe(rename((path) => {
                path.dirname = path.dirname.replace('ts', 'js');
            }))
            .pipe(gulp.dest(paths.dist));
});

gulp.task('rememp', ['rename'], () => {
    del(['dist/**/ts']);
});