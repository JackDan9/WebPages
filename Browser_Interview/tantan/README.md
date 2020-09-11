# hooks引入的好处, 原理

# 编程题输出

# __proto__与prototype

```javascript
function Person(name) {
    this.name = name;
}

const person = new Person('tantan');
console.log(person.__proto__);
console.log(person.__proto__.__proto__);
console.log(Person.prototype.__proto__);
console.log(Person.__proto__);
console.log(Person.__proto__.__proto__);
console.log(Person.__proto__.__proto__.__proto__);
```

# 声明变量优先级

```javascript
foo();
var foo;
function foo() { console.log(1) };
foo = function () { console.log(2) };
foo();
```

# em和rem

```css
.parent {
    font-size: 16px;
    line-height: 32px;
}

.s1 {
    font-size: 2em;
}

.s2 {
    font-size: 2em;
    line-height: 2em;
}

<div class="parent">
    <div class="s1"></div>
    <div class="s2"></div>
</div>
```

# flex实现
```css
child1, child2, child3安装1:2:3比例, 在不改变DOM结构的情况下, 让child3靠左
```

```css
<div class="parent">
    <div class="child1"></div>
    <div class="child2"></div>
    <div class="child3"></div>
</div>
```