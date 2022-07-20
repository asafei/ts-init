const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool:'eval-source-map',
    devServer: {
        // host: '127.0.0.1',
        port: '1570',
        compress: true,
        open: true,
        hot: true
    }
})