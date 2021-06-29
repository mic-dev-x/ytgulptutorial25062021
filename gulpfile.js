/* =========== Minify Css ============ */
// We will use 2 plugins: gulpcleancss and gulprename 
// npm install gulpcleancss savedev
// npm install gulprename savedev
var gulp = require('gulp');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('minifycss', () =>{
    return gulp.src('./src/css/bootstrap.css')
            .pipe( cleancss({compatibility:'ie8'}) )
            .pipe( rename({suffix: '.min'}))
            .pipe(gulp.dest('./src/css'));
});

