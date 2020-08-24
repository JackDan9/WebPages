# Call

## `call()`方法在**使用一个指定的`this`值**和**若干个指定的参数值**的前提下调用某个函数或方法。

```javascript
var foo = {
    value: 1
};

var bar = function() {
    console.log(this.value);
}

bar.call(foo);
```

- 等价于

```javascript
var foo = {
    value: 1,
    bar: function () {
        console.log(this.value);
    }
}

foo.bar();

// 1. 将函数设为对象的属性
// 2. 执行该函数
// 3. 删除该函数

foo.fn = bar;

foo.fn();

delete foo.fn();
```
- 第一版:

```javascript
Function.prototype.call2 = function(context) {
    context.fn = this;
    context.fn();
    delete context.fn();
}

var foo = {
    value: 1
}

var bar = function () {
    console.log(this.value);
}

bar.call2(foo);
```

------

``` javascript
var foo = {
    value: 1
}

var bar = function(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

bar.call(foo, 'fengfeng', 18);
```

- 第二版

```javascript
Function.prototype.call2 = function(context) {
    context = Object(context) || window;
    context.fn = this;

    var args = [];

    for(var i = 0, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
}

var foo = {
    value: 1
}

var bar = function(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

bar.call2(foo);
```

------