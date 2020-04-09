# JS获取url `?` 号后面的参数
- 类似这样的Url: `https://www.d-bigdata.com/index.html#/?_k=9kj6s0`

## 正则表达式

``` javascript
function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

console.log('https://www.d-bigdata.com/index.html#/?_k=9kj6s0')
```


## Example --- 正则表达式

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="URL获取参数" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>URL获取参数</title>
        <script type="text/javascript">
            function GetQueryString(name) {
                /**
                 * 不做new 操作的话
                 * this指向于window 
                 * 
                 * window
                 *  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
                 * this
                 *  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
                */
                debugger;
                let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                let r = window.location.search.substr(1).match(reg);
                if (r != null) return unescape(r[2]);
                return null;
            }

            /**
             * 
             * 做new 操作的话
             * 
             * this 指向 GetQueryString
             * 
             * this
             *   GetQueryString {}
             *       __proto__: Objectconstructor: ƒ GetQueryString(name)arguments: Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]caller: nulllength: 1name: "GetQueryString"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: test.html:10[[Scopes]]: Scopes[1]__proto__: Object
             * window
             *   Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
            */
            // let getQueryString = new GetQueryString();
            
            console.log(GetQueryString('aaa'))
        </script>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

------

## indexOf

``` javascript

```