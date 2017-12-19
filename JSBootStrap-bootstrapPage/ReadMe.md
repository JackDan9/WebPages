---
title: bootstrapPage
tags: bootstrap, html, css, page
author: jackdan9
---

## styleExplain:
- `html.home.index`: 表示`index.html`独有的样式;
- `html.static.pricing`: 表示`price.html`独有的样式;
- 其余的样式是`Common Style`——公共样式.

------

## slidesExplain:
- js代码:
```js
$(".slider").YuxiSlider({
    width:856, //容器宽度
    height:569, //容器高度
    control:$('.control'), //绑定控制按钮
    during:6000, //间隔4秒自动滑动
    speed:1000, //移动速度0.8秒
    mousewheel:true, //是否开启鼠标滚轮控制
    direkey:true //是否开启左右箭头方向控制
});
```
- html代码:
```html
<li><a href=""><img src="http://fs.jiaoan100.com/FjFTgonDVl8aWlrgloBJNL6XgH1i" alt="自动偏移" /></a></li>
```
- `src`: 图片地址的引入;
- `alt`: 相应图片的文字解释;
- 右下角的红色数字代表第几张图片, 白色数字代表总共的图片数。

------

## mainPageLayout:
- container[`header` + `main` + `footer`];
- css:
    - media screen属性控制响应式;(PC端 + 移动端)

------

## iconfont:
- 引人阿里巴巴的矢量图库;
    - fonts:
        - .eot;
        - .svg;
        - .ttf
        - .woff.

------

## featureMedia:
```
<!--<video loop="" muted="" playsinline="" width="1440" height="900" data-poster="https://s3.amazonaws.com/static.slid.es/site/homepage/v3/homepage-editor-poster.png" poster="https://s3.amazonaws.com/static.slid.es/site/homepage/v3/homepage-editor-poster.png" controls=""><source src="https://s3.amazonaws.com/static.slid.es/site/homepage/v3/homepage-editor-1440x900.mp4" type="video/mp4"></video>-->
<img src="http://fs.jiaoan100.com/mapdata.gif"  width="1440" height="900" />
```
- `video`: 可播放的video文件;
    - video文件最好是为`ogg`, `mp4`和`webm`的视频格式, 并且编码为`h264`, 这样才能兼容所有的浏览器(IE, 360, 搜狗, Firefox, Chrome, etc)。
- `img`: 可使用的image文件;
- 样式中对这两部分都进行了处理.


------

## `header`多个`nav`:
- 一个:
``` html
<ul class="nav nav-long">
    <li class="nav-item" data-page-id="static/pricing">
        <a class="nav-item-anchor" href="../../../testWorkspace/WebPages/bootstrapPage/price.html">
            <span class="nav-item-label">Pricing</span>
        </a>
    </li>
</ul>
```
- 多个:
```
<ul class="nav nav-long">
    <li class="nav-item" data-page-id="static/pricing">
        <a class="nav-item-anchor" href="../../../testWorkspace/WebPages/bootstrapPage/price.html">
            <span class="nav-item-label">Pricing</span>
        </a>
    </li>
    <li class="nav-item" data-page-id="static/pricing">
        <a class="nav-item-anchor" href="../../../testWorkspace/WebPages/bootstrapPage/price.html">
            <span class="nav-item-label">Pricing</span>
        </a>
    </li>
    ...
</ul>
```

------

## Bootstrap的基本知识:
### Bootstrap脚手架:
#### 必须使用`HTML 5`文档类型:
- Bootstrap使用的某些HTML元素和CSS属性需要文档类型为`HTML5 doctype`. 因为这一文档类型必须出现在项目的每个页面的开始部分.
```
<!DOCTYPE html>
<html lang="en">
    ...
</html>
```
#### 排版与链接:
- Bootstrap为**屏幕**、**排版**和**链接**设置了基本的全局样式. 尤其是, 我们:
    - 移除了body的`margin`;
    - 设置了`body`的背景颜色`background: white;`;
    - 使用了`@baseFontFamily`、`@baseFontSize`和`@baseLineHeight`属性作为我们排版的基础;
    - 通过`@linkColor`设置了全局链接颜色，并且, 当链接处于`:hover`状态时才会带有下划线;
- 这些样式当然也是写在Bootstrap的源代码中的`scaffolding.scss`可以找到.
#### 用`Normalize`重置样式:
- 从`Bootstrap 2`开始, 老的重置方式被`Normalize.css`取代, 这是`Nicolas Gallagher`和`Jonathan Neal`共同维护的一个项目, 这一项目还被`HTML5 Boilerplate`所采用. 虽然Bootstrap在`reset.less`文件中使用了许多Normalize的代码, 但是, Bootstrap移除了一些不合适Bootstrap的元素.
#### 默认栅格化系统:
- Bootstrap默认的栅格化系统为`12列`, 形成一个`940px`宽的容器, 默认没有启用`响应式布局特性`. 如果加入响应式布局CSS文件, 栅格系统会自动根据可是窗口的大小从`720px`到`1170px`进行动态调整.在可视窗口低于`767px`宽的情况下, 列将不再固定并且会垂直方向堆叠.
- 基本的流式栅格`HTML`代码片段:
- 将`.row`替换为`.row-fluid`就能让任何一行"流动"起来.应用于每一列的类不用改变, 这样能方便的在流式与固定栅格化之间切换.
```
<div class="row-fluid">
    <div class="span4">...</div>
    <div class="span8">...</div>
</div>
```
#### 响应式设计:

