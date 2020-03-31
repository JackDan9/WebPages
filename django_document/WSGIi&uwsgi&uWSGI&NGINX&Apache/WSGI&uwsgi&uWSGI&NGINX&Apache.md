# WSGI & uwsgi & uWSGI & NGINX & Apache
## 基本概念

### 1. WSGI:(the Python Web Server Gateway Interface)是一种通信协议

- **python web框架编写的应用程序** <===> **后端服务器**之间的通信规范。
- [PEP 3333](https://www.python.org/dev/peps/pep-3333/)中描述了**web server**如何与**web application**通信的规范。
    - WSGI server负责从客户端接收请求，将request转发给application，将application返回的response返回给客户端；
    - WSGI application接收由server转发的request，处理请求，并将处理结果返回给server。application中可以包括多个栈式的中间件(middlewares)，这些中间件需要同时实现server与application，因此可以在WSGI服务器与WSGI应用之间起调节作用：对服务器来说，中间件扮演应用程序，对应用程序来说，中间件扮演服务器。
- 要实现wsgi协议, 必须同时实现**web server**和**web application**。
- 当前运行在WSGI协议之上的web框架有`Bottle`, `Flask`, `Django`。

### 额外知识: Python内置了一个WSGI服务器，这个模块叫wsgiref

### WSGI定义

- wsgi接口定义很简单，只要求Web开发者实现一个函数，来相应Http请求

``` python
def application(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])
    return '<h1>Hello, web!</h1>'
```

- 上面的application()函数就是符合WSGI标准的一个HTTP处理函数，它接收两个参数：
- `environ`：一个包含所有HTTP请求信息的dict对象；
- `start_response`：一个发送HTTP响应的函数。

- `application()`函数必须由WSGI服务器来调用


------

### 2. uwsgi: 是一种`线路协议`

- 与WSGI一样是一种通信协议，是uWSGI服务器的独占协议，用于定义传输信息的类型(type of information)，每一个uwsgi packet前4byte为传输信息类型的描述，与WSGI协议是两种东西，据说该协议是fcgi协议的10倍快。

------

### 3. uWSGI: 是`一个web服务器`的名称

- uWSGI旨在为部署分布式集群的网络应用开发一套完整的解决方案
- 主要面向web及其标准服务。由于其`可扩展性`, 能够被无限制的扩展用来支持更`多平台`和`多语言`
- 实现了`WSGI协议`, `uwsgi协议`等
- `uWSGI服务器`自己实现了`基于uwsgi协议的server部分`, 我们只需要在uwsgi的配置文件中`指定 application的地址`, uWSGI就能直接和`应用框架的WSGI application`通信。

- 总结: 是一个web服务器，实现了WSGI协议、uwsgi协议、http协议等。

------

#### uWSGI的特点:
- 超快的`性能`
- `低内存`占用
- `多app`管理
- 详尽的`日志功能`(可以用来分析app的性能和瓶颈)
- `高度可定制`(内存大小限制, 服务一定次数后重启等)

------

### 4. Apache: 世界使用排名第一的Web服务器

------

### 5. Nginx: 轻量级的Web服务器/反向代理服务器以及电子邮件(IMAP/POP3)代理服务器

------

### 重点: Apache与Nginx的优缺点比较

------

#### 1. Nginx相对于Apache的优点:
- **轻量级**: 轻量级，同样起Web服务，比Apache占用更少的内存以及资源
- **抗并发**: 抗并发，Nginx处理请求是异步非阻塞的, 而Apache则是阻塞型的, 在高并发下Nginx能保持**低资源** **低消耗** **高性能**
- **高度模块化的设计**: 高度模块化的设计, 编写模块相对简单
- **社区活跃**: 社区活跃, 各种高性能模块出品迅速啊

------

#### 2. Apache相对于Nginx的优点:
- **rewrite**: rewrite, 比Nginx的rewrite强大
- **模块超多**: 模块超多, 基本想到的都可以找到
- **少bug**: 少bug, Nginx的bug相对较多
- **超稳定**

- 存在就是理由, 一般来说, 需要性能的web服务, 用Nginx。如果不需要性能只求稳定，那就apache吧。
- 后者的各种功能模块实现得比前者有优势，例如SSL的模块就比前者好, 可配置项多。这里要注意一点, epoll(freebsd上是kqueue)网络IO模型是Nginx处理性能高的根本理由, 但并不是所有的情况下都是epoll大获全胜的, 如果本身提供静态服务的就只有寥寥几个文件, apache的select模型或许比epoll更高性能。当然，这只是根据网络IO模型的原理作的一个假设，真正的应用还是需要实测了再说的。

------

#### 3. 作为Web服务器: 
- 相比Apache, Nginx使用更少的资源, 支持更多的并发连接, 体现更高的效率, 这点使Nginx尤其受到虚拟主机提供商的欢迎。在高连接并发的情况下, Nginx是Apache服务器不错的替代品: Nginx在美国是做虚拟机生意老板们经常选择的软件平台之一, 能够支持高达50,000个并发连接数的响应, 感谢Nginx为我们选择了epoll and kqueue作为开发模型。

- Nginx作为负载均衡服务器: Nginx既可以在内部直接支持Rails和PHP程序对外进行服务，也可以支持作为HTTP代理服务器对外进行服务。Nginx采用C进行编写, 不论是系统资源开销还是CPU使用效率都比Perbal要好很多。

- 作为邮件代理服务器: Nginx同时也是一个非常优秀的邮件代理服务器(最早开发这个产品的目的之一也是作为邮件代理服务器), Last.fm描述了成功并且美妙的使用经验。

- Nginx是一个安装非常的简单, 配置文件非常简洁(还能够支持perl语法), Bugs非常少的服务器: Nginx启动特别容易, 并且几乎可以做到7*24不间断运行, 即使运行数个月也不需要重新启动。你还能够不间断服务的情况下进行软件版本的升级。

------

#### 4. Nginx配置简洁, Apache复杂
- Nginx静态处理性能比Apache高3倍以上
- Apache对PHP支持比较简单, Nginx需要配合其他后端使用
- Apache的组件比Nginx多
- 现在Nginx才是Web服务器的首选

------

#### 5. 核心区别
- 最核心的区别在于Apache是同步多进程模型, 一个连接对应一个进程; Nginx是异步的, 多个连接(万级别)可以对应一个进程

------

#### 6. Nginx处理静态文件有优势, 耗费内存少。但无疑Apache仍然是目前的主流, 有很多丰富的特性。所以Apache还需要搭配着使用。当然如果能确定Nginx就适合需求，那么使用Nginx会是更经济的方式。

------

#### 7. 从个人使用上来看
- Nginx的负载能力比Apache高很多。最新的服务器也改用Nginx了。而且Nginx改完配置能 `-t` 测试一下有没有问题, Apache重启的时候发现配置出错了，会很崩溃，改的时候都会非常小心翼翼现在看有好多集群站，前端Nginx抗并发, 后端Apache集群，配合的也不错。

------

#### 8. Nginx处理动态请求是鸡肋，一般动态请求要Apache去做, Nginx只适合静态和反向。

------

#### 9. 个人的经验
- Nginx是很不错的前端服务器, 负载性能很好, 在老奔上开nginx，用webbench模拟10000个静态文件请求毫不吃力。apache对php等语言的支持很好，此外apache有强大的支持网路，发展时间相对nginx更久，bug少但是apache有先天不支持多核心处理负载鸡肋的缺点，建议使用nginx做前端，后端用apache。大型网站建议用nginx自代的集群功能。

------

#### 10. Nginx优于Apache
- 1.Nginx本身就是一个反向代理服务器
- 2.Nginx支持7层负载均衡；其他的当然，Nginx可能会比Apache支持更高的并发，但是根据NetCraft的统计，2011年4月的统计数据，Apache依然占有62.71%，而Nginx是7.35%，因此总得来说，Aapche依然是大部分公司的首先，因为其成熟的技术和开发社区已经也是非常不错的性能。 

------

#### 11. 你对web server的需求决定你的选择。
- 大部分情况下Nginx都优于Apache，比如说静态文件处理、PHP-CGI的支持、反向代理功能、前端Cache、维持连接等等。
- 在Apache+PHP（prefork）模式下，如果PHP处理慢或者前端压力很大的情况下，很容易出现Apache进程数飙升，从而拒绝服务的现象。

------

#### 12. 可以看一下Nginx Lua模块： https://github.com/openresty/ Apache比Nginx多的模块，可直接用Lua实现Apache是最流行的，why？大多数人懒得更新到Nginx或者学新事物 

------

#### 13. 对于Nginx，我喜欢它配置文件写的很简洁，正则配置让很多事情变得简单运行效率高，占用资源少，代理功能强大，很适合做前端响应服务器

------

#### 14. Apache在处理动态有优势，Nginx并发性比较好，CPU内存占用低，如果rewrite频繁，那还是Apache吧。

------

### Nginx + uWSGI部署Flask及分析

#### 1. 整体部署架构:


![架构图](./images/srtucture.png)


#### 2. 为什么需要Nginx?

- 如果普通的个人网站，如果访问量不大，可以有`uWSGI` + `Python Web app`构成
- 访问量过大，请求连接则需要长时间等待，出现了`分布式服务器`--几台web服务器一起处理请求
- Nginx就是来分配`客户端的请求连接`和`web服务器`的----Nginx的`反向代理`功能

![Nginx](./images/Nginx.png)

------

> Thinking in JackDan