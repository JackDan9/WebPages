---
title: jackdan_react_app
tags: react, application, study
author:jackdan

---
## jackdan_react_app
### 项目构建过程:
- 1、请确保电脑上装的最新版本的[Node.js][1];
- 2、按照安装说明创建一个新的项目;
```
npm install -g create-react-app
create-react-app my-app
```
- 3、删除`src/`新项目文件夹中的所有文件(不要删除文件夹, 只是其中的内容);
```
cd my-app
rm -f src/*
```
- 4、使用如下`CSS`代码添加到文件夹中指定`index.css`的`src/`文件;
```css
body {
	font: 14px "Century Gothic", Futura, sans-serif;
	margin: 20px;
}

ol, ul {
	padding-left: 30px;
}

.board-row:after {
	clear: both;
	content: "";
	display: table;
}

.status {
	margin-bottom: 10px;
}

.square {
	background: #fff;
	border: 1px solid #999;
	float: left;
	font-size: 24px;
	font-weight: bold;
	line-height: 34px;
	height: 34px;
	margin-right: -1px;
	margin-top: -1px;
	padding: 0;
	text-align: center;
	width: 34px;
}

.square:focus {
	outline: none;
}

.kbd-navigation .square:focus {
	background: #ddd;
}

.game {
	display: flex;
	flex-direction: row;
}

.game-info {
	margin-left: 20px;
}
```
- 用如下的`JS`代码添加一个文件夹`index.js`中的`src/`文件;
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

```
- 现在, 如果`npm start`或者`yarn start`在项目中运行并在`http://localhost:3000`在浏览器中打开, 则应该看到一个空的`＃`字游戏空格.

------

## 概观:
### 什么是反应?
- `React`是用一个用于构建用户界面的声明式、高效灵活的JavaScript库.
- `React`有几种不同的组件, 但是我们从`React.Component`子类开始:
```react
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```
- 以上的代码是类似于`XML`的标签的`React`组件代码。组件告诉`React`想渲染什么-然后`React`将有效地更新和渲染组件中的数据改变时的正确组件.
- `ShoppingList`是一个**React组件类**, 或**React组件类型**. 一个组件接受参数, 调用`props`, 并返回一个视图的层次结构, 通过该`render`方法显示.
- 该`render`方法返回是组件想渲染的描述, 然后`React`把这个描述渲染到屏幕上。特别是, `render`返回一个**React元素**, 这是一个渲染内容的轻量级描述。 大多数`React`开发人员使用一种称为`JSX`的特殊语法, 这使得编写这些结构变得更加容易。该`<div />`语法在构建时候被转化`React.createElement('div')`。以上的例子相当于:
```react
React.createElement("div", { className: "shopping-list" },
  React.createElement(
    "h1",
    null,
    "Shopping List for ",
    props.name
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "Instagram"
    ),
    React.createElement(
      "li",
      null,
      "WhatsApp"
    ),
    React.createElement(
      "li",
      null,
      "Oculus"
    )
  )
);
```
- `createElement()`:
```react
React.createElement(
	type, 
	[props],
	[...children]
)
```
- 创建并返回给定类型的新`React`元素。类型参数可以是标签名称字符串(如`div`或者`span`), React组件类型(类或者函数)或者React片段类型.
- 用JSX编写的代码将被转换为使用`React.createElement()`。`React.createElement()`如果想要使用的是`JSX`, 则通常不会直接调用。
- 可以将任何`JavaScript`表达式放在`JSX`中的大括号内。每个React元素都是一个真正的`JavaScript`对象, 可以将其存储在变量中或传递给自己的程序。
- `ShoppingList`组件只呈现内置的DOM组件, 但是可以通过编写来轻松定义地撰写自定义的`React`组件`<ShoppingList />`。每个组件都是封装的, 所以它可以独立运行, 所以可以用简单的组件构建复杂的`UI`。

### 开始:
- 以上的`index.js`代码就是**入门代码**.
- 有三个组成部分:
	- `Square`;
	- `Board`;
	- `Game`;
- `Square`组件是渲染一个单元`<button></button>`, `Board`渲染9个方格, `Game`组件渲染一个带有一些占位符的`Board`, 接下来会进行填充.

### 通过道具传递数据:
- Just to get our feet wet, 尝试从`Board`组件传递一些数据到`Square`组件。
- In `Board's` `renderSquare` method, 改变代码传递一个`value`道具的方块:
```react
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```
- 然后改变`Square`的`render`方法来显示该值, 替换`{/* TODO */}`为`{this.props.value}`:
```react
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```
- Before:

![before][2]

- After: 你可以看到每一个在渲染输出中的每个方块中看到一个数字.

![after][3]

------

### 交互式组件:
- 让`Square`组件填充一个`"X"`, 当点击它。尝试更改`render()`方形函数中返回的按钮标记, 如下所示:
```react
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```
- 现在点击`Square`, 可以在浏览器中得到一个警报。
- `onClick={() => alert('click')}`使用的是JavaScript箭头函数语法。正在传递一个函数作为`onClick`道具。`onClick={alert('click')}`会立即发出警报, 而不是点击按钮的时间。
- 首先, 向类中添加一个构造函数来初始化状态:
```react
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```
- 在JavaScript类中, 需要`super()`; 在定义子类的构造函数时显示调用。
- 现在改变`Square render`方法来显示当前状态的值, 并点击切换:
	- 更换`this.props.value`用`this.state.value`的内部`<button></button>`标签。
	- 替换`() => alert()`事件处理程序`() => this.setState({value: 'X'})`。
- 现在`<button></button>`标签看起来像这样:
```react
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}
```
- 无论什么时候`this.setState`被调用, 都会调度组件的更新, 导致`React`在传递的状态更新中合并, 并将组件与其子组件重新组合。当组件重新放置时, `this.state.value`将会`X`在网络中看到一个`X`。
- 如果你点击任何一个方块, 就会出现一个`X`。

### 开发者工具:
- `Chrome`和`Firefox`的`React devtools`扩展允许在浏览器`devtools`中检查`React`组件树。

![devtools][4]

- 这个工具可以检查树中任何组件的道具和状态。
- 安装完成后, 可以右键单击页面上的任何元素, 单击`"Inspect"`打开开发人员工具, `React`选项卡将显示为最后一个选项卡。
- **但是, 请注意, 还有一些额外的步骤来使它与`codePen`一起工作**。
	- 登陆或者注册并确认自己的电子邮件(需要防止垃圾邮件);
	- 点击"叉"按钮;
	- 点击"更改视图", 然后选择"调试模式";
	- 在打开的新选项卡卡中, `devtools`现在应该有一个`React`选项卡。

### 提升状态(`Lifting State Up`):
- 以上代码组建了一个`#`字游戏的基本构建块。但现在, 状态被封装在每个`Square`组件中。
- 为了制作一个完整的游戏, 现在需要检查一个玩家是否赢得了游戏, 并将`x`和`O`交替放置在正方形中。
- 为了检查是否有人获胜, 需要在一个地方获得所有9个方格的值, 而不是分散在方形分量上。
- 你可能会认为`Board`应该询问每个`Square`的当前状态。虽然在技术上可以在`React`中做到这一点, 但它是令人沮丧的, 因为它往往使代码难以理解、更脆弱、更难以重构。
- 相反, 最好的解决方案是将这个`state`存储在`Board`组件中, 而不是在每个`Square`中, `Board`组件可以告诉每个`Square`要显示的内容, 比如我们如何让每个`Square`显示它的索引。
- ** 如果要汇总(aggregate data)来自多个子项的数据或者让两个组件彼此通信, 请将`state`向上移动以使其位于父组件中。 然后, 父组件可以通过道具(via props)将`state`传回给子组件, 这样子组件总是与父组件同步。**
- 当重构`React`组件时, 像这样往上拉状态是很常见的, 所以让我们借此机会尝试一下。将一个构造函数添加到`Board`中, 并将其初始状态设置为包含一个具有9个空值的数组, 对应9个方块:
```react
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```
- 我们稍后会填写, 以便`Board`会看起来更像:
```react
[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]
```
- `Board`的`renderSquare`方法目前看起来像这样:
```react
renderSquare(i) {
	return <Square value={i} />;
}
```
- 修改它将一个`value`道具(prop)传递给`Square`:
```react
renderSquare(i) {
	return <Square value={this.state.squares[i]} />;
}
```
- 现在我们需要改变点击正方形时发生的情况。

  [1]: https://nodejs.org/en/
  [2]: ./images/before.png "before"
  [3]: ./images/after.png "after"
  [4]: ./images/devtools.png "devtools"