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

var tokensFile = "tokens/tokens.json"

exports.default = series(
    () => theoWithFormat(tokensFile, 'scss'),
    () => theoWithFormat(tokensFile, 'common.js'),
    () => theoWithFormat(tokensFile, 'html')
);