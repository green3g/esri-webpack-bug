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
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
})
;
