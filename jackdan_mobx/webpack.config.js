const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-mobx-test.bundle.js'
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        hot: true, // 热替换
        contentBase: path.join(__dirname, 'dist'),
        compress: true, // gzip压缩
        port: 8000
    },
    devtool: "sourceMap",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: path.resolve(__dirname, 'dist/index.html')
        })
    ]
}