# ClickMouseGetPosition
- 点击鼠标或者当前位置

```javascript

HTMLElement.offsetLeft是一个只读属性, 返回当前元素左上角相当于HTMLElement.offsetParent节点的左边界偏移的像素值。
对块级元素来说, offsetTop、offsetLeft、offsetWidth以及offsetHeight描述了元素相对于offsetParent的边界框。
然而，对于可被截断到下一行的行内元素(如span), offsetTop和offsetLeft描述的是第一个边界框的位置(使用Element.getClientRects()来获取其宽度和高度), 而offsetWidth和offsetHeight描述的是边界框的尺寸(使用Element.getBoundingClientReact来获取其位置)。
因此, 使用offsetLeft、offsetTop、offsetWidth、offsetHeight来对应left、top、width和height的一个盒子将不会是文本容器span的盒子边界

HTMLElement.offsetTop为只读属性, 它返回当前元素相对于其offsetParent元素的顶部内边距的距离。

HTMLElement.offsetParent是一个只读属性, 返回一个指向最近的(指包含层级上的最近)包含该元素的定位元素或者最近的`table`,`td`,`th`,`body`元素。当元素的`style.display`设置为`"none"`时, offsetParent返回null。
offsetParent很有用, 因为offsetTop和offsetLeft都是相当于其内边距边界的。 

HTMLElement.offsetWidth是一个只读属性, 返回一个元素的布局宽度。
一个典型的(各个浏览器的offsetWidth可能有所不同)offsetWidth是测量包含元素的边框(border), 水平线上的内边距(padding), 竖直方向滚动条(scrollbar)(如果存在的话), 以及CSS设置的宽度(width)的值。
```

> https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetLeft