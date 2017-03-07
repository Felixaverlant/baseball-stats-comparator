var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css'),
    uglifycss = require('gulp-uglifycss'),
    concat = require('gulp-concat');

gulp.task('css', function() {
    return gulp.src([
            "node_modules/normalize.css/normalize.css",
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'src/css/**/*'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss("bundle.css"))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function() {

    return gulp.src([
            'src/js/global.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/lodash/lodash.min.js',
            'node_modules/d3/d3.min.js',
            'node_modules/tether/dist/js/tether.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/handsontable/dist/handsontable.full.min.js',
            'node_modules/chosen-js/chosen.jquery.js',
            'node_modules/bluebird/js/browser/bluebird.min.js',
            'src/js/d3.parcoords.js',
            'src/js/divgrid.js',
            'src/js/viz.js',
            'src/js/data-manager.js',
            'src/js/main.js'

        ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/js/'));


});

gulp.task('fonts', function() {
    return gulp.src([
            'src/fonts/*'
        ])
        .pipe(gulp.dest('dist/fonts/'))
})


gulp.task('data', function() {
    return gulp.src([
            'src/data/**/*'
        ])
        .pipe(gulp.dest('dist/data/'))
})


gulp.task('img', function() {
    return gulp.src([
            'src/img/**/*'
        ])
        .pipe(gulp.dest('dist/img/'))
})

gulp.task('watch', function() {
    gulp.watch('src/js/**/*', ['js']);
    gulp.watch('src/css/**/*', ['css']);
    gulp.watch('src/fonts/**/*', ['fonts']);
    gulp.watch('src/data/**/*', ['data']);
    gulp.watch('src/img/**/*', ['img']);
});

gulp.task('default', ['run', 'watch']);

gulp.task('run', ['css', 'js', 'fonts', 'data', 'img']);
