# $(document).ready和window.onload的区别

- `$(document).ready`和`window.onload`都是在页面加载完执行的函数, 大多数情况下差别不大, 但也是有区别的。

## 区别

### `$(document).ready`

- DOM结构绘制完毕后就执行，不必等到加载完毕。 意思就是DOM树加载完毕，就执行，不必等到页面中图片或其他外部文件都加载完毕。并且可以写多个.ready。

### `window.onload`

- 是页面所有元素都加载完毕，包括图片等所有元素。只能执行一次。

### 总结

- 所以, `$(document).ready`的执行时间要早于`window.onload`。并且可以写多个, 看代码:

### Example-Window

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DocumentVsWindow</title>
    </head>
    <body>
        <script>
            /**
             * 以下代码无法正确执行
             */
            window.onload = function () {  
                alert("test1");
            }
            window.onload = function () {
                alert("test2");
            }
            /**
             * 结果只输出第二个 能同时编写多个
            */
        </script>
    </body>
</html>
```

### Example-Document

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DocumentVsWindow</title>
        <script type="text/javascript" src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
    </head>
    <body>
        <script type="text/javascript">
            $(document).ready(function () {
                alert("Hello World!");
            });
            $(document).ready(function () {
                alert("Hello World Again!");
            });
        </script>
    </body>
</html>
```