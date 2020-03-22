# CSS3新增的属性

------

## CSS3边框:

### `border-radius`
- CSS3圆角边框。在CSS2中添加圆角矩形需要技巧，我们必须为每个圆角使用不同的图片，在CSS3中，创建圆角是非常容得，在CSS3中，border-radius属性用于创建圆角。`border: 2px soild; border-radius: 25px;`

### `box-shadow`
- CSS3边框阴影。在CSS3中，box-shadow用于向方框添加阴影。`box-shadow: 10px 10px 5px #888888;`

### `border-image`
- CSS3边框图片。通过CSS3的`border-image`属性，您可以使用图片来创建边框。`border-image: url(border.png) 30 30 round;`

### Example

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta name="og:description" content="CSS3新特性之CSS3边框-border-radius, box-shadow, border-image" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CSS3边框</title>
    </head>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        html, body {
            padding: 0;
            margin: 0;
        }
        .test-border-radius {
            /* display: block; */
            display: inline-block;
            width: 30px;
            height: 60px;
            border:2px solid;
            border-radius:25px;
            /*
            is equivalent to:
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
            border-bottom-left-radius: 25px; 
             */
             /* border-radius: 25px 20px 15px / 10px 5px; */
             /* 
            is equivalent to:

            border-top-left-radius: 25px 20px;
            border-top-right-radius: 20px 5px;
            border-bottom-right-radius: 15px 10px;
            border-bottom-left-radius: 20px 5px;
              */
        }
        .test-box-shadow {
            width: 40px;
            height: 70px;
            box-shadow: 10px 10px 5px #888888;
            /*
                box-shadow:
                    h-shadow: 必需的。水平阴影的位置。允许负值
                    v-shadow: 必需的。垂直阴影的位置。允许负值
                    blur: 可选。模糊距离
                    spread: 可选。阴影的大小
                    color: 可选。阴影的颜色。
                    inset: 可选。从外层的阴影(开始时)改变阴影内侧阴影
            */
        }
        .test-border-image {
            width: 50px;
            height: 80px;
            border: 2px solid;
            -webkit-border-image: url(https://avatar.csdnimg.cn/5/4/D/2_xxj19950917.jpg) 30 30 round;
            -o-border-image: url(https://avatar.csdnimg.cn/5/4/D/2_xxj19950917.jpg) 30 30 round;
            border-image: url(https://avatar.csdnimg.cn/5/4/D/2_xxj19950917.jpg) 30 30 round;
            /*
            border-image 属性是一个简写属性，用于设置以下属性:
            border-image-source: 用在边框的图片的路径
            border-image-slice: 图片边框向内偏移
            border-image-width: 图片边框的宽度
            border-image-outeset: 边框图像区域超出边框的量
            border-image-repeat: 图像边框是否应该平铺(repeated)、铺满(rounded)或者拉伸(stretched)
            */
        }
    </style>
    <body>
        <span class="test-border-radius"></span>
        <hr />
        <div class="test-box-shadow">
        </div>
        <hr />
        <div class="test-border-image">
        </div>
    </body>
</html>
```

------

## CSS3背景

### `background-size`
- 属性规定背景图片得的尺寸。在CSS3之前，背景图片的尺寸是由图片的实际尺寸决定的。在CSS3中，可以规定背景图片的尺寸，这就允许我们在不同的环境中重复使用背景图片。您能够以像素或者百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度。

### `backgroud-origin`
- 属性规定背景图片的定位区域。背景图片可以放置于context-box、padding-box或者border-box区域。

### Example

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="CSS3新属性之CSS3背景-background-size, background-origin" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CSS3背景</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .test-background-size {
                width: 200px;
                height: 300px;
                background: url(https://avatar.csdnimg.cn/5/4/D/2_xxj19950917.jpg);
                background-size: 100px 200px;
                /* background-size: 100px; */
                /* background-size: 100% 80%; */
                /* background-size: 70%; */
                /* background-size: cover; */
                /* background-size: contain; */
                /*
                    background-size: length|percentage|cover|contain;
                    length: 设置背景图片高度和宽度。如果只给出一个值，第二个是设置为auto(自动)
                    percentage: 将计算想读与背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)"
                    cover: 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。
                    contain: 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。 
                */

                background-repeat: no-repeat;
            }
            .test-background-origin {
                width: 300px;
                height: 400px;
                background-image: url(https://avatar.csdnimg.cn/5/4/D/2_xxj19950917.jpg);
                background-repeat: no-repeat;
                background-position: left;
                background-origin: content-box;
                /* background-origin: padding-box; */
                /* background-origin: border-box; */
                /*
                    background-origin: padding-box|border-box|content-box
                    padding-box: 背景图像填充框的相对位置
                    border-box: 背景图像边界框的相对位置
                    content-box: 背景图像的相对位置的内容框
                */
            }
        </style>
    </head>
    <body>
        <div class="test-background-size">
        </div>
        <hr />
        <div class="test-background-origin"></div>
    </body>
</html>
```

------

## CSS3文字效果

### `text-shadow`
- 在CSS3中，text-shadow可向文本应用阴影。`text-shadow: 5px 5px 5px #FFFFFF`;

### `word-wrap`
- 单词太长的话就可能无法超出某个区域，允许对长单词进行拆分，并换行到下一行: `p {word-wrap: break-word;} `

### Example

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="CSS3属性之CSS3文字效果-text-shadow, word-wrap" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CSS3文字效果</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .test-text-shadow {
                text-shadow: 2px 2px #ff0000;
                /* 
                text-shadow: h-shadow v-shadow blur color:
                h-shadow: 必需。水平阴影的位置。允许负值。
                v-shadow: 必需。垂直阴影的位置。允许负值。
                blur: 可选。模糊的距离。
                color: 可选。阴影的颜色。
                */
            }
            .test-word-wrap {
                word-wrap: break-word;
                /* 
                word-wrap: normal|break-word;
                normal: 只在允许的断字点换行(浏览器保持默认处理)
                break-word: 在长单词或者URL地址内部进行换行
                */
            }
        </style>
    </head>
    <body>
        <h1 class="test-text-shadow">单军军</h1>
        <hr />
        <p class="test-word-wrap">单军军热爱前端！</p>
    </body>
</html>
```

------

## CSS3 2D转换

### `transform`
- 通过CSS3转换，我们能够对元素进行移动、缩放、转动、拉长或者拉伸。

- `translate()`: 元素从其当前位置移动，根据给定的left(x坐标)和top(y坐标) 位置参数： `transform: translate(50px, 100px)`; 值`translate(50px, 100px)`把元素从左侧移动50像素，从顶端移动100像素。
- `rotate()`: 元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。`transform:rotate(30deg);` 值rotate(30deg)把元素顺时针旋转30度。
- `scale()`: 元素的尺寸会增加或者减少，根据给定的宽度(X轴)和宽度(Y轴)参数: `transform:scale(2, 4);` 值scale(2, 4)把宽度转换为原始尺寸的2倍，把高度转换为原始高度的4倍。
- `skew()`: 元素转动给定的角度，根据给定的水平线(X 轴)和垂直线(Y 轴)参数: `transform:skew(30deg, 20deg);`值skew(30deg, 20deg)围绕X轴把元素转动30度，围绕Y轴转动20度。
- `matrix()`:
    - matrix()方法把所有2D转换方法组合在一起。
    - matrix()方法需要六个参数，包含数学函数，允许您: 旋转、缩放、移动以及倾斜元素。

### Example

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="CSS3属性之CSS3 2D转换-transform" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CSS3 2D转换</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .test-transform {
                transform:rotate(7deg);
                -ms-transform:rotate(7deg);
                -webkit-transform:rotate(7deg);
                /* 
                transform: none|transform-functions;
                none:定义不进行转换
                matrix(n,n,n,n,n,n):定义2D转换，使用六个值得矩阵。
                matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n): 定义3D转换，使用16个值得4x4矩阵。
                translate(x,y): 定义2D转换
                translate3d(x,y,z): 定义3D转换
                translateX(x): 定义转换，只用X轴得值
                translateY(y): 定义转换，只是用 Y 轴的值
                translateZ(z): 定义 3D 转换，只是用 Z 轴的值
                scale(x[,y]?): 定义2D缩放转换
                scale3d(x,y,z): 定义3D缩放转换
                scaleX(x): 通过设置 X 轴的值来定义缩放转换
                scaleY(y): 通过设置 Y 轴的值来定义缩放转换
                scaleZ(z): 通过设置 Z 轴的值来定义 3D 缩放转换
                rotate(angle): 定义 2D 旋转，在参数中规定角度
                rotate3d(x,y,z,angle): 定义 3D 旋转
                rotateX(angle): 定义沿着 X 轴的 3D 旋转
                rotateY(angle): 定义沿着 Y 轴的 3D 旋转
                rotateZ(angle): 定义沿着 Z 轴的 3D 旋转
                skew(x-angle,y-angle): 定义沿着 X 和 Y 轴的 2D 倾斜转换
                skewX(angle): 定义沿着 X 轴的 2D 倾斜转换
                skewY(angle): 定义沿着 Y 轴的 2D 倾斜转换
                perspective(n): 为 3D 转换元素定义透视视图
                */
            }
        </style>
    </head>
    <body>
        <div class="test-tranform"></div>
    </body>
</html>
```

------

## CSS3 3D转换:

### `rotateX()`
- 元素围绕其X轴以给定得度数进行旋转。`transform: rotateX(120);`

### `rotateY()`
- 元素围绕其Y轴以给定得度数进行旋转。`transform: rotateY(120deg);`

### Example

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="CSS3属性之CSS3 2D转换-transform" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CSS3 2D转换</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .test-transform {
                transform:rotate(7deg);
                -ms-transform:rotate(7deg);
                -webkit-transform:rotate(7deg);
                /* 
                transform: none|transform-functions;
                none:定义不进行转换
                matrix(n,n,n,n,n,n):定义2D转换，使用六个值得矩阵。
                matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n): 定义3D转换，使用16个值得4x4矩阵。
                translate(x,y): 定义2D转换
                translate3d(x,y,z): 定义3D转换
                translateX(x): 定义转换，只用X轴得值
                translateY(y): 定义转换，只是用 Y 轴的值
                translateZ(z): 定义 3D 转换，只是用 Z 轴的值
                scale(x[,y]?): 定义2D缩放转换
                scale3d(x,y,z): 定义3D缩放转换
                scaleX(x): 通过设置 X 轴的值来定义缩放转换
                scaleY(y): 通过设置 Y 轴的值来定义缩放转换
                scaleZ(z): 通过设置 Z 轴的值来定义 3D 缩放转换
                rotate(angle): 定义 2D 旋转，在参数中规定角度
                rotate3d(x,y,z,angle): 定义 3D 旋转
                rotateX(angle): 定义沿着 X 轴的 3D 旋转
                rotateY(angle): 定义沿着 Y 轴的 3D 旋转
                rotateZ(angle): 定义沿着 Z 轴的 3D 旋转
                skew(x-angle,y-angle): 定义沿着 X 和 Y 轴的 2D 倾斜转换
                skewX(angle): 定义沿着 X 轴的 2D 倾斜转换
                skewY(angle): 定义沿着 Y 轴的 2D 倾斜转换
                perspective(n): 为 3D 转换元素定义透视视图
                */
            }
        </style>
    </head>
    <body>
        <div class="test-tranform"></div>
    </body>
</html>
```

------

## CSS3过渡

- 当元素从一种样式变换为另一种样式时为元素添加效果。

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="CSS3属性之CSS3 2D转换-transform" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CSS3 2D转换</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .test-transition {
                width: 200px;
                height: 200px;
                background-color: #f00;
                transition: all 2s;
                /*
                transition: 简写属性, 用于在一个属性中设置四个过渡属性
                transition-property: 规定应用过渡的 CSS 属性的名称
                transition-duration: 定义过渡效果花费的时间。默认是 0。
                transition-timing-function: 规定过渡效果的时间曲线。默认是 "ease"。
                transition-delay: 规定过渡效果何时开始。默认是 0。
                */
            }
            .test-transition:hover {
                background-color: #00f;
                transform: translateX(500px) translateY(500px) scale(0.8) rotate(360deg);
            }
        </style>
    </head>
    <body>
        <div class="test-transition"></div>
    </body>
</html>
```

------

## CSS3动画

- 通过CSS3, 我们能够创建动画，这可以在许多网页中取代动画图片、Flash动画以及JavaScript。

### Example

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta perproty="og:description" content="CSS属性之CSS3动画" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CSS3 动画/title>
        <style>
            .test-animation {
                width: 300px;
                height: 300px;
                background: red;
                animation: mygirl 5s;
                -moz-animation:myfirst 5s; /* Firefox */
                -webkit-animation:myfirst 5s; /* Safari and Chrome */
                -o-animation:myfirst 5s; /* Opera */
                /* 
                animation: name duration timing-function delay iteration-count direction;
                animation-name: 规定需要绑定到选择器的keyframe名称。
                animation-duration: 规定完成动画所花费的时间，以秒或者毫秒计算。
                animation-timing-function: 规定动画的速度曲线。
                animation-delay: 规定动画开始之前的延迟。
                animation-iteration-count: 规定动画应该播放的次数。
                animation-direction: 规定是否应该轮流反向播放动画。
                */
            }
            @keyframes myfirst
            {
                from {
                    background:red;
                }
                to {
                    background:yellow;
                }
            }

            @-moz-keyframes myfirst /* Firefox */
            {
                from {
                    background:red;
                }
                to {
                    background:yellow;
                }
            }

            @-webkit-keyframes myfirst /* Safari and Chrome */
            {
                from {
                    background:red;
                }
                to {
                    background:yellow;
                }
            }

            @-o-keyframes myfirst /* Opera */
            {
                from {
                    background:red;
                }
                to {
                    background:yellow;
                }
            }
            /* IE浏览器不支持 */
        </style>
    </head>
    <body>
        <div class="test-animation">
        </div>
    </body>
</html>
```

------

## CSS3多列

### `column-count`
- 属性规定元素应该被分隔的列数。

### `column-fill`
- 属性指定如何填充列

### `column-gap`
- 属性规定列之间的间隔

### `column-rule`
- 属性设置列之间的宽度、样式和颜色规则。

### `column-rule-color`
- 属性指定两列间边框的颜色

### `column-rule-style`
- 属性指定两列间边框的样式

### `column-rule-width`
- 属性指定两列间边框的厚度

### `column-span`
- 属性指定元素要跨越多少列

### `column-width`
- 属性追定列的宽度

### `columns`
- 属性设置column-width和column-count的简写

### Example

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="CSS3属性之CSS3多列" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CSS3属性之CSS3多列</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .test-column {
                -moz-column-count: 5; /* Firefox */
                -webkit-column-count: 5; /* Safari and Chrome */
                column-count: 5;
                
                -moz-column-gap: 40px; /* Firefox */
                -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
                column-gap: 40px;

                -moz-column-rule-style: solid; /* Firefox */
                -webkit-column-rule-style: solid; /* Chrome, Safari, Opera */
                column-rule-style: solid;

                -moz-column-rule-width: 1px; /* Firefox */
                -webkit-column-rule-width: 1px; /* Chrome, Safari, Opera */
                column-rule-width: 1px;

                -moz-column-rule-color: lightblue; /* Firefox */
                -webkit-column-rule-color: lightblue; /* Chrome, Safari, Opera */
                column-rule-color: lightblue;

                -moz-column-rule: 1px solid lightblue; /* Firefox */
                -webkit-column-rule: 1px solid lightblue; /* Chrome, Safari, Opera */
                column-rule: 1px solid lightblue;

                column-width: 100px;
                -moz-column-width: 100px; /* Firefox */
                -webkit-column-width: 100px; /* Safari and Chrome */
            }
            .test-column-span {
                column-count: 3;
                -moz-column-count: 3; /* Firefox */
                -webkit-column-count: 3; /* Safari and Chrome */
            }
            .test-column-span h2 {
                column-span: all;
                -webkit-column-span: all; /* Safari and Chrome */
            }
        </style>
    </head>
    <body>
        <p><b>注意:</b> Internet Explorer 9及更早 IE 版本浏览器不支持 column-count 属性。</p>

        <div class="test-column">
        “当我年轻的时候，我梦想改变这个世界；当我成熟以后，我发现我不能够改变这个世界，我将目光缩短了些，决定只改变我的国家；当我进入暮年以后，我发现我不能够改变我们的国家，我的最后愿望仅仅是改变一下我的家庭，但是，这也不可能。当我现在躺在床上，行将就木时，我突然意识到：如果一开始我仅仅去改变我自己，然后，我可能改变我的家庭；在家人的帮助和鼓励下，我可能为国家做一些事情；然后，谁知道呢?我甚至可能改变这个世界。”
        </div>

        <div class="test-column-span">
        <h2>英国维斯米斯特教堂碑文</h2>
        当我年轻的时候，我梦想改变这个世界；当我成熟以后，我发现我不能够改变这个世界，我将目光缩短了些，决定只改变我的国家；当我进入暮年以后，我发现我不能够改变我们的国家，我的最后愿望仅仅是改变一下我的家庭，但是，这也不可能。当我现在躺在床上，行将就木时，我突然意识到：如果一开始我仅仅去改变我自己，然后，我可能改变我的家庭；在家人的帮助和鼓励下，我可能为国家做一些事情；然后，谁知道呢?我甚至可能改变这个世界。
        </div>
    </body>
</html>
```

------

## CSS3用户界面

### `resize`
- 属性规定是否可由用户调整元素尺寸。

### `box-sizing`
- 属性允许您以确切的方式定义适应某个区域的具体内容。

### `outline-offset`
- 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

### Example

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="CSS3属性之CSS3用户界面" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>CSS3用户界面</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .test-user-interface {
                border: 2px solid;
                padding: 10px 40px;
                width: 400px;
                resize: both;
                overflow: auto;
            }
            div.test-user-interface-container {
                width: 40em;
                border: 1em soild;
            }
            div.box {
                box-sizing: border-box;
                -moz-box-sizing: border-box; /* Firefox */
                width: 50%;
                border: 1em soild red;
                float: left;
            }
            div.test-user-interface-1 {
                margin: 20px;
                width: 200px;
                padding: 10px;
                height: 100px;
                border: 2px solid black;
                outline: 2px solid red;
                outline-offset: 15px;
            }
            /*
                appearance: 允许您使一个元素的外观像一个标准的用户界面元素
                icon: 为创作者提供了将元素设置为图标等价物的能力。
                nav-down: 指定在何处使用箭头向下导航键时进行导航
                nav-index: 指定一个元素的Tab的顺序
                nav-left: 指定在何处使用左侧的箭头导航键进行导航
                nav-right: 指定在何处使用右侧的箭头导航键进行导航
                nav-up: 指定在何处使用箭头向上导航键时进行导航
            */
        </style>
    </head>
    <body>
        <p><b>注意:</b> Firefox, Safari,和 Chrome 兼容 resize 属性.</p>
        <div class="test-user-interface">
            调整属性指定一个元素是否由用户可调整大小的。
        </div>

        <hr/>

        <div class="test-user-interface-container">
            <div class="box">这个div占据了左边的一半。</div>
            <div class="box">这个div占据了右边的一半。</div>
        </div>

        <hr />

        <p><b>注意:</b> Internet Explorer 不兼容 outline-offset属性.</p>
        <div class="test-user-interface-1"></div>
    <body>
</html>
```

------

> Thinking in JackDan9
