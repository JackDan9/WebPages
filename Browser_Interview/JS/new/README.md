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