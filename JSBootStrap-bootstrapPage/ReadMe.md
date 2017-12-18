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

