防抖节流

# 本地存储区别

共同点：都是保存在浏览器端，且同源的。

区别：
cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递；cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。

而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便。写自定义目录标题)

# 嵌入iframe可以访问这个页面的cookie可以设置访问范围吗
一、简介
1、postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递

2、postMessage(data,origin)方法接受两个参数：

（1）data:要传递的数据，html5规范中提到该参数可以是JavaScript的任意基本类型或可复制的对象，然而并不是所有浏览器都做到了这点儿，部分浏览器只能处理字符串参数，所以我们在传递参数的时候需要使用JSON.stringify()方法对对象参数序列化，在低版本IE中引用json2.js可以实现类似效果，

（2）origin：字符串参数，指明目标窗口的源，协议+主机+端口号[+URL]，URL会被忽略，所以可以不写，这个参数是为了安全考虑，postMessage()方法只会将message传递给指定窗口，当然如果愿意也可以建参数设置为"*"，这样可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"；

# localStorage与域名绑定
postMessage的使用



# 同样一个key后面一个会覆盖前面一个吗
不会,因为key不会进行diff

跨域 

jsonp原理

iframe之间怎么实现跨域

左右固定中间自适应
圣杯布局和双飞翼布局
display: flex;
left, right {
    width: 60px;
}

center {
    flex: 1;
    flex-grow: 1
}
flex布局justify-content与align-items区别

手写异步函数图片地址加载完成返回TRUE加载失败返回FALSE

一个异步函数的返回值是什么样的promise对象

封装一个异步函数

四个异步请求 a先请求a的结果是bc的参数 但是bc是无序并发的D需要bc的结果 并发该怎么处理
abcd每个请求超过五秒直接报错不再等待

父子组件

父子组件componentDidMount与componentWillUnMount谁先触发

在16.3之前，生命周期的划分为以下:
componentWillMount: 在渲染之前执行，用于根组件中的App级配置。
componentDidMount: 在第一次渲染之后执行，这里应该发生所有的AJAX请求(也就是这里处理AJAX请求)，DOM更新或者状态更新以及设置事件监听器。
componentWillReceiveProps: 在特定prop更新以触发状态转换时执行。
shouldComponentUpdate: 确定是否更新组件。默认情况下，它返回true。如果您确定组件在state或者props更新后不需要渲染，则可以返回false值。这是提高性能的好地方，因为如果组件收到新的prop，它可以防止重新渲染。
componentWillUpdate: 在应返回true的shouldComponentUpdate()确认props和state更改时，在重新渲染组件之前执行。
componentDidUpdate: 通常用于更新DOM以响应prop或者state更改。
componentWillUnmount: 它将用于取消任何传出的网络请求，或者删除与该组件关联的所有事件监听器。

16.3 之后:
getDerivedStateFromProps: 在调用render()之前立即调用，并在每个渲染器上调用。对于需要派生状态drived state的罕见用例，这是存在的。如果您需要派生状态，需要仔细研究一下这个状态，很有用的。
componentDidMount: 在第一次渲染之后执行。这里应该发生所有AJAX请求，DOM或者状态更新以及事件监听器.
shouldComponentUpdate: 确定是否更新组件。默认情况下，它返回true。如果您确定组件在state或者props更新后不需要渲染，则可以返回false值。这是提高性能的好地方，因为如果组件收到新的道具，它可以防止重新渲染。
getSnapshotBeforeUpdate: 在将呈现的输出提交到DOM之前立即执行。由此返回的任何值都将传递到componentDidUpdate()中。这对于从DOM(即滚动位置)捕获信息很有用。
componentDidUpdate: 通常用于更新DOM以响应属性或者状态更改。如果shouldComponentUpdate()返回false, 则不会触发。
componentWillUnmount: 它将用于取消任何传出的网络请求，或者删除与该组件关联的所有事件监听器。
父子组件通信(反向引用ref)


Parent constructor
Parent componentWillMount
Parent render
Child constructor
Child componentWillMount
Child render
Child componentDidMount
Parent componentDidMount

更新
总结: 不管父组件有没有把数据传递给子组件，只要父组件setState，都会走一遍子组件的更新周期。而且子组件被动更新会比主动更新所执行的流程多出来一个
componentWillReceiveProps 方法。

自身主动更新
Child shouldComponentUpdate(nextProps, nextState)
Child componentWillUpdate(nextProps, nextState)
Child render
Child componetDidUpdate(prevProps, prevState)

被动更新
Parent shouldComponentUpdate(nextProps, nextState)
Parent componentWillUpdate(nextProps, nextState)
Parent render
Child componentWillReceiveProps(nextProps)
Child shouldComponentUpdate(nextProps, nextState)
Child componentWillUpdate(nextProps, nextState)
Child render
Child componetDidUpdate(prevProps, prevState)
Parent componetDidUpdate(prevProps, prevState)

redux