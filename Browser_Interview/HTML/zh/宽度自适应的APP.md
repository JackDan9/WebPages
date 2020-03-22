# 宽度自适应的APP

- 一般出的设计图都是宽度为750px的标准图，但是各种手机的型号不同，屏幕尺寸也不尽相同，难道还得手动算出各部分尺寸，然后用百分比布局？当然不用，一段js代码实现屏幕尺寸自适应，在编写的时候就可以直接使用绝对尺寸而不用担心屏幕尺寸改变而影响布局了！

## Example

``` html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="APP自适应宽度" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>APP自适应宽度</title>
        <script type="text/javascript">
            var phoneWidth = parseInt(window.screen.width);
            var phoneScale = phoneWidth/750;
            var ua = navigator.userAgent;
            if (/Android (\d+\.\d+)/.test(ua)){
                var version = parseFloat(RegExp.$1);
                if(version>2.3){
                    document.write('<meta name="viewport" content="width=750, minimum-scale ='+phoneScale+', maximum-scale ='+phoneScale+', target-densitydpi=device-dpi">');
                }else{
                    document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
                }
            } else {
                document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
            }
        </script>
    </head>
    <body>

    </body>
</html>
```

------

> Thinking in JackDan