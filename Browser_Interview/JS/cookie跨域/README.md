# Cookike

## 定义
- Cookie是一段不超过4KB的小型文本数据，由一个名称（Name）、一个值（Value）和其它几个用于控制Cookie有效期、安全性、使用范围的可选属性组成。

## 过期时间设置

- cookie的有效时间默认为-1，如果不进行设置的话，就会默认在浏览器会话关闭时结束。
- 可以通过setMaxAge()方法设置cookie的生命期。
- 当setMaxAge(0)表示立刻删除该浏览器上指定的cookie