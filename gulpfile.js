const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser-js')
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/* 
 -- TOP LEVEL FUNCTIONS --
 gulp.task - Define tasks
 gulp.src - Point to files to use 
 gulp.dest - Point to folder to output
 gulp.watch - Watch files and folders for changes
*/

// Logs message
gulp.task('message', async function(){
    return console.log('Gulp is running...');
});

// Copy all html files
gulp.task('copyHtml', async function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('public'));
});

// Copy all fonts
gulp.task('copyFonts', async function(){
    gulp.src('src/fonts/*')
        .pipe(gulp.dest('public/fonts'));
});

//Optimise images
gulp.task('imageMin', async function (){ 
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
});

// Minify JS
gulp.task('minifyJS', async function(){
    gulp.src('src/js/*.js')
    .pipe(terser({
       mangle: {
         toplevel: true
       }
    }))
    .on('error', function (error) {
      this.emit('end')
    })
    .pipe(gulp.dest('public/js/'))
})

// Compile Sass
gulp.task('sass', async function(){
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});

// Scripts
gulp.task('scripts', async function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(terser({
            mangle: {
              toplevel: true
            }
         }))
        .pipe(gulp.dest('public/js'));
});

gulp.task('default', gulp.parallel('message', 'copyHtml', 'imageMin', 'sass', 'scripts', 'copyFonts'));

gulp.task('watch', async function(){
    gulp.watch('src/js/*.js', gulp.series('scripts'));
    gulp.watch('src/images/*', gulp.series('imageMin'));
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
    gulp.watch('src/*.html', gulp.series('copyHtml'));
    gulp.watch('src/fonts/*', gulp.series('copyFonts'));
});