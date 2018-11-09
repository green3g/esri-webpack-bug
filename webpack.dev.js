const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
        host: 'lvh.me',

        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
});
