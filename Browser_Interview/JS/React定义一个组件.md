# React中如何定义一个组件

## 函数组件与 class 组件 
- 组件允许你将UI拆分为独立可复用的代码片段，并对每个片段进行独立思考。

- 组件，从概念上类似于JavaScript函数。它接受任意的入参(即"props")，并返回用于描述页面展示内容的React元素。

## 函数组件

- 定义组件最简单的方式就是编写JavaScript函数

``` javascript
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

- 该函数是一个有效的React组件, 因为它接收唯一带有数据的"props"(代表属性)对象并返回一个React元素。这类组件被称为"函数组件", 因为它本质上就是JavaScript函数。

## Exampe(函数组件)

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="React之函数组件" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>React之函数组件</title>
        <!-- 核心库 -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <!-- DOM相关 -->
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <!-- 支持JSX -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel">
            function Welcome(props) {
                return <h1>Hello, {props.name}</h1>;
            }

            function DefineFunctionComponent(props) {
                return <code>{props.code}</code>
            }

            function App() {
                return (
                    <div>
                        <Welcome name="asmallpet" />
                        <span>定义函数组件的代码形式如下:</span>
                        <DefineFunctionComponent code="
                        function Welcome(props) {
                            return <h1>Hello, {props.name}</h1>;
                        }" />
                    </div>
                );
            }

            ReactDOM.render(<App />, document.getElementById('root'));
        </script>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

------

## 类组件

- 同时还可以使用ES6的class来定义组件:

``` javascript
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
```

- 就效果而言，此时的类组件与上面的函数组件的效果是类似的。

## Example类组件

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="React之类组件" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>React之类组件</title>
        <!-- 核心库 -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <!-- DOM相关 -->
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <!-- 支持JSX -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel">
            class Welcome extends React.Component {
                render() {
                    return <h1>Hello, {this.props.name}</h1>
                }
            }

            class DefineClassComponent extends React.Component {
                render() {
                    return <code>{this.props.code}</code>
                }
            }

            function App() {
                return (
                    <div>
                        <Welcome name="asmallpet" />
                        <span>定义类组件的代码形式如下:</span>
                        <DefineClassComponent code="
                        class Welcome extends React.Component {
                            render() {
                                return <h1>Hello, {this.props.name}</h1>
                            }
                        }" />
                    </div>
                );
            }

            /**
             * React.Component与Component的区别:
             * 
            */

            ReactDOM.render(<App />, document.getElementById('root'));
        </script>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

## 注意
- 组件无论是使用函数声明还是通过class声明，都绝不能修改自身的props。
- **所有React组件都必须想纯函数一样保护它们的props不被更改。**

### 纯函数Example

``` javascript
/**
 * 这样的函数被称为纯函数， 因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。
 */
function sum(a, b) {
    return a + b;
}
```

### 非纯函数的Example

``` javascript
/**
 * 与纯函数对应的就是非纯函数，如下所示，这类函数修改了入参。
*/
function withdraw(account, amount) {
    account.total -= amount;
}
```

------

## 函数组件与类组件的区别

- 上面相应实现了函数组件与类组件，直观感受我们觉察到了函数组件与类组件的写法是不一致的，但是就效果而言它们是一致，那么除了写法不一致以外还存在不同的地方吗？接下来我们进行发现和梳理。
- 在梳理之前，我们需要明白React中另外一个很重要的概念——**State & 生命周期**

## State & 生命周期

## Example(时钟的实例)

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="React之时钟" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>React之时钟</title>
        <!-- 核心库 -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <!-- DOM相关 -->
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <!-- 支持JSX -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel">
           function tick() {
               const element = (
                   <div>
                        <h1>Hello, world!</h1>
                        <h2>It is {new Date().toLocaleTimeString()}.</h2>
                   </div>
               );
               ReactDOM.render(
                   element,
                   document.getElementById('root')
               );
           }

           setInterval(tick, 1000);
        </script>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

- 我们要封装真正可复用的`Clock`组件。它将设置自己的计时器并每秒更新一次。

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="React之时钟" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>React之时钟</title>
        <!-- 核心库 -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <!-- DOM相关 -->
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <!-- 支持JSX -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel">
            function Clock(props) {
                return (
                    <div>
                        <h1>Hello, world!</h1>
                        <h2>It is {props.date.toLocaleTimeString()}.</h2>
                    </div>
                );
            }
            
            function tick() {
            //    const element = (
            //        <div>
            //             <h1>Hello, world!</h1>
            //             <h2>It is {new Date().toLocaleTimeString()}.</h2>
            //        </div>
            //    );
               ReactDOM.render(
                //    element,
                    <Clock date={new Date()} />,
                   document.getElementById('root')
               );
            }

           setInterval(tick, 1000);
        </script>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

- 上面的代码封装了一个可以复用的`Clock`组件，然而, 它忽略了一个关键的技术问题: `Clock`组件需要设置一个计时器，并且需要每秒更新UI。

- 理想情况下, 我们希望只编写一次代码，便可以让 Clock 组件自我更新：

``` javascript
ReactDOM.render(
    //    element,
    // <Clock date={new Date()} />,
    <Clock />,
    document.getElementById('root')
);
```

- 我们需要在 Clock 组件中添加 “state” 来实现这个功能。

- `State` 与 `props` 类似，但是 `state` 是私有的，并且**完全受控于当前组件**。




