# EventLoop

## 定义

- Event Loop是一个很重要的概念, 指的是计算机系统的一种运行机制。

> "Event Loop是一个程序结构，用于等待和发送消息和事件。（a programming construct that waits for and dispatches events or messages in a program.）"

- 程序中设置两个线程: 一个负责程序本身的运行, 称为"主线程"; 另一个负责主线程与其他进程(主要是各种I/O操作)的通信, 被称为"Event Loop线程"(可以译为"消息线程")。

- 每当遇到I/O的时候, 主线程就让Event Loop线程去通知相应的I/O程序, 然后接着往后运行, 所以不存在红色等待时间。等到I/O程序完成操作, Event Loop线程再把结果返回主线程。主线程就调用实现设定的回调函数, 完成整个任务。

- 可以看到, 由于多出橙色的空闲时间, 所以主线程得以运行更多的任务, 这就提高了效率。这种运行方式称为"异步模式"(asynchronous I/O)或者"非阻塞模式"(non-blocking mode)

http://www.ruanyifeng.com/blog/2013/10/event_loop.html