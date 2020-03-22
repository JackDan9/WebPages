# 使得一个DOM元素不显示在浏览器可视范围内(CSS)

## 最基本的：

- 设置display属性为none，或者设置visibility属性为hidden

## Example

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="设置display属性为none，或者设置visibility属性为hidden" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>设置display属性为none，或者设置visibility属性为hidden</title>
        <style>
            * 
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .test-none {
                width: 100px;
                height: 100px;
                display: none;
                /* visibility: hidden; */
            }
        </style>
    </head>
    <body>
        <div class="test-none">
        </div>
    </body>
</html>
```

## 技巧性：
- 设置宽高为0，设置透明度为0，设置z-index位置在-1000em

## Example

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta chartset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <meta property="og:description" content="设置宽高为0，设置透明度为0，设置z-index位置在-1000em" />
        <meta http-equiv="Cache-Control" content="no-transform" />
        <meta http-equiv="Cache-Control" content="no-siteapp" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>设置宽高为0，设置透明度为0，设置z-index位置在-1000em</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
            html, body {
                padding: 0;
                margin: 0;
            }
            .test {
                width: 100px;
                height: 100px;
                border: 1px soild;
                opacity: 0;
                z-index: -1000em;
            }
        </style>
    </head>
    <body>
        <div class="test-none">
        </div>
    </body>
</html>
```

------

> Thinking in JackDan