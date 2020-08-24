# Bind

## 定义

- `bind()` 方法会创建一个新函数。当这个新函数被调用时，`bind()` 的第一个参数将作为它运行时的`this`，之后的一序列参数将会在传递的实参前传入作为它的参数。

``` javascript
// 返回一个函数
// 可以传入参数
var foo = {
    value: 1
}

function bar() {
    console.log(this.value);
}

var bindFoo = bar.bind(foo);
bindFoo();
```

- 第一版

``` javascript
Function.prototype.bind2 = function(context) {
    var self = this;
    return function() {
        return self.apply(context);
        // 此外，之所以 return self.apply(context)，是考虑到绑定函数可能是有返回值的
    }
}

var foo = {
    value: 1
}

function bar() {
    console.log(this.value);
    // return this.value;
}

var bindFoo = bar.bind2(foo);

// console.log(bindFoo());
bindFoo();
```

------

``` javascript
var foo = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}

var bindFoo = bar.bind(foo, 'fengfeng');
bindFoo(18);
```

- 第二版

``` javascript
Function.prototype.bind2 = function(context) {
    var self = this;

    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }
}

var foo = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}

var bindFoo = bar.bind2(foo, 'fengfeng');
bindFoo('18')
```


- 一个绑定函数也能使用**new操作符创建对象**：这种行为就像把**原函数当成构造器**。提供的 **this 值被忽略**，同时**调用时的参数被提供给模拟函数**。
- 也就是说当** bind 返回的函数作为构造函数的时候**，**bind 时指定的 this 值会失**效，但**传入的参数依然生效**。


``` javascript
var foo = {
    value: 1
}

var bar = function(name, age) {
    this.beauty = 'best';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'jack';

var bindFoo = bar.bind(foo, 'fengfeng');

var bindFooObj = new bindFoo('18');
```

- 注意：尽管在**全局和 foo 中都声明了 value 值**，最后**依然返回了 undefind**，说明**绑定的 this 失效**了，如果大家**了解 new 的模拟实现**，就会知道**这个时候的 this 已经指向了 bindFooObj**。

- 第三版

``` javascript
Function.prototype.bind2 = function(context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时, this指向实例, 此时结果为true, 将绑定函数的this指向该实例, 可以让实例获得来自绑定函数的值
        // 以上面的demo为例, 如果修改成`this instanceof fBound ? null : context`, 实例只是一个空对象, 将null改成this, 实例会具有habit属性
        // 当作为普通函数时, this 指向 window, 此时结果为false, 将绑定函数的this 指向 context
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }

    fBound.prototype = this.prototype;
    // 我们直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转：
    return fBound;
}


```

- 第四版

```javascript
Function.prototype.bind2 = function(context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

var value = 2;

var foo = {
    value: 1
}

var bar = function(name, age) {
    this.beauty = 'best';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = "jack";

var bindFoo2 = bar.bind2(foo, "fengfeng");

var bindFoo2Obj = new bindFoo2(18);
```