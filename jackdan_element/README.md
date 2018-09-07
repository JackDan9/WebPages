# jackdan_element
- Dynamically add and remove HTML elements

------

## Description

### Function-append
- `append()`方法在被选元素的结尾（仍然在内部）插入指定内容。
``` javascript
$(selector).append(content)
# content	必需。规定要插入的内容（可包含 HTML 标签）。

# 使用函数来附加内容
# 使用函数在指定元素的结尾插入内容
$(selector).append(function(index,html))
## function(index,html) 必需。规定返回待插入内容的函数。
## index - 可选。接收选择器的 index 位置。
## html - 可选。接收选择器的当前 HTML。
```

### Function-unbind
- `unbind()`方法移除被选元素的事件处理程序。
- 该方法能够移除所有的或被选的事件处理程序，或者当事件发生时终止指定函数的运行。
- 该方法也可以通过`event`对象取消绑定的事件处理程序。该方法也用于对自身内部的事件取消绑定(比如当事件已被触发一定次数之后，删除事件处理程序)。
> 注意：如果未规定参数，则`unbind()`方法会删除指定元素的所有事件处理程序。
> 注意：`unbind()`方法适用于任意由jQuery添加的事件处理程序。
```
$(selector).unbind(event,function,eventObj)

# event 可选。规定一个或多个要从元素上移除的事件。
        由空格分隔多个事件值。
        如果只规定了该参数，则会删除绑定到指定事件的所有函数。 
# function  可选。规定从元素上指定事件取消绑定的函数名称。
# eventObj  可选。规定要使用的移除的 event 对象。这个 eventObj 参数来自事件绑定函数。
```

------

## Thanks
- If you like it, please give me a **star**!
- This will support me to keep updating!