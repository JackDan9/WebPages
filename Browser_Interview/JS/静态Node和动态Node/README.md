# 静态Node(静态集合)和动态Node(动态集合)

## NodeList

- NodeList对象是节点的集合, 通常是由属性, 如`Node.childNodes`和`方法`, 如`document.querySelectorAll`返回的。

> NodeList不是一个数组, 是一个类似数组的对象(Like Array Object)。虽然NodeList不是一个数组, 但是可以使用`forEach()`来迭代。你还可以使用`Array.from()`或者`Array.prototype.slice.call()` 将其转换为数组。
> 不过, 有些浏览器较为过时, 没有实现`NodeList.forEach()`和`Array.from`。你可以用`Array.prototype.forEach()`来规避这一问题。请查看下面实例。


- 再一些情况下, `NodeList`是一个**实时集合**, 也就是说, **如果文档中的节点树发生变化, NodeList也会随之发生变化**。例如, Node.childNodes是实时的:

```javascript
var parent = document.getElementById('parent');
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // 我们假设结果会是"2"
parent.appendChild(document.createElemnt('div'));
console.log(child_nodes.length); // 但此时的输出是"3"
```

- 在其他情况下, `NodeList`是一个静态集合, 也就意味着**随后对文档对象模型的任何改动都不会影响集合的内容**。比如`document.querySelectorAll`就会返回一个静态`NodeList`。

- 最好牢记这种不同, 尤其是在当你选择`NodeList`中**所有项遍历的方式**, 或者**缓存它的长度的时候**。

### NodeList属性
- `NodeList.length`: `NodeList`中包含的节点个数。

### NodeList方法
- `NodeList.item()`: 返回`NodeList`对象中指定索引的节点, 如果索引越界, 则返回`null`。等价的写法是`nodeList[i]`, 不过, 在这种情况下, 越界访问将返回`undefined`。

- `NodeList.entries()`: 返回一个迭代器(`iterator`), 允许代码遍历集合中包含的所有"键/值"对。(在这种情况下, 键是从0开始的数字, 而值是节点。) Returns an `iterator`(迭代器), allowing code to go through all `key/value` pairs contained in the collection. (In this case, the keys are numbers starting from 0 and the values are nodes.)。

- `NodeList.forEach()`: 每个NodeList元素执行一次"提供的功能", 并将该元素作为参数传递给函数。Executes a `provided function once` per `NodeList` element, passing the element as an argument to the function。

- `NodeList.keys()`: 返回一个迭代器(`iterator`), 允许代码遍历集合中包含的所有"键/值"对。(在这种情况下, 键是从0开始的数字) Returns an `iterator`(迭代器), allowing code to go through all the keys of the `key/value` pairs contained in the collection. (In this case, the keys are numbers starting from 0)。

- `NodeList.values()`: 返回一个迭代器(`iterator`), 允许代码遍历集合中包含的"键/值"对的所有值(节点)。Returns an `iterator`(迭代器), allowing code to go through all values (nodes) of the `key/value` pairs contained in the collection。

### 例子:
- 可以使用`for`循环遍历一个`NodeList`对象中的所有的节点:
```javascript
for (var i = 0; i < myNodeList.length; ++i) {
  var item = myNodeList[i]; // 调用 myNodeList.item[i]是没有必要的
}
```

#### 不要使用`for...in`或者`for each...in`

- **不要尝试使用`for...in`或者`for each...in`来遍历一个NodeList对象中的元素**, 因为, 如果你把上述两个属性也看成`element`对象的话, `NodeList`对象中的`length`和`item`属性也会被遍历出来, 这可能会导致你的脚本`<script></script>`运行出错。此外, `for...in`不能保证访问这些属性的顺序。

#### ES6 `for...of`

- `for..of`循环将会正确的遍历`NodeList`对象:

> 更多信息欢迎查看 [ES6 for..of]

```javascript
var list = document.querySelectorAll('');
for(var checkbox of list) {
  checkbox.checked = true;
}
```
- 最近, 浏览器也支持一些遍历方法, 比如`forEach()`与`entries()`、`values()`、和`keys()`。
- 也有一种使用数组Array的`Array.prototype.forEach`来遍历NodeList的方法, 这种方法兼容Internet Explorer:

```javascript
var list = document.querySelectorAll('input[type=checkbox]');
Array.prototype.forEach.call(list, function(checkbox) {
  checkbox.checked = true;
});
```

## 为什么`NodeList`不是数组?
- `NodeList`对象在某些方面和数组非常相似, 看上去可以直接使用从`Array.prototype`上继承的方法。然而, 除了`forEach`方法, `NodeList`没有这些类似数组的方法。

- JavaScript的继承机制是基于原型的。数组元素之所以有一些数组方法(比如`forEach`和`map`), 是因为它的原型链上有这些方法, 如下:
- `myArray --> Array.prototype --> Object.prototype --> null`(想要获取一个对象的原型链, 可以连续地调用`Object.getPrototypeOf`, 直到原型链尽头)。
- `forEach`, `map`这些方法其实是`Array.prototype`这个对象的方法。

- 和数组不一样的是, `NodeList`的原型链是这样的:
- `myNodeList --> NodeList.prototype --> Object.prototype --> null`

- `NodeList`的原型上除了类似数组的`forEach`方法之外, 还有`item`,`entries`,`keys`和`values`方法。

## 如果想要NodeList具备数组的方法怎么办了？

- 一个解决办法就是把`Array.prototype`上的方法添加到`NodeList.prototype`上。可是，要注意[扩展DOM对象的原型是非常危险](http://perfectionkills.com/whats-wrong-with-extending-the-dom/)的, 尤其是在旧版本的Internet Explorer(6, 7, 8)中。

```javascript
var arrayMethods = Object.getOwnPropertyNames(Array.prototype);

arrayMethods.forEach(attachArrayMethodsToNodeList);

function attachArrayMethodsToNodeList(methodName)
{
  if(methodName !== "length") {
    NodeList.prototype[methodName] = Array.prototype[methodName];
  }
};

var divs = document.getElementsByTagName('div');
var firstDiv = divs[0];

firstDiv.childNodes.forEach(function (divChild) {
  divChild.parentNode.style.color = '#0F0';
});
```

- 不扩展DOM对象原型的解决方法:
```javascript
var forEach = Array.prototype.forEach;

var divs = document.getElementsByTagName('div');
var firstDiv = divs[0];

forEach.call(firstDiv.childNodes, function(divChild) {
  divChild.parentNode.style.color = '#F0';
});
```

> 请注意, 在上面的代码中, 将某个宿主对象(如`NodeList`)作为`this`传递给原生方法(如forEach)不能保证在所有浏览器中工作, 已知在一些浏览器中会失败。

------

## 概述
- `Node.childNodes`返回包含指定节点的子节点的集合, 该集合为即时更新的集合(live collection)。

## 语法

```javascript
var ndList = elementNodeReference.childNodes;
```

- `ndList`变量为`NodeList`类型, 且为只读。

## 例子

```javascript
// parg 是一个到<p>元素的引用
if (parg.hasChildNodes())
// 首先我们检查它是否包含子节点
{
  var children = parg.childNodes;
  for (var i = 0; i < children.length; i++)
  {
    // children[i]就是遍历到的每个子节点;
    // 注意: 该NodeList对象为LIVE类型的NodeList, 添加或者删除子节点都会实时的改变整个NodeList对象。
  }
}
```

```javascript
// 下面的方法可以删除节点box的所有子节点
while (box.firstChild) 
{
  // box为LIVE类型的NodeList, 所以firstChild属性每次会指向不同的子节点
  box.removeChild(box.firstChild);
}
```

## 备注
- 集合的元素是**一个节点**而不是字符串。要从集合的元素获取数据, 你必须使用它们的属性(例如: 用`elementNodeReference.childNodes[1].nodeName`获取它们的名称, 等等)。

- `document`节点(文档节点)包含两个子节点: Doctype声明和根节点。根节点通常为`documentElement`引用, 且在(X)HTML文档中为HTML元素。

------

## appendChild
- `Node.appendChild()`方法将**一个节点附加到指定父节点的子节点列表的末尾处**。如果将被插入的节点已经存在于当前文档的文档树中, 那么`appendChild()`只会将它从原先的位置移动到新的位置(不需要事先移除要移动的节点)。

- 这意味着, **一个节点不可能同时出现在文档的不同位置**。所以, 如果某个节点已经拥有父节点, 在被传递给此方法后, 它首先会被移除, 再被插入到新的位置。若要保留已在文档中的节点, 可以先使用`Node.cloneNode()`方法来为它创建一个副本, 再将副本附加到目标父节点下。请注意, 用cloneNode制作的副本不会自动保持同步。

- 如果给定的子节点是`DocumentFragment`, 那么`DocumentFragment`的全部内容将转移到指定父节点的子节点列表中。

> 有更加新的API可供使用!
> [ParentNode.append()](https://developer.mozilla.org/zh-CN/docs/Web/API/ParentNode/append)方法支持多个参数, 接受字符串作为参数, 会将字符串转换为文本节点再附加。

## 语法

```javascript
element.appendChild(aChild)
```

## 参数
- `aChild`
- 要追加给父节点(通常为一个元素)的节点。

## 返回值
- 返回追加后的子节点(`aChild`), 除非`aChild`是一个文档片段(`DocumentFragment`), 这种情况下将返回空文档片段(`DocumentFragment`)。

## 附注
- 如果你需要保留这个子节点再原先位置的显示, 则你需要先用`Node.cloneNode`方法复制出一个节点的副本, 然后再插入到新位置。
- 这个方法只能将某个子节点插入到同一个文档的其他位置, 如果你想跨文档插入, 你需要先调用`document.importNode`方法。

## 备注
- 由于`appendChild()`返回的是被附加的子元素, 所以链式调用可能无法按照你的预期去执行:
```javascript
let aBlock = document.createElement('block').appendChild(document.createElement('b'));
```
- (上述代码)只会将`aBlock`设置为`<b></b>`, 这可能不是你所想要的。

## 示例

```javascript
// 创建一个新的段落元素<p>, 然后添加到<body>的最尾部
var p = document.createElement("p");
document.body.appendChild(p);
```

------

> Thanking in JackDan

> https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList
> https://developer.mozilla.org/zh-CN/docs/Web/API/Node/childNodes
> https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
> https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
> https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement


