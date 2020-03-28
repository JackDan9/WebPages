# throttle

- 从防抖(debounce)触发继续思考，使用上面的防抖方案来处理问题的结果是：
    - 如果在限定时间段内，不断触发滚动事件（比如某个用户闲着无聊，按住滚动不断的拖来拖去），只要不停止触发，理论上就永远不会输出当前距离顶部的距离。

- 但是如果产品同学的期望处理方案是：即使用户不断拖动滚动条，也能在某个时间间隔之后给出反馈呢？（此处暂且不论哪种方案更合适，既然产品爸爸说话了我们就先考虑怎么实现）
- 其实很简单：我们可以设计一种**类似控制阀门一样定期开放的函数，也就是让函数执行一次后，在某个时间段内暂时失效，过了这段时间后再重新激活（类似于技能冷却时间）**。
- **效果**：如果短时间内大量触发同一事件，那么在**函数执行一次之后，该函数在指定的时间期限内不再工作**，直至过了这段时间才重新生效。
- **实现**: 这里借助setTimeout来做一个简单的实现，加上一个状态位valid来表示当前函数是否处于工作状态：


## Example(节流)

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="JavaScript之节流(throttle)" />
        <meta http-equiv="Cache-Control" content="no-transform" />
    </head>
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
        function throttle(fn, delay) {
            let valid = true
            return function() {
                if(!valid) {
                    // 休息时间，不要打扰我
                    return false;
                }
                //工作时间, 执行函数并且在间隔期内把状态设为无效
                valid = false;
                setTimeout(() => {
                    fn();
                    valid = true;
                }, delay);
            }
        }
        /* 请注意，节流函数并不止上面这种实现方案,
            例如可以完全不借助setTimeout，可以把状态位换成时间戳，然后利用时间戳差值是否大于指定间隔时间来做判定。
            也可以直接将setTimeout的返回的标记当做判断条件-判断当前定时器是否存在，如果存在表示还在冷却，并且在执行fn之后消除定时器表示激活，原理都一样
        */
        function showTop() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            console.log('滚动条位置:' + scrollTop);
        }
        window.onscroll = throttle(showTop, 1000);
    </script>
    <body>
        <div class="container">
            <div class="showTop" onclick="showTop()"></div>
        </div>
    </body>
</html>
```

- 运行以上代码的结果是：
    - 如果一直拖着滚动条进行滚动，那么会以1s的时间间隔，持续输出当前位置和顶部的距离.

## 其他应用场景(防抖或者节流)
- 搜索框input事件，例如要支持输入实时搜索可以使用节流方案（间隔一段时间就必须查询相关内容），或者实现输入间隔大于某个值（如500ms），就当做用户输入完成，然后开始搜索，具体使用哪种方案要看业务需求。
- 页面resize事件，常见于需要做页面适配的时候。需要根据最终呈现的页面情况进行dom渲染（这种情形一般是使用防抖，因为只需要判断最后一次的变化情况）

> Thinking in JackDan