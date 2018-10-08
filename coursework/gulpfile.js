let gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglifyes'),
    autoPrefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    bs = require('browser-sync'),
    htmlMin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    delFiles = require('del'),
    cssMin = require('gulp-csso'),
    babel = require('gulp-babel'),
    pug = require('gulp-pug');

const paths = {
    devHtml: 'app/html/*.html',
    devSass: 'app/sass/**/*.sass',
    devJs: 'app/js/**/*.js',
    project: 'dist',
    projectCss: 'dist/css',
    projectJs: 'dist/js',
    img: 'app/img/**/*.+(png|jpg)',
    css: 'app/css/**/*.css'
};

gulp.task('html', () => {
   return gulp.src(paths.devHtml) //Выбираем файл с котороыи работаем
       .pipe(htmlMin({collapseWhitespace: true})) //Минификация html
       .pipe(gulp.dest(paths.project)); // Сохранение файла
});
gulp.task('img', () => {
    return gulp.src(paths.img)
        .pipe(gulp.dest('dist/img'));
});
gulp.task('json', () => {
    return gulp.src('app/json/**/*.json')
        .pipe(gulp.dest('dist/json'));
});
gulp.task('css', () => {
    return gulp.src(paths.css)
        .pipe(gulp.dest('dist/css'));
});
gulp.task('sass', () => {
    return gulp.src(paths.devSass)
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(cssMin())
        .pipe(gulp.dest(paths.projectCss));
});
gulp.task('js:es6', () => {
    return gulp.src(paths.devJs)
        .pipe(gulp.dest(paths.projectJs))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.projectJs));
});
gulp.task('js:babel', () => {
    return gulp.src(paths.devJs)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({suffix: '.es5'}))
        .pipe(gulp.dest(paths.projectJs));
});
gulp.task('clean', () => {
   return delFiles(['dist/**', '!dist'])
});
gulp.task('pug', () => {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/html/'))
});
gulp.task('server', () => {
    return bs({
        browser: 'google chrome',
        server: {
            baseDir: 'dist'
        }
    })
});
gulp.task('sass:watch', () => {
   return gulp.watch('app/sass/**/*.sass', gulp.series('sass', (done) => {
       bs.reload();
       done();
   }));
});
gulp.task('js:watch', () => {
    return gulp.watch('app/js/**/*.js', gulp.series('js:es6', (done) => {
        bs.reload();
        done();
    }));
});
gulp.task('html:watch', () => {
    return gulp.watch('app/html/**/*.html', gulp.series('html', (done) => {
        bs.reload();
        done();
    }));
});
gulp.task('pug:watch', () => {
    return gulp.watch('app/pug/**/*.pug', gulp.series('pug', (done) => {
        bs.reload();
        done();
    }));
});
gulp.task('default', gulp.series('clean', gulp.parallel('html', 'sass', 'css', 'js:es6', 'js:babel', 'pug', 'sass:watch', 'html:watch', 'js:watch', 'pug:watch', 'img', 'json', 'server')));