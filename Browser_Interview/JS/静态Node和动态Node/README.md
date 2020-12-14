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



> Thanking in JackDan

> https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList
> https://developer.mozilla.org/zh-CN/docs/Web/API/Node/childNodes
> https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
> https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
> https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement


