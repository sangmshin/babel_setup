var gulp = require('gulp');
// var sass = require('gulp-sass');
var bs = require('browser-sync').create(); // create a browser sync instance.
var babel = require("gulp-babel");

gulp.task('babel', function () {
    return gulp.src('js/script.js')
    .pipe(babel({
        presets:['env']
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./*.*").on('change', bs.reload);
    gulp.watch("./js/*.*", ['babel']).on('change', bs.reload);
});

gulp.task('default', ['babel', 'watch', 'browser-sync'])

