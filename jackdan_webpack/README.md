# webpack

## webpack命令操作过程

```shell
cd jackdan_webpack/
cd helloworld/
npm init

npm install webpack --save-dev

cat package.json
npm i webpack-cli --save-dev
vim package.json
# 增加 "build": "webpack"
npm run build
mkdir src
cd src/
vim index.js
# 增加 console.log("Hello World");
npm run build
cd ..
cd dist/
cat main.js
```

-----

## 输出到自定义文件目录
``` json
"dev": "webpack --mode development ./helloworld/src/js/index.js --output ./helloworld/main.js",
"build": "webpack --mode production ./helloworld/src/js/index.js --output ./helloworld/main.js"
```

------

## 配置完了webpack打包这块，我们想写代码都时候用ES6或者ES7

- 先装babel加载器

``` shell
npm i @babel/core babel-loader @babel/preset-env --save-dev
```

- 然后配置
``` json
"dev": "webpack --mode development --module-bind js=babel-loader",
"build": "webpack --mode production --module-bind js=babel-loader"
```

- 最后

``` json
npm run build 
```

------

## 配置webpack

- 首先装一下react

``` shell
npm install react reac-dom --save-dev
```

- 然后装babel-preset-react

``` shell
npm install @babel/preset-react --save-dev
```

- 新建`.babelrc`, 输入:
``` json
{
    "preset": ["@babel/preset-env", "@babel/preset-react"]
}
```

- 新建一个`webpack.config.js`, 输入
``` javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exculde: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
```

- 然后新建一个App.js

``` javascript
import React from "react";
import ReactDom from "react-dom";

const App = () => {
    return (
        <div>
            <p>Hello React And Webpack World</p>
        </div>
    );
};


export default App;
ReactDOM.render(<App />, document.getElementById("app"));
```

- 最后引入到`index.js`里面

``` javascript
import App from './App';
```

- 然后重新build, React的简单设置这里就结束了。

## SASS

------

## 原生CSS和HTML

``` shell
npm install mini-css-extract-plugin css-loader --save-dev
npm install html-webpack-plugin html-loader --save-dev
```

- `webpack.config.js`

``` javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.export = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimzie: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
```

- 修改业务代码, 然后自动服务器自动刷新。

``` shell
npm install webpack-dev-server --save-dev
```

- 配置一下`package.json`

``` json
"start": "webpack-dev-server --mode development --open"
```

------

> T

