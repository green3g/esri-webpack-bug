// build a development bundle for the dev server
// this will keep all the dev code
// including the development app id's
// but produce a minified bundle for
// "mock" production use

const merge = require('webpack-merge');
const common = require('./webpack.common');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const {DefinePlugin} = require('webpack');
module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    mode: 'production',
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('staging'),
            },
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        }),
    ],
})
;
