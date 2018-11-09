const ArcGISPlugin = require('@arcgis/webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const MinifyPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        'main': './src/index.js',
    },
    output: {
        filename: '[name].[chunkhash].js',
        publicPath: '',
    },

    plugins: [
        new CleanWebpackPlugin(['dist', 'build']),
        new ArcGISPlugin({
            useDefaultAssetLoaders: false,
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: './[name].[hash].css',
            chunkFilename: './[id].[hash].css',
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunksSortMode: 'none',
        }),
        new HtmlWebPackPlugin({
            inject: false,
            template: './src/oauth-callback.html',
            filename: './oauth-callback.html',
            chunksSortMode: 'none',
        }),
    ],

    module: {
        rules: [{
            test: /\.stache$/,
            use: [{loader: 'raw-loader'}],
        }, {
            test: /\.layout$/,
            use: [{loader: 'raw-loader'}],
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                },
            }],
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {loader: 'css-loader', options: {sourceMap: true}},
                'postcss-loader', {
                    loader: 'resolve-url-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        }, {
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader',
            ],
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {loader: 'css-loader', options: {sourceMap: true}},
                'postcss-loader', {
                    loader: 'resolve-url-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        }, {
            test: /\.(jpe?g|png|gif|webp)$/,
            loader: 'url-loader',
            options: {
                // Inline files smaller than 10 kB (10240 bytes)
                limit: 10 * 1024,
            },
        }, {
            test: /\.(wsv|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'build/[name].[ext]',
                },
            }],
        }],
    },


    resolve: {
        extensions: ['.wasm', '.js', '.json'],
        modules: [
            path.resolve(__dirname, '/src'),
            path.resolve(__dirname, 'node_modules/'),
        ],
        alias: {
            'esri': 'arcgis-js-api',
            'sweetalert2$': 'sweetalert2/dist/sweetalert2',
            'moment': 'moment/moment',
        },
    },


    node: {
        process: false,
        global: false,
        fs: 'empty',
    },


    externals: [
        (context, request, callback) => {
            if (/pe-wasm$/.test(request)) {
                return callback(null, 'amd ' + request);
            }
            callback();
        },
    ],

    optimization: {
        minimizer: [
            new MinifyPlugin({
                parallel: true,
            }),
        ],
    },
};
