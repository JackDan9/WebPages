# Redux
## 定义
- Redux是JavaScript状态容器, 提供可预测化的状态管理。
- 可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。
- Redux 除了和 React 一起用外，还支持其它界面库。 它体小精悍（只有2kB，包括依赖）。
- Redux 由 Flux 演变而来，但受 Elm 的启发，避开了 Flux 的复杂性。 不管你有没有使用过它们，只需几分钟就能上手 Redux。


```
Q：--save-dev 和 --save的区别 
A：--save-dev是你开发时候依赖的东西，--save是你发布之后依赖的东西。
TIPS: -g表示全局安装，--save-dev 可以简写为 -D ，--save 可以简写为 -S ，npm install 可以简写为 npm i
```

``` javascript
配置开发应用服务器
正常情况下，我们需要以应用服务器打开我们的网页，webpack-dev-server提供了一个简单的web服务器，并且能够实时重新加载。指南 首先需要安装webpack-dev-server npm install -D webpack-dev-server。 
接下来，修改配置文件，告诉开发服务器，在哪里寻找文件：
```

``` javascript
这段配置告诉webpack-dev-server，在默认host和port下建立服务，并将contentBase目录下的目录，作为可访问文件。 
接下来让我们的服务器跑起来，在package.json配置如下的命令脚本：

其中mode是上文中提到模式概念，webpack会有相应的内置优化。

使用babel-loader我们需要配置相应的规则，我们可以这样配置： 
module: {
    rules: [{
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react']
            }
        }
    }]
}

同时考虑到，后期可能会别的规则需求，例如使用antDesign的按需引入，我们将babel的配置提出来，在根目录下新建文件 .babelrc，并书写以下代码。

其中test对应的可以匹配的正则文件，include是需要编译的目录，exclude是跳过的目录，use里面可以书写跟loader相关的配置。
注意loader相关的顺序，特别是使用ExtractTextWebpackPlugin将css文件单独打包的时候，应注意从右往左的顺序
至此，完成了一个简单的react工程的配置。只包含有js和css相关的内容。
```

# 工程优化

``` javascript
关于单页面工程的优化，有很多方向和方法。不管是生成环境构建还是懒加载，亦或是构建性能。通过环境变量来实现不同的配置和打包策略。根据工程的需求和复杂度不同，会有不同的解决方案，而随着现在页面越来越复杂，各个组件又经常变动。暂时还没有真正的完美的解决方案。 
在这里，我只能做一些常规性的优化
```