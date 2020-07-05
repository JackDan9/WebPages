const path = require('path');
const webpack = require('webpack');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  mode: 'development',
  devServer: {
    hot: true, // 热替换
    contentBase: path.join(__dirname, 'dist'), // server文件的根目录
    compress: true, // 开启gzip
    port: 8080, // 端口
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
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    })
  ]
};

// // __dirname是node.js中的一个全局变量, 它指向当前执行脚本所在的目录
// // path是node.js中提供的处理文件路径的小工具。(http://www.runoob.com/nodejs/nodejs-path-module.html)

// const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

// module.exports = {
//     // 项目入口, webpack从此开始构建
//     entry: {
//         main: path.join(__dirname, 'src/index.js'), // 指定入口, 可以指定多个。参考webpack文档。
//     },
//     output: {
//         path: path.join(__dirname, "dist"), // bundle生成(emit)到哪里
//         filename: "bundle.js", // bundle.js生成文件的名称
//     },
//     /**
//      * 
//      * 这样就完成了最简单的webpack配置文件。相应的我们需要在src目录下新建一个index.js 文件。
//      * 接下来在命令行输入 webpack --config ./webpack.config.js就可以输出dist文件夹。
//      * 为了方便起见，通常我们会在package.json里配置脚本命令。
//      * 在scripts标签下，添加一句"build": "webpack --config ./webpack.config.js"这样，我们就可以通过npm run build完成webpack打包。
//      * 
//      */
//     // devServer: {
//     //     // contentBase: path.join(__dirname, ""),
//     //     contentBase: false, //since we use CopyWebpackPlugin.
//     //     clientLogLevel: 'warning',
//     //     publicPath: '/',
//     //     hot: true,
//     //     progress: true,
//     //     overlay: { warnings: false, errors: true },
//     //     historyApiFallback: {
//     //         rewrites: [
//     //             { from: /.*/, to: path.posix.join('/', 'index.html') },
//     //         ],
//     //     },
//     //     // historyApiFallback: true,
//     //     // quiet: true, // necessary for FriendlyErrorsPlugin
//     //     compress: true,
//     //     inline: true,
//     //     port: 8083,
//     //     host: '127.0.0.1',
//     //     watchOptions: {
//     //         poll: false,
//     //     }
//     // },
//     devServer: {
//         hot: true, // 热替换
//         contentBase: path.join(__dirname, 'dist'), // server文件的根目录
//         compress: true, // 开启gzip
//         port: 8080, // 端口
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 enforce: 'pre',
//                 use: [
//                     {
//                         loader: 'babel-loader',
//                     },
//                     // {
//                     //     loader: 'eslint-loader',
//                     //     options: {
//                     //         formatter: require('eslint-friendly-formatter'),
//                     //         emitWarning: false
//                     //     }
//                     // }
//                 ]
//             },
//             {
//                 test: /\.(css|less)$/,
//                 exclude: /node_modules/,
//                 include: /src/,
//                 use: [
//                     {
//                         loader: "style-loader",
//                     },
//                     {
//                         loader: "css-loader",
//                         options: {
//                             minimize: process.env.NODE_ENV === 'production',
//                             importLoaders: 2,
//                             localIdentName: '[name]-[local]-[hash:base64:5]',
//                             modules: true
//                         }
//                     },
//                     {
//                         loader: 'postcss-loader',
//                         options: { // 如果没有options这个选项将会报错 No PostCSS Config found
//                             plugins: (loader) => [
//                                 require('autoprefixer')(),
//                             ]
//                         }
//                     },
//                     {
//                         loader: 'less-loader',
//                         options: {
//                             javascriptEnabled: true,
//                         }
//                     }
//                 ]
//             }
//         ],
//     },
//     plugins: [
//         // plugins下添加
//         // new HtmlWebPackPlugin({
//         //     template: './src/index.html',
//         //     minify: {
//         //         removeComments: true,
//         //         collapseWhitespace: true,
//         //         removeAttributeQuotes: true
//         //         // more options:
//         //         // https://github.com/kangax/html-minifier#options-quick-reference
//         //     },
//         //     filename: 'index.html'
//         // }),
//         new HtmlWebPackPlugin({
//             template: './index.html',
//             filename: path.resolve(__dirname, 'dist/index.html')
//         })
//     ],
// };