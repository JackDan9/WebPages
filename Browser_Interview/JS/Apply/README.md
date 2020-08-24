# Apply
## 定义
- `apply()`方法在**使用一个指定的`this`值**和**若干个指定的参数值**(apply()接受数组形式的参数。)的前提下调用某个函数或方法。

``` javascript
Function.prototype.apply2 = function(context, arr) {
    context = Object(context) || window;
    context.fn = this;

    var result;

    if(!arr) {
        result = context.fn();
    } else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }

        // result = eval('(context.fn' + args + ')');
        result = eval('context.fn(' + args + ')');
        // eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
    }

    delete context.fn;
    return result;
}

var foo = {
    value: 1
}

var bar = function() {
    console.log(this.value);
}

bar.apply2(foo, [1, 2, 3]);
```