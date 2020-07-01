# RegExp
## 定义
- RegExp对象用于将文本与一个模式匹配


## RegExp对象的方法
- JavaScript RegExp对象有3个方法: test(), exec() 和 compile()

### test()
- test()方法用来检测一个字符串是否匹配某个正则表达式, 如果匹配成功, 返回true, 否则返回false;

### exec()
- exec()方法用来检测字符串中与正则表达式匹配的值。exec()方法返回一个数组, 其中存放匹配的结果。如果未找到匹配的值，则返回null。

### compile() --- 已废弃
- compile()方法可以在脚本执行过程中编译正则表达式, 也可以改变已有表达式。
- 该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

### match() --- 注意
- match()是支持正则表达式的String对象的方法

## 正则符号的含义

- `*`: 出现零到多次
- `+`: 出现一到多次
- `？`: 出现零次或者一次
- `.`: 除了\n以外的任意字符
- `{n}`: 出现n次
- `{n,}`: 出现n到多次
- `{n,m}`: 出现n到m次

``` javascript
var reg=/^0.2$/; //以0开头，以2结尾，中间可以是\n以外的任意字符

typeof Symbol()    //"symbol"
typeof Number()    //"number"
typeof String()    //"string"
typeof Function()    //"function"
typeof Object()    //"object"
typeof Boolean()    //"boolean"
typeof null    //"object"
typeof undefined    //"undefined"
```