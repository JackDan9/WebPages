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
                ReactDOM.render(
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
    <Clock />,
    document.getElementById('root')
);
```

- 我们需要在`Clock`组件中添加`“state”`来实现这个功能。

- `State` 与 `props` 类似，但是 `state` 是私有的，并且**完全受控于当前组件**。

### 将函数组件转换为class组件

- 通过以下五步将 Clock 的函数组件转成 class 组件：
- 1. 创建一个同名的 `ES6 class`，并且继承于 `React.Component`。
- 2. 添加一个空的 `render()` 方法。
- 3. 将函数体移动到 `render(`) 方法之中。
- 4. 在 `render()` 方法中使用` this.props` 替换 `props`。
- 5. 删除剩余的空函数声明。

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="React之函数组件转换为类组件" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>React之函数组件转换为类组件</title>
        <!-- 核心库 -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <!-- DOM相关 -->
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <!-- 支持JSX -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel">
            class Clock extends React.Component {
                render () {
                    return (
                        <div>
                            <h1>Hello, world!</h1>
                            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
                        </div>
                    );
                }
            }
            
            function tick() {
                ReactDOM.render(
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

- 现在 Clock 组件被定义为 class，而不是函数。

- 每次组件更新时 render 方法都会被调用，但只要在相同的` DOM `节点中渲染 `<Clock />` ，就仅有一个` Clock `组件的` class `实例被创建使用。这就使得我们可以使用如` state `或生`命周期方法`等很多其他特性。

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="Reac类组件之State" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Reac类组件之State</title>
        <!-- 核心库 -->
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <!-- DOM相关 -->
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <!-- 支持JSX -->
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel">
            // class Clock extends React.Component {
            //     render () {
            //         return (
            //             <div>
            //                 <h1>Hello, world!</h1>
            //                 <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            //             </div>
            //         );
            //     }
            // }

            // 1. 把 render() 方法中的 this.props.date 替换成 this.state.date
            // 添加一个 class 构造函数，然后在该函数中为 this.state 赋初值
            class Clock extends React.Component {
                constructor(props) {
                    // 通过以下方式将 props 传递到父类的构造函数中:
                    super(props);
                    // Class 组件应该始终使用 props 参数来调用父类的构造函数。
                    this.state = {date: new Date()};
                }

                // 将生命周期方法添加到 Class 中
                // 当 Clock 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“挂载（mount）”。
                // 同时，当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“卸载（unmount）”。

                // 我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：
                
                // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器：
                componentDidMount() {
                    // 接下来把计时器的 ID 保存在 this 之中（this.timerID）。
                    // 尽管 this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。
                    this.timerID = setInterval(
                        () => this.tick(),
                        1000
                    );
                }

                // 我们会在 componentWillUnmount() 生命周期方法中清除计时器：
                componentWillUnmount() {
                    clearInterval(this.timerID);
                }
                // 这些方法叫做“生命周期方法”。
                
                // 最后，我们会实现一个叫 tick() 的方法，Clock 组件每秒都会调用它。
                tick() {
                    // 使用 this.setState() 来时刻更新组件 state：
                    this.setState({
                        date: new Date()
                    });
                }

                render() {
                    return (
                        <div>
                            <h1>Hello, world!</h1>
                            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                        </div>
                    );
                }
            }

            ReactDOM.render(
                // 移除 <Clock /> 元素中的 date 属性：
                <Clock />,
                document.getElementById('root')
            );
            
        //     function tick() {
        //         ReactDOM.render(
        //             <Clock date={new Date()} />,
        //            document.getElementById('root')
        //         );
        //     }

        //    setInterval(tick, 1000);
        </script>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

### 让我们来快速概括一下发生了什么和这些方法的调用顺序：

-  1. 当 `<Clock />` 被传给 `ReactDOM.render()`的时候，React 会调用` Clock `组件的构造函数。因为` Clock `需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化` this.state`。我们会在之后更新` state`。
-  2. 之后 React 会调用组件的` render() `方法。这就是 React 确定该在页面上展示什么的方式。然后` React `更新` DOM `来匹配` Clock `渲染的输出。
-  3. 当` Clock `的输出被插入到` DOM `中后，`React `就会调用` ComponentDidMount() `生命周期方法。在这个方法中，`Clock `组件向浏览器请求设置一个计时器来每秒调用一次组件的` tick() `方法。
-  4. 浏览器每秒都会调用一次` tick() `方法。 在这方法之中，`Clock `组件会通过调用` setState() `来计划进行一次 UI 更新。得益于` setState() `的调用，`React `能够知道` state `已经改变了，然后会重新调用` render() `方法来确定页面上该显示什么。这一次，`render() `方法中的` this.state.date `就不一样了，如此以来就会渲染输出更新过的时间。`React `也会相应的更新` DOM`。
-  5. 一旦` Clock `组件从` DOM `中被移除，`React `就会调用` componentWillUnmount() `生命周期方法，这样计时器就停止了。

### 函数组件与类组件的共同点

1. 无论是使用函数或者是类来声明一个组件, 它决不能修改它自己的`props`。
2. 所有React组件都必须是纯函数, 并禁止修改其自身`props`。
3. React是单项数据流, 父组件改变了属性, 那么子组件视图会更新。
4. 属性`props`是外界传递过来的, 状态`state`是组件本身的, 状态可以在组件中任意修改。
5. 组件的属性和状态改变都会更新视图。

------

### 函数组件与类组件的区别

- 函数组件和类组件当然是存在区别的，而且函数组件的性能比类组件的性能要高, 因为类组件使用的时候要实例化, 而函数组件直接执行函数取返回结果即可。为了提高性能，尽量使用函数组件。


| 区别 | 函数组件 | 类组件 |
| --- | --- | --- |
| 是否又`this` | 没有 | 有 |
| 是否有声明周期 | 没有 | 有 |
| 是否有状态`state` | 没有 | 有 |


------

> Thinking in JackDan


