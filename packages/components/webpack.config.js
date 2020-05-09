const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/sharedComponent/index.js',
    output: {
        path: path.resolve('lib'),
        filename: 'SharedComponent.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}