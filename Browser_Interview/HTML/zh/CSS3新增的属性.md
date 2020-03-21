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

```