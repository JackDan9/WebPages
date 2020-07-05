# Proxy
## 概述
- Proxy用于修改某些操作的默认行为, 等同于在语言层面做出修改, 所以属于一种**"元编程"(meta programming)**, 即对编程语言进行编程。
- Proxy可以理解成在目标对象前架设一个"拦截"层, 外界对该对象的访问都必须先通过这层拦截, 因此提供了一种机制可以对外界的访问进行过滤和改写。
- Proxy这个词的原理是代理, 用在这里表示由它来"代理"某些操作, 可以译为"代理器"。

```javascript
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function(target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
```


- 上面的代码对一个空对象进行了一层拦截, 重定义了属性的读取(get)和设置(set)行为。

- Proxy实际上重载(overload)了点运算符, 即用自己的定义覆盖了语言的原始定义。

``` javascript
var proxy = new Proxy(target, handle);
```

- `target`:
  - 要使用`Proxy`包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
- `handler`:
  - 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理`p`的行为。 




https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
