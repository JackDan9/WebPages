# debounce-防抖

- 防抖和节流严格算起来应该属于性能优化得知识, 但实际上遇到得频率相当高, 处理不当或者放任不管就容易引起浏览器卡死。所以还是很有必要早点掌握。

## 场景-Example(从滚动条监听得例子说起)
- 这个按钮只会在滚动到距离顶部一定位置之后才出现, 那么我们现在抽象除这个功能需求--监听浏览器滚动事件, 返回当前滚动条与顶部得距离.
- 这个需求很简单，直接写:

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="JS之节流问题(throttle)" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css"> 
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .container {
                width: 100%;
                height: 5000px;
            }
            .showTop {
                display: block;
                position: fixed;
                width: 50px;
                height: 50px;
                border: 1px solid;
                right: 24px;
                bottom: 24px;
            }
        </style> 
        <script type="text/javascript">
            function showTop () {
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                console.log("滚动条位置:" + scrollTop);
            }
            window.onscroll = showTop;
        </script>
    </head>
    <body>
        <div class="container">
            <div id="showTop" class="showTop" onclick="showTop()"></div>
        </div>
    </body>
</html>
```

- 在运行的时候会发现存在一个问题：这个函数的默认执行频率，太！高！了！。 高到什么程度呢？以chrome为例，我们可以点击选中一个页面的滚动条，然后点击一次键盘的【向下方向键】，会发现函数执行了8-9次！
- 然而实际上我们并不需要如此高频的反馈，毕竟浏览器的性能是有限的，不应该浪费在这里，所以接着讨论如何优化这种场景。

## 防抖(debounce)
- 基于上述场景，首先提出第一种思路：在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms，然后：
    - 如果在200ms内没有再次触发滚动事件，那么就执行函数
    - 如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时
- **效果**：如果短时间内大量触发同一事件，只会执行一次函数。
- **实现**：既然前面都提到了计时，那实现的关键就在于setTimeOut这个函数，由于还需要一个变量来保存计时，考虑维护全局纯净，可以借助闭包来实现：

## 实现

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="JS之节流问题(throttle)" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css"> 
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .container {
                width: 100%;
                height: 5000px;
            }
            .showTop {
                display: block;
                position: fixed;
                width: 50px;
                height: 50px;
                border: 1px solid;
                right: 24px;
                bottom: 24px;
            }
        </style> 
        <script type="text/javascript">
            function debounce(fn, delay) {
                let timer = null; // 借助闭包
                return function () {
                    if(timer) {
                        clearTimeout()
                    }
                    timer = setTimeout(fn, delay) // 简化写法
                } 
            }
            function showTop () {
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                console.log("滚动条位置:" + scrollTop);
            }
            window.onscroll = debounce(showTop, 1000);
        </script>
    </head>
    <body>
        <div class="container">
            <div id="showTop" class="showTop" onclick="showTop()"></div>
        </div>
    </body>
</html>
```
- 此时会发现，必须在停止滚动1秒以后，才会打印出滚动条位置。
到这里，已经把防抖实现了，现在给出定义：
    - 对于短时间内连续触发的事件（上面的滚动事件），防抖的含义就是让某个时间期限（如上面的1000毫秒）内，事件处理函数只执行一次。

> Thinking in JackDan