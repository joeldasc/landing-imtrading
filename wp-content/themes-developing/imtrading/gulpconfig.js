// ==== CONFIGURATION ==== //

// Project paths
var project = 'imtrading',
    src = './src/',
    build = '../../themes/' + project + '-dev/',
    dist = '../../themes/' + project + '/',
    assets = './wp-content/',
    dev = './node_modules/',
    composer = './vendor/',
    modules = './node_modules/';

// Project settings
module.exports = {

    browsersync: {
        files: [ build + '/**', '!' + build + '/**.map' ],
        notify: true,
        open: true,
        port: 3009,
        proxy: 'landingimtrading.local'
    },

    images: {
        build: {
            src: src + '**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg|*.ico)',
            dest: build
        },
        dist: {
            src: [dist + '**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg|*.ico)', '!' + dist + 'screenshot.png'],
            imagemin: {
                optimizationLevel: 7,
                progressive: true,
                interlaced: true
            },
            dest: dist
        }
    },

    livereload: {
        port: 35729
    },

    scripts: {
        bundles: {
            core: [ 'core' ],
            plugins: [ 'plugins' ]
        },
        chunks: {
            core: [
                src + 'js/core.js'
            ],
            plugins: [
                dev + 'jquery/dist/jquery.js'
            ]
        },
        dest: build + 'js/',
        lint: {
            src: [ src + 'js/**/*.js' ]
        },
        minify: {
            src: build + 'js/**/*.js',
            uglify: {},
            uglify_dist: {
                compress: {
                    drop_console: true
                }
            },
            dest: build + 'js/'
        },
        namespace: project + '-'
    },

    styles: {
        build: {
            src: src + 'scss/**/*.scss',
            dest: build
        },
        compiler: 'libsass',
        autoprefixer: {browsers: [ '> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4' ]},
        minify: {safe: true},
        rubySass: {
            loadPath: [ './src/scss', dev, modules ],
            precision: 6,
            sourcemap: true
        },
        libsass: {
            includePaths: [ './src/scss', dev, modules ],
            precision: 6,
            onError: function( err ) {
                return console.log( err );
            }
        }
    },

    theme: {
        lang: {
            src: src + 'languages/**/*',
            dest: build + 'languages/',
            srcgen: src + 'languages/'
        },
        php: {
            src: src + '**/*(*.php|*.mmdb)',
            dest: build
        },
        fonts: {
            src: src + 'fonts/**/*',
            dest: build + 'fonts/'
        }
    },

    utils: {
        clean: [ build + '**/.DS_Store' ],
        wipe: [ dist ],
        dist: {
            src: [ build + '**/*', '!' + build + '**/*.map' ],
            dest: dist
        },
        normalize: {
            src: modules + 'normalize.css/normalize.css',
            dest: src + 'scss/vendor/normalize',
            rename: '_normalize.scss'
        }
    },

    watch: {
        src: {
            styles: src + 'scss/**/*.scss',
            scripts: src + 'js/**/*.js',
            images: src + '**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)',
            theme: src + '**/*.php'
        },
        watcher: 'browsersync' // use ('browsersync') and Livereload ('livereload')
    }
};
