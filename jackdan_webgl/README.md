# Webgl

## Canvas

- Canvas是需要自己画点的白板;
- Canvas适用于位图, 高数据量高绘制频率(帧率)的场景, 如动画、游戏;
- Canvas是HTML5新增的一个元素对象, 名副其实就是一个画布, 浏览器js配有相应的操作API, 可以不再依赖其他的API或者组件而直接绘图, 相当于2D的API。

## SVG

- SVG是给数据就可以绘制点、线、图形的, 基于XML的标记语言;
- SVG适用于矢量图, 低数据量低绘制率的场景, 如图形、图表;
- SVG只是一种矢量图形文件格式, 不仅现在的浏览器都支持, 很多主流的系统也都支持。

## Webgl

- WebGL是基于Canvas的3D框架
- WebGL主要用来做3D展示、动画、游戏
- WebGL是以OpenGL ES 2.0 为基础的一套 浏览器3D图形API(HTML5), 在编程概念上与OpenGL ES 2.0 几乎是完全通用的, 同样采用可编程渲染管线, 也就是每个顶点的处理受到一小段Vertex Shader代码的控制, 每个像素的绘制过程

> https://www.khronos.org/registry/webgl/specs/latest/2.0/#1