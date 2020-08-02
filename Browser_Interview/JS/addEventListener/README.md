# addEventListener

## 定义
- `EventTarget.addEventListener()`方法将指定的监听器注册到`EventTarget`上, 当该对象触发指定的事件时, 指定的回调函数就会被执行。事件目标可以是一个文档上的元素`Element`, `Document`和`Window`或者任何其他支持事件的对象(比如XMLHttpRequest)。

## 工作原理
- `addEventListener()`的工作原理是将实现`EventListener`的函数或者对象添加到调用它的`EventTarget`上的指定事件类型的事件监听器列表中。

## 语法

``` javascript
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
target.addEventListener(type, listener, useCapture, wantsUntrusted); // Gecko/Mozilla only
```

------

## 参数

### type
- 表示监听事件类型的字符串.

### listener
- 当所监听的事件类型触发时, 会接收到一个事件通知(实现了`Event`接口的对象)对象。`listener`必须是一个实现了`EventListener`接口的对象, 或者是一个函数。

### options --- 可选
- 一个指定有关`listener`属性的可选参数对象。可用的选项如下:
  - `capture`: `Boolean`, 表示`listener`会在该类型的事件捕获阶段传播该`EventTarget`时触发。
  - `once`: `Boolean`, 表示`listener`在添加之后最多只调用一次。如果时true, `listener`会在其被调用之后自动移除。
  - `passive`: `Boolean`, 设置为`true`时, 表示`listener`永远不会调用`preventDefault()`。如果`listener`任然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
  - `mozSystemGroup`: 只能在XBL或者是Firefox Chrome 使用, 这是哥`Boolean`, 表示`listener`被添加到`system group`。

### useCapture --- 可选
- `Boolean`, 在DOM树中, 注册了listener的元素, 是否要先于它下面的EventTarget, 调用该listener。当useCapture(设为true)时, 沿着DOM树向上冒泡的事件，不会触发listerner。当一个元素嵌套了另一个元素, 并且两个元素都对同一事件注册了一个处理函数时, 所发生的事件冒泡和事件捕获是两种不同的事件传播方式。事件传播模式决定了元素以哪个顺序接收事件。如果没有指定, useCapture默认为false。

> 注意: 对于事件目标上的事件监听器来说, 事件会处于"目标阶段", 而不是冒泡阶段或者捕获阶段。在目标阶段的事件会触发该元素(即事件目标)上的所有监听器, 而不在乎这个监听器到底在注册时`useCapture`参数值`true`还是`false`。

> 注意: `useCapture`仅仅咋子现代浏览器最近的几个版本中是可选的。例如Firefox 6以前的版本都不是可选的。为了能够提供更广泛的支持, 你应该提供这个参数。

### wantsUntrusted
- 如果为`true`, 则事件处理程序会接收网页自定义的事件。此参数只适用于Gecko(Chrome的默认值为true, 其他常规网页的默认值为false), 主要用于附加组件的代码和浏览器本身。

------

## 返回值

``` javascript
undefined
```

## 用法说明

### 事件监听回调
- 事件监听器可以被指定为回调函数或者实现`EvenetListener`的对象，其`handleEvent()`方法用作回调函数。
- 回调函数本身具有与`handleEvent()`方法相同的参数和返回值; 也就是说, 回调接受一个参数: 一个基于`Event`的对象, 描述已发生的事件, 并且它不返回任何内容。
- 例如, 一个可用于处理`fullscreenchange`和`fullscreenerror`的事件处理函数可以像这样:

``` javascript
function eventHandler(event) {
  if (event.type == fullscreenchange) {
    /* handle a full screen toggle */
  } else {
    /* handle a full screen toggle error */
  }
}
```

### option支持的安全检测
- 在旧版本的DOM的规定中, `addEventListener()`的第三个参数是一个布尔值表示是否在捕获阶段调用事件处理程序。随着时间的推移, 很明显需要更多的选项。与其在方法之中添加更多参数(传递可选值将会变得异常复杂), 倒不如把第三个参数改为一个包含了各种属性的对象, 这些属性的值用来被配置删除事件侦听器的过程。
- 因为旧版本的浏览器(以及一些相对不算古老的)仍然假定第三个参数是布尔值, 你需要编写一些代码来有效地处理这种情况。你可以对每一个你感兴趣的options值进行特性检测。
- 如果你想检测`passive`值可以参考下面这个例子:

``` javascript
var passiveSupported = false;

try {
  var options = Object.defineProperty({}, "passive", {
    get: function () {
      passiveSupported = true;
    }
  });

  window.addEventListener("test", null, options);
} catch(err) {}
```

- 这段代码为`passive`属性创建了一个带有`getter`函数的`options`对象; `getter`设定了一个标识, `passiveSupported`, 被调用后就会把其设为`true`。那意味着如果浏览器检查`options`对象上的`passive`值时, `passiveSupported`将会被设置为`true`;否则它将保持false。然后我们调用`addEventListener()`去设置一个指定这些选项的空事件处理器, 这样如果浏览器将第三个参数认定为对象的话, 这些选项值就会被检查。

- 你可以利用这个方法检查options之中任一个值。只需使用与上面类似的代码，为选项设定一个`getter`。
- 然后, 当你想实际创建一个是否支持options的事件侦听器时, 你可以这样做:

``` javascript
someElement.addEventListener("mouseup", handleMouseUp, passiveSupported ? { passive: true } : false);
```

- 我们在someElement这里添加了一个`mouseup`。对于第三个参数, 如果`passiveSupported`是`true`, 我们传递了一个`passive`值为`true`的`options`对象; 如果相反的话, 我们知道要传递一个布尔值, 于是就传递`false`作为`useCapture`的参数。

- 如果你愿意, 你可以用一个类似[Modernizr][1]`https://modernizr.com/docs`或者[Detect It][2]`https://github.com/rafgraph/detect-it`的第三方库来帮助你做这项测试。

## Example
### 添加一个简单的监听器
- 下面这个例子用来展示如何使用`addEventListener()`监听鼠标点击一个元素。

``` html
<table>
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

``` javascript
// 改变t2的函数

function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// 为table添加事件监听器
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);
```

- 在上个例子中, `modifyText()`是一个`click`事件的监听器, 通过使用`addEventListener()`注册到`table`对象上。在表格中任何位置单击都会触发事件并执行`modifyText()`。

- 结果:

``` javascript
one
two
```


### 带有匿名函数的监听器

- 现在我们来看看如何使用匿名函数来为事件监听器进行传参。

``` html
<table>
  <tr>
    <td id="t1">one</td>
  </tr>
  <tr>
    <td id="t2">two</td>
  </tr>
</table>
```

``` javascript
// 改变t2值的函数
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;    
}
 
// 为table对象添加事件监听器
var el = document.getElementById("outside");
el.addEventListener("click", function(){modifyText("four")}, false);
```

> 了解更多可以查看

> Thinking in JackDan

> https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener