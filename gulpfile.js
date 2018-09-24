var gulp=require("gulp"),
    uglify=require("gulp-uglify"),
    rename=require("gulp-rename"),
    less=require("gulp-less"),
    cssmin=require("gulp-minify-css"),
    prefix=require("gulp-autoprefixer");

// gulp.task("info",function(){
//     console.log('hell world!');
// });
gulp.task("less",function(){
    gulp.src("src/css/*.less")
    .pipe(less())
    .pipe(prefix())
    //.pipe(cssmin())
    .pipe(rename({suffix:".min"}))
    .pipe(gulp.dest("dist/css/"));
});
