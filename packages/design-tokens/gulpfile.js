var { src, dest, series } = require('gulp'),
    theoGulp = require('gulp-theo');

function theoWithFormat(path, format) {
    return src(path)
        .pipe(theoGulp({
            transform: { type: 'web' },
            format: {
                type: format
            },
        }))
        .pipe(dest('dist'))
}

exports.default = series(
    () => theoWithFormat('colors.json', 'scss'),
    () => theoWithFormat('colors.json', 'common.js'),
    () => theoWithFormat('colors.json', 'html')
);