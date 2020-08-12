// ==== IMAGES ==== //

var gulp        = require('gulp'),
    wpPot       = require('gulp-wp-pot'),
    gulpsort    = require('gulp-sort'),
    config      = require('../../gulpconfig').theme;

// Generate pot file with new translations
gulp.task('potfilesgen', function () {
    return gulp.src(config.php.src)
        .pipe(gulpsort())
        .pipe(wpPot( {
            domain: 'imtrading-theme',
            package: 'imtrading-theme',
            lastTranslator: 'Imtrading <joeldiego2895@gmail.com>',
            team: 'Imtrading <joeldiego2895@gmail.com>'
        } ))
        .pipe(gulp.dest(config.lang.srcgen + '/imtrading-theme.pot'));
});
