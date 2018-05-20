var gulp =        require('gulp'),
    sass =        require('gulp-ruby-sass'),
    browserSync = require('browser-sync');


gulp.task('sass', function () {
    return sass('app/scss/main.scss')
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
});


gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
});