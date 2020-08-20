# Egg.js 与 Koa
## 异步编程模型
- Node.js是一个异步的世界, 官方API支持的都是callback形式的异步编程模型, 这会带来许多问题, 例如:

- [callback hell](http://callbackhell.com/): 最臭名昭著的callback嵌套问题。

- [release zalgo](https://oren.github.io/#/articles/zalgo/): 异步函数中可能同步调用callback反会数据, 带来不一致性。

- 因此社区提供了各种异步的解决方案, 最终胜出的是Promise, 它也内置到了ECMAScript 2015中。而在Promise的基础上, 集合Generator提供的切换上下文能力, 出现了co等第三方类库来让我们用同步写法编写异步代码。同时, async function这个官方解决方案也于ECMAScript 2017中发布, 并在Node.js 8中实现。