const gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('copy', () =>
    gulp.src(['./src/**', '!./src/pm2-apps/**'])
        .pipe(babel({
            presets: [['@babel/env', {modules: 'commonjs'}]],
            plugins: ['@babel/plugin-transform-runtime']
        }))
        .pipe(gulp.dest('./dist'))
);

gulp.task('package', gulp.series('copy'));
