# Array.prototype.reduce()
- `reduce()`方法对数组中的每个元素执行一个由您提供的`reducer`函数(升序执行), 将其结果汇总为单个返回值。

```html

```

## `reduce()`函数参数

```javascript
1. Accumulator(acc)(累计器)
2. Current Value(cur)(当前值)
3. Current Index(idx)(当前索引)
4. Source Array(src)(原数组)
```

- 您的`reducer`函数的返回值分配给累计器, 该返回值在数组的每个迭代中被记住，兵最后成为最终的单个结果值。

## `reduce`语法

``` javascript
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce