# Object.defineProperty()
## 定义
- `Object.defineProperty()`方法会直接在一个对象上定义一个新属性, 或者修改一个对象的现有属性, 并返回此对象。

> 注意: 应当直接在`Object`构造器对象上调用此方法, 而不是在任意一个`Object`类型的实例上调用。

## 语法

```javascript
Object.defineProperty(obj, prop, descriptor)
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty