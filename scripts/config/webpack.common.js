const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../../src/index.tsx'),
    },
    output: {
        filename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, '../../build')
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                loader: 'babel-loader',
                options: { cacheDirectory: true },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: '[name].[contenthash:8].[ext]',
                            outputPath: 'assets/images',
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[contenthash:8].[ext]',
                        outputPath: 'assets/fonts',
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, '../../template.html'),
            filename: 'index.html',
            cache: false,
        }),
        new CleanWebpackPlugin()
    ],
    resolve:{
        extensions: ['.ts','.tsx','.js','.jsx']
    }
};