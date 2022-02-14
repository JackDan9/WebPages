# AST (Abstract Syntax Tree)

| 标题 | 内容 |
| --- | --- |
| AST | AST定义，使用方式，原理 |
| AST | AST例子 |
| AST | AST应用 |

## AST 定义

- AST(Abstract Syntax Tree)抽象语法树，简称AST，它是源代码(也就是说它不仅仅是应用于JavaScript，同时还应用于其他语言，例如: Python，Rust等)语法结构的一种抽象表示。
- 它以树状的形式表现编程语言的语法结构，**树上的每个节点都表示源码中的一种结构**。
- 语法【抽象】: 指的是这里的语法并不会表示出真实语法中出现的每个细节。

## AST 实例

```javascript
// 源代码
var name = "jackdan";
```

```javascript
// AST 抽象语法树
/**
 * 
 *      +-----------+
 *      | assign(=) |
 *      +-----------+
 *      /            \
 *     /              \
 * +----+        +---------+
 * |name|        |"jackdan"|
 * +----+        +---------+
 * 
*/

```


```javascript
// 运行输出的结构代码

```

> Thinking in JackDan