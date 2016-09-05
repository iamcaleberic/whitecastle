var gulp = requie('gulp'),
    browserify = require('gulp-browserify'),
    webserver  = require('gulp-webserver');

var src =  './process',
    app =  './app';

gulp.tast('js' , function(){
    return gulp.src(src + '/js/app.js')
    .pipe(browserify({
        transform: 'reactify',
        debug: true
    }))
    .on('error' ,function(err){
        console.error('Error!' ,err.message)

    })
    .pipe(gulp.dest(app + '/js'));
});


gulp.task('html' ,function(){
    gulp.src(app + "/**/*.html");
})

gulp.task('css' , function(){
    gulp.src(app + '/css/*.css');s
})

gulp.task('watch' , function(){
    gulp.watch(src + '/js/**/*.js' , ['js']);
    gulp.watch(app + '/css/**/*.css', ['css']);
    gulp.watch([app + '/**/*.html'], ['html']);

})


