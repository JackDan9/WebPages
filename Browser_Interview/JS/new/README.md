# new
## 定义
- `new`运算符**创建一个用户定义的对象类型的实例**或**具有构造函数的内置对象类型**之一

``` javascript
function Test(name, age) {
    this.name = name;
    this.age = age;

    this.operator = 'test';
}

Test.prototype.strength = 80;
Test.prototype.sayOwnName = function () {
    console.log('I am' + this.name);
}

var test = new Test('jack', 20);

console.log(test.name);
console.log(test.age);
console.log(test.strength);
console.log(test.sayOwnName);

// 访问到 Otaku 构造函数里的属性
// 访问到 Otaku.prototype 中的属性
```

## new的过程

```md
1. 创建一个空的简单 JavaScript 对象（即{}）；
2. 为步骤 1 新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
3. 将步骤 1 新创建的对象作为this的上下文 ；
4. 如果该函数没有返回对象，则返回this。
```