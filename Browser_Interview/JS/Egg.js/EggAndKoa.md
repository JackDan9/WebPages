# Egg.js 与 Koa
## 异步编程模型
- Node.js是一个异步的世界, 官方API支持的都是callback形式的异步编程模型, 这会带来许多问题, 例如:

- [callback hell](http://callbackhell.com/): 最臭名昭著的callback嵌套问题。

- [release zalgo](https://oren.github.io/#/articles/zalgo/): 异步函数中可能同步调用callback反会数据, 带来不一致性。

- 因此社区提供了各种异步的解决方案, 最终胜出的是Promise, 它也内置到了ECMAScript 2015中。而在Promise的基础上, 集合Generator提供的切换上下文能力, 出现了co等第三方类库来让我们用同步写法编写异步代码。同时, async function这个官方解决方案也于ECMAScript 2017中发布, 并在Node.js 8中实现。

------

## async function
- `async function`是语言层面提供的语法糖, 在async function中, 我们可以通过`await`关键字来等待一个Promise被resolve(或者reject, 此时会抛出已成), Node.js现在的LTS版本(8.x)已原生支持。

``` javascript
const fn = async function () {
    const user = await getUser();
    const posts = await fetchPosts(user.id);
    return { user, posts };
};

fn().then(res => console.log(res)).catch(err => console.error(err.stack));
```

------

## Koa

> Koa是一个新的web框架, 由Express幕后的原版人马打造, 致力于成为web应用和API开发领域中的一个更小、更富有表现力、更健壮的基石。

- Koa和Express的设计风格非常类似, 底层也都是共用的同一套HTTP基础库, 但是有几个显著的区别, 除了上面提到的默认异步解决方案之外, 主要的特点还有下面几个。

------

## Middleware
- Koa的中间件和Express不同, Koa选择了洋葱圈模型。

- 中间件洋葱圈:

![Koa Middleware](./images/koaMiddleware.png)

- 中间件执行顺序图:


- 所有的请求经过一个中间件的时候都会执行两次, 对比Express形式的中间件, Koa的模型可以非常方便的实现后处理逻辑, 对比Koa和Express的Compress中间件就可以明显的感受到Koa中间件模型的优势。

- [koa-compress](https://github.com/koajs/compress/blob/master/lib/index.js) for Koa.

- [compression](https://github.com/expressjs/compression/blob/master/index.js) for Express.

------

## Context
- 和Express只有Request和Response两个对象不同, Koa增加了一个Context的对象, 作为这次请求的上下文对象(在Koa 1中为中间件的`this`, 在 Koa 2 中作为中间件的第一个参数传入)。我们可以将一次请求相关的上下文都挂载到这个对象上。类似[traceld](https://github.com/eggjs/egg-tracer/blob/1.0.0/lib/tracer.js#L12)这种需要贯穿整个请求(在后续任何一个地方进行其他调用都需要用到)的属性就可以挂载上去。相较于request和response而言更加符合语义。

- 同时Context上也挂载了Request和Response两个对象。和Express类似, 这两个对象都提供了大量的便捷方法辅助开发, 例如:

- `get request.query`
- `get request.hostname`
- `set response.body`
- `set response.status`

------

## 异常处理

- 通过同步方式编写异步代码带来的另外一个非常大的好处就是异常处理非常自然, 使用`try catch`就可以将按照规范编写的代码中的所有错误都捕获到。这样我们可以很便捷的编写一个自定义的错误处理中间件。

``` javascript
async function onerror(ctx, next) {
    try {
        await next();
    } catch(err) {
        ctx.app.emit('error', err);
        ctx.body = 'server error';
        ctx.status = err.status || 500;
    }
}
```

- 只需要将这个中间件放在其他中间件之前, 就可以捕获它们所有的同步或者异步代码中抛出的异常了。

------

## Egg继承于Koa
- 如上述, Koa是一个非常优秀的框架, 然而对于企业级应用来说, 它还比较基础。

- 而Egg选择了Koa作为其基础框架, 在它的模型基础上, 进一步对它进行了一些增强。

------

## 扩展
- 在基于Egg的框架或者应用中, 我们可以通过定义`app/extend/{application, context, request, response}.js`来扩展Koa中对应的四个对象的原型, 通过这个技能, 我们可以快速的增加更多的辅助方法, 例如我们在`app/extend/context.js`中写入下列代码:

``` javascript
// app/extend/context.js
module.exports = {
    get isIOS() {
        const iosReg = /iphone|ipad|ipod/i;
        return iosReg.test(this.get('user-agent'));
    },
};
```

- 在Controller中, 我们就可以使用到刚才定义的这个便捷属性了:

``` javascript
// app/controller/home.js
exports.handler = ctx => {
    ctx.body = ctx.isIOS
    ? 'Your operating system is iOS.'
    : 'Your operating system is not iOS.';
};
```

- 更多关于扩展的内容, 请查看[扩展](https://eggjs.org/zh-cn/basics/extend.html)章节。

------

## 插件

- 众所周知, 在Express和Koa中, 经常会引入许许多多的中间件来提供各种各样的功能, 例如引入koa-session提供Session的支持, 引入koa-bodyparser来解析请求body。而Egg提供了一个更加强大的插件机制, 让这些独立领域的功能模块可以更加容易编写。

- 一个插件可以包含
    - `extend`: 扩展基础对象的上下文, 提供各种工具类、属性
    - `middleware`: 增加一个或多个中间件, 提供请求的前置、后置处理逻辑
    - `config`: 配置各个环境下插件自身的默认配置项

- 一个独立领域下的产检实现, 可以在代码维护性非常高的情况下实现非常完善的功能, 而插件也支持配置各个环境下的默认(最佳)配置, 让我们使用插件的时候几乎可以不需要修改配置项。

- [`egg-security`](https://github.com/eggjs/egg-security)插件就是一个典型的例子。

- 更多关于插件的内容, 请查看[插件](https://eggjs.org/zh-cn/basics/plugin.html)章节.

## Egg与Koa的版本关系

### Egg 1.x

- Egg1.x发布时, Node.js的LTS版本尚不支持async function, 所以Egg 1.x仍然基于Koa 1.x开发, 但是在此基础上, Egg全面增加了async function的支持, 再加上Egg对Koa 2.x的中间件也完全兼容, 应用层代码可以完全基于`async function`来开发。

    - 底层基于Koa 1.x, 异步解决方案基于co封装的`generator function`。
    - 官方插件以及Egg核心使用`generator function`编写, 保持对Node.js LTS版本的支持, 在必要处通过co包装以兼容在async function中的使用。
    - 应用开发者可以选择async function(Node.js 8.x+)或者generator function (Node.js 6.x)进行编写。

### Egg 2.x
- Node.js 8 正式进入LTS后, async function可以在Node.js中使用并且没有任何性能问题了, Egg 2.x基于Koa 2.x,框架底层以及所有内置插件都使用`async function`编写, 并保持了对**Egg 1.x以及generator function的完全兼容**, **应用层只需要升级到Node.js 8**即可从Egg 1.x迁移到Egg2.x。

    - 底层基于Koa 2.x, 异步解决方案基于async function。
    - 官方插件以及Egg核心使用async function 编写。
    - 建议业务层迁移到async function方案。
    - 只支持Node.js 8 及以上的版本。 

------

> Thinking in JackDan
