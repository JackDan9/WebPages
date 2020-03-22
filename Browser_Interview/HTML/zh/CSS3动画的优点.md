# CSS3动画的优点

## CSS3动画的属性
- CSS3动画的属性总的来说只有transform(变形)、transition(过渡)和animation(动画)这三种。

```
transition:1s(过渡的动画效果)：从一个人具体的值到另一个过渡的值
transform:rotate(300deg) x,y 旋转 transform:rotageX(300deg) transform:rotageY(300deg)
transform:scale(0.5,2) 缩放x轴，y轴 >1放大 <1缩小
transform:translateX(100px)平移x轴 transform:translateY(100px) 平移y轴
transform:translate(100px 100px)	平移x,y轴
transition:rotate(300deg) scale(0.5,2) 一边缩放，一边旋转
transition:transform 1s 指定对transform	起效果
transition:margin 1s 指定对margin	起效果接改变大小和位置，显示改变的结构，没有过渡和形变时间

animation重点是在时间轴和关键帧，是在于创建帧，让不同帧在不同的时间节点发生不同变化，基于animation和@keyframe的动画方面也是为了实现变现与行为的分离。
```

## Example

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="referrer" content="origin" />
    <meta property="og:description" content="CSS3动画的优点" />
    <meta http-equiv="Cache-Control" content="no-transform" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>CSS3动画的优点</title>
    <style type="text/css">
        .a{
            width: 1000px;
            height: 400px;
            background: #bbb;
            position: relative;
            margin: 100px auto;
            overflow: hidden;

        }
        .b{
            font-size: 50px;
            width: 400px;
            height: 150px;
            position: absolute;
            top:-150px;
            left: 50px;
            text-align: center;
            background: #aaa;
            line-height: 150px;
            animation:s 2s infinite;
        }   
        .c{
            font-size: 50px;
            width: 400px;
            height: 150px;
            position: absolute;
            bottom:-150px;
            right: 50px;
            background: #ccc;
            line-height: 150px;
            animation:ss 2s infinite;
        }
        @keyframes ss{
            0%{
                transform:translateY(0px);
                background: #888;
            }
            50%{
                transform:translateY(-90px);
                background: #7dd;
            }
            50%{
                transform:translateY(-150px);
                background: #3aa;
            }
        }
        @keyframes s{
            0%{
                transform:translateY(0px);
                background: #888;
            }
            50%{
                transform:translateY(90px);
                background: #7dd;
            }
            50%{
                transform:translateY(150px);
                background: #3aa;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="a">
            <div class="b">别失眠了！别失眠了！</div>
            <div class="c">别失眠了！别失眠了！</div>
        </div>
    </header>
</body>
</html>
```

------ 

## 优点

- 1. CSS3动画在性能上会稍微好一些，会对CSS3的动画做一些优化(比如专门新建一个图层来跑动画)
- 2. 代码相对简单
- 3. 可以利用硬件加速
- 4. CSS3不占用JS主线浏览器

------

> Thinking in JackDan
