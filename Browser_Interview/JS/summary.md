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

## http缓存策略

### 强缓存
- 命中强缓存时，浏览器并不会将请求发送给服务器。在Chrome的开发者工具中看到http的返回码是200，但是在Size列会显示为(from cache)。
- 强缓存是利用http的返回头中的`Expires`或者`Cache-Control`两个字段来控制的，用来表示资源的缓存时间。

#### Expires
- 缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。也就是说，**Expires=max-age + 请求时间**，**需要和`Last-modified`结合使用**。但在上面我们提到过，cache-control的优先级更高。 Expires是Web服务器响应消息头字段，在响应http请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。
- 该字段会返回一个时间，比如Expires:Thu,31 Dec 2037 23:59:59 GMT。这个时间代表着这个资源的失效时间，也就是说在2037年12月31日23点59分59秒之前都是有效的，即命中缓存。这种方式有一个明显的缺点，由于失效时间是一个绝对时间，所以当客户端本地时间被修改以后，服务器与客户端时间偏差变大以后，就会导致缓存混乱。于是发展出了Cache-Control。

#### Cache-Control
- `Cache-Control`是一个相对时间，例如Cache-Control:3600，代表着资源的有效期是3600秒。由于是相对时间，并且都是与客户端时间比较，所以服务器与客户端时间偏差也不会导致问题。
- `Cache-Control`与Expires可以在服务端配置同时启用或者启用任意一个，同时启用的时候Cache-Control优先级高。

#### Cache-Control可能的值

```
1. max-age 指定一个时间长度，在这个时间段内缓存是有效的，单位是s。例如设置 Cache-Control:max-age=31536000，也就是说缓存有效期为（31536000 / 24 / 60 * 60）天，第一次访问这个资源的时候，服务器端也返回了 Expires 字段，并且过期时间是一年后。

在没有禁用缓存并且没有超过有效时间的情况下，再次访问这个资源就命中了缓存，不会向服务器请求资源而是直接从浏览器缓存中取。

2. s-maxage 同 max-age，覆盖 max-age、Expires，但仅适用于共享缓存，在私有缓存中被忽略。

3. public 表明响应可以被任何对象（发送请求的客户端、代理服务器等等）缓存。

4. private 表明响应只能被单个用户（可能是操作系统用户、浏览器用户）缓存，是非共享的，不能被代理服务器缓存。

5. no-cache 强制所有缓存了该响应的用户，在使用已缓存的数据前，发送带验证器的请求到服务器。不是字面意思上的不缓存。

6. no-store 禁止缓存，每次请求都要向服务器重新获取数据。

7、must-revalidate指定如果页面是过期的，则去服务器进行获取。这个指令并不常用，就不做过多的讨论了
```

### 协商缓存

- 若未命中强缓存，则浏览器会将请求发送至服务器。**服务器根据http头信息中的Last-Modify/If-Modify-Since或Etag/If-None-Match来判断是否命中协商缓存**。**如果命中，则http返回码为304，浏览器从缓存中加载资源**。


##### Last-Modify/If-Modify-Since

- 浏览器第一次请求一个资源的时候，**服务器返回的header中会加上Last-Modify，Last-modify是一个时间标识该资源的最后修改时间**，例如Last-Modify: Thu,31 Dec 2037 23:59:59 GMT。

- 当浏览器再次请求该资源时，发送的请求头中会包含If-Modify-Since，该值为缓存之前返回的Last-Modify。服务器收到If-Modify-Since后，根据资源的最后修改时间判断是否命中缓存。

- 如果命中缓存，则返回http304，并且不会返回资源内容，并且不会返回Last-Modify。由于对比的服务端时间，所以客户端与服务端时间差距不会导致问题。但是有时候通过最后修改时间来判断资源是否修改还是不太准确（资源变化了最后修改时间也可以一致）。于是出现了ETag/If-None-Match。

##### ETag/If-None-Match

- 与`Last-Modify/If-Modify-Since`不同的是，`Etag/If-None-Match`返回的是一个校验码（ETag: entity tag）。ETag可以保证每一个资源是唯一的，资源变化都会导致ETag变化*。ETag值的变更则说明资源状态已经被修改。服务器根据浏览器上发送的If-None-Match值来判断是否命中缓存。

- ETag扩展说明

- 我们对ETag寄予厚望，希望它对于每一个url生成唯一的值，资源变化时ETag也发生变化。神秘的Etag是如何生成的呢？以Apache为例，ETag生成靠以下几种因子

```
1. 文件的i-node编号，此i-node非彼iNode。是Linux/Unix用来识别文件的编号。是的，识别文件用的不是文件名。使用命令’ls –I’可以看到。
2. 文件最后修改时间
3. 文件大小
    生成Etag的时候，可以使用其中一种或几种因子，使用抗碰撞散列函数来生成。所以，理论上ETag也是会重复的，只是概率小到可以忽略。
```

-----

## http1 和http2 request  


### Http2和Http1.X的区别

```
（1）.HTTP2使用的是二进制传送，HTTP1.X是文本（字符串）传送。

二进制传送的单位是帧和流。帧组成了流，同时流还有流ID标示

（2）.HTTP2支持多路复用

因为有流ID，所以通过同一个http请求实现多个http请求传输变成了可能，可以通过流ID来标示究竟是哪个流从而定位到是哪个http请求

（3）.HTTP2头部压缩

HTTP2通过gzip和compress压缩头部然后再发送，同时客户端和服务器端同时维护一张头信息表，所有字段都记录在这张表中，这样后面每次传输只需要传输表里面的索引Id就行，通过索引ID查询表头的值

（4）.HTTP2支持服务器推送

HTTP2支持在未经客户端许可的情况下，主动向客户端推送内容
```

## 防抖节流  

### [防抖](https://github.com/JackDan9/WebPages/blob/master/Browser_Interview/JS/throttle%26debounce/debounce.md)

### [节流](https://github.com/JackDan9/WebPages/blob/master/Browser_Interview/JS/throttle%26debounce/throttle.md)

## 多线程与高并发 

### 多线程


- 多线程是Java的特性，因为现在cpu都是多核多线程的，可以同时执行几个任务，为了提高jvm的执行效率，Java提供了这种多线程的机制，以增强数据处理效率。多线程对应的是cpu，高并发对应的是访问请求，可以用单线程处理所有访问请求，也可以用多线程同时处理访问请求。
- 在过去单CPU时代，单任务在一个时间点只能执行单一程序。之后发展到多任务阶段，计算机能在同一时间点并行执行多任务或多进程。虽然并不是真正意义上的“同一时间点”，而是多个任务或进程共享一个CPU，并交由操作系统来完成多任务间对CPU的运行切换，以使得每个任务都有机会获得一定的时间片运行。
- 后来发展到多线程技术，使得在一个程序内部能拥有多个线程并行执行。一个线程的执行可以被认为是一个CPU在执行该程序。当一个程序运行在多线程下，就好像有多个CPU在同时执行该程序。
- 总之，多线程即可以这么理解：**多线程是处理高并发的一种编程方法，即并发需要用多线程实现**。

### 高并发

- 高并发不是JAVA的专有的东西，**是语言无关的广义的，为提供更好互联网服务而提出的概念**。
- 典型的场景，例如：**12306抢火车票**，**天猫双十一秒杀活动**等。该情况的发生会导致系统在这段时间内执行大量操作，例如对资源的请求，数据库的操作等。如果高并发处理不好，不仅仅降低了用户的体验度(请求响应时间过长)，同时可能导致系统宕机，严重的甚至导致OOM异常，系统停止工作等。
- 如果要想系统能够适应高并发状态，**则需要从各个方面进行系统优化，包括，硬件、网络、系统架构、开发语言的选取、数据结构的运用、算法优化、数据库优化等……而`多线程`只是其中解决方法之一**。



## 原型链 
- **每个构造函数都有一个原型对象**，**原型对象都包含一个指向构造函数的指针**，而**实例都包含一个指向原型对象的内部指针**。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？
- 显然，**此时的原型对象将包含一个指向另一个原型的指针**，相应地，**另一个原型中也包含着一个指向另一个构造函数的指针**。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。

## 闭包 
- **函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起构成闭包（closure）**。
- 也就是说，**闭包可以让你从内部函数访问外部函数作用域**。在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。

## 递归 

### 例子
- 举个从小就听过的例子：从前有座山，山里有座庙，庙里有个和尚，和尚在讲故事，从前有座山，山里有座庙，庙里有个和尚，和尚在讲故事，从前有座山...

### 定义
- 在数学与计算机科学中，**递归(Recursion)是指在函数的定义中使用函数自身的方法**。实际上，递归，顾名思义，其包含了两个意思：**递 和 归**，这正是递归思想的精华所在。

## type of与Instances区别 


### typeof 

- typeof 是判断参数是什么类型的实例，返回值为说明运算数类型的字符串。

- 返回值结果：“number”、“string”、“boolean”、“object”、“function”、“undefined”

- 若参数为引用类型，始终返回“object”，对于Array、null始终返回“object”，所以用typeof来判断参数类型有很大的局限性。



### instanceof

- instanceof是用来判断一个对象在其原型链中是否存在一个构造函数的prototype属性

- a instanceof b：判断a是否为b的实例，可以用于继承关系中

- b是c的父对象，a是c的实例，a instanceof b 与 a instanceof c 结果均为true
0

## 深浅拷贝 

## async/await  

### 字面理解
- 任意一个名称都是有意义的，先从字面意思来理解。async 是“异步”的简写，而 await 可以认为是 async wait 的简写。所以应该很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。

### 语法规定
- await 只能出现在 async 函数中



## settimeout 3s一定会执行吗 

## 事件队列 

## 宏观任务与微观任务 

## 浏览器缓存有几种 

## em and rem 

## 构造函数 

## 继承多态