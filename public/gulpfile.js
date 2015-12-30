


var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    return gulp.src([
            '/assets/bower_components/jquery/dist/jquery.js',
            '/assets/bower_components/bootstrap/dist/js/bootstrap.js',
            '/assets/bower_components/headhesive/dist/headhesive.js',
            '/assets/js/lib/particle-system.js',
            '/assets/js/app/*.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('/assets/js'));
});

gulp.task('default', ['scripts']);