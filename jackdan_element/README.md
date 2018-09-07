# jackdan_element
- Dynamically add and remove HTML elements

------

## Description

### Function-append
- `append()`方法在被选元素的结尾（仍然在内部）插入指定内容。
``` javascript
$(selector).append(content)
// content	必需。规定要插入的内容（可包含 HTML 标签）。
```
> 使用函数来附加内容
> 使用函数在指定元素的结尾插入内容
> $(selector).append(function(index,html))
> function(index,html) 必需。规定返回待插入内容的函数。
> index - 可选。接收选择器的 index 位置。
> html - 可选。接收选择器的当前 HTML。

