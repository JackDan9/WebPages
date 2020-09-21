const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'context-webpack.bundle.js'
  },
  mode: 'development',
  devServer: {
    hot: false,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 12345,
  },
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
};