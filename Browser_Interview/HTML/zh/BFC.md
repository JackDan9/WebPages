# BFC(Block Formatting Context, BFC) --- 块格式化上下文
## 定义
- Block Formatting Context是Web页面的可视CSS渲染的一部分, 是块盒子的布局过程发生的区域, 也是浮动元素与其他元素交互的区域。

## 下列方式会创建块格式化上下文:

- 根元素(`<html>`)
- 浮动元素(元素的`float`不是`none`)
- 绝对定位元素(元素的`position`为`absolute`或者`fixed`)
- 行内块元素(元素的`display`为`inline-block`)
- 表格单元格(元素的`display`为`table-cell`, HTML表格单元格默认为该值)
- 


https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context