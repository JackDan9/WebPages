## jsonp原理  

### JSONP定义
- JSONP是`JSON with Padding`的略称。它是一个**非官方**的协议，它允许在**服务器端集成Script tags返回至客户端**，通过**javascript callback的形式实现跨域访问**（这仅仅是JSONP简单的实现形式）。


### JSONP实现 --- Callback


- 在全局装一个Node.js的http-server, html启动为8080端口

``` html
<!-- http://localhost:8080 -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>JSONP</title>
    </head>
    <body>
        <script type="text/javascript">
            // 回调函数
            function callback(data) {
                alert(data.message);
            }
        </script>
        <script type="text/javascript" src="http://localhost:10201/test.js"></script>
    </body>
</html>
```

- `test.js`

``` javascript
// http://localhost:10201
// 调用callback函数, 并以json数据形式作为参数传递, 完成回调
callback({message: "success"});
```

- 这其实就是JSONP的简单实现模式，或者说是JSONP的原型：**创建一个回调函数，然后在远程服务上调用这个函数并且将JSON 数据形式作为参数传递，完成回调**。
- **将JSON数据填充进回调函数**。


- 一般情况下，我们希望这个**script标签能够动态的调用**，而**不是像上面因为固定在html里面所以没等页面显示就执行了**，很不灵活。我们可以通过**javascript动态的创建script标签**，这样我们就可以灵活调用远程服务了。

- `http://localhost:8080`页面代码进行优化:

``` html
<!-- http://localhost:8080 -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>JSONP</title>
    </head>
    <body>
        <script type="text/javascript">
            //添加<script>标签的方法
            function addScriptTag(src){
            var script = document.createElement('script');
                script.setAttribute("type","text/javascript");
                script.src = src;
                document.body.appendChild(script);
            }
            
            window.onload = function(){
                addScriptTag("http://localhost:10201/test.js");
            }
        </script>
    </body>
</html>
```

- `http://localhost:10201`的`test.js`不改变。


- 如果我们**再想调用一个远程服务的话，只要添加addScriptTag方法，传入远程服务的src值就可以了**。

- 这里说明下**为什么要将addScriptTag方法放入到window.onload的方法里**，原因是**addScriptTag方法中有句document.body.appendChild(script)**;，这个script标签是被添加到body里的，由于我们写的javascript代码是在head标签中，document.body还没有初始化完毕呢，所以我们要通过window.onload方法先初始化页面，这样才不会出错。


## JSONP服务
- 上面的例子是最简单的JSONP的实现模型，不过**它还算不上一个真正的JSONP服务**。

- 我们来看一下真正的JSONP服务是怎么样的，比如Google的ajax搜索接口：`http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=?&callback=?`

- `q=?`这个问号是表示你要搜索的内容，最重要的是**第二个`callback=?`这个是正如其名表示回调函数的名称**，也就是将你**自己在客户端定义的回调函数的函数名传送给服务端**，**服务端则会返回以你定义的回调函数名的方法，将获取的json数据传入这个方法完成回调**。

## JSONP服务---Exmaple

``` html
<!-- http://localhost:8080 -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>JSONP</title>
    </head>
    <body>
        <script type="text/javascript">
            //添加<script>标签的方法
            function addScriptTag(src){
                var script = document.createElement('script');
                script.setAttribute("type","text/javascript");
                script.src = src;
                document.body.appendChild(script);
            }
            
            window.onload = function(){
                //搜索apple，将自定义的回调函数名result传入callback参数中
                addScriptTag("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=apple&callback=result");
                
            }
            //自定义的回调函数result
            function result(data) {
                //我们就简单的获取apple搜索结果的第一条记录中url数据
                alert(data.responseData.results[0].unescapedUrl);
            }
        </script>
    </body>
</html>
```

## jQuery对JSONP的实现

- jQuery框架也当然支持JSONP，可以使用`$.getJSON(url,[data],[callback])`方法(详细可以参考[JQ实现jsonp](https://api.jquery.com/jQuery.getJSON/))。

- 那我们就来修改下`http://localhost:8080`的代码，**改用jQuery的getJSON方法来实现**(下面的例子没用用到向服务传参，所以只写了`getJSON(url,[callback])`)：

## jQuery对JSONP的实现---Example

``` html
<!-- http://localhost:8080 -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>JSONP</title>
    </head>
    <body>
        <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
        <script type="text/javascript">
            $.getJSON("http://localhost:10201/MyService.ashx?callback=?",function(data){
                alert(data.name + " is a a" + data.sex);
            });
        </script>
    </body>
</html>
```

- 结果是一样的，**要注意的是在url的后面必须添加一个callback参数，这样getJSON方法才会知道是用JSONP方式去访问服务**，callback后面的那个问号是内部自动生成的一个回调函数名。这个函数名大家可以debug一下看看，比如jQuery17207481773362960666_1332575486681。
- 当然，加入说我们想**指定自己的回调函数名**，或者说**服务上规定了固定回调函数名**该怎么办呢？
- 我们可以使用`$.ajax`方法来实现(参数较多，详细可以参考http://api.jquery.com/jQuery.ajax)。

## jQuery(ajax)

``` html
<!-- http://localhost:8080 -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>JSONP</title>
    </head>
    <body>
        <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
        <script type="text/javascript">
            $.ajax({
                    url:"http://localhost:10201/MyService.ashx?callback=?",   
                    dataType:"jsonp",
                    jsonpCallback:"person",
                    success:function(data){
                        alert(data.name + " is a a" + data.sex);
                    }
            });
        </script>
    </body>
</html>
``` 

------

## http缓存策略 http1 和http2 request  防抖节流  多并发与高并发 原型链 闭包 递归 type of与Instances区别 深浅拷贝 async  settimeout 3s一定会执行吗 事件队列 宏观任务与微观 浏览器缓存有几种 em and rem 构造函数 继承多态