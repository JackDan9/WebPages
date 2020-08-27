# Prototype 
## 定义

- 函数才存在Prototype属性, 函数的prototype指向一个对象, 
- 每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype

``` javascript
function Person() {

}

var person = new Object();
// person.__proto__ = Person.prototype;
// var person = new Person(); 
// person.__proto__ = Person.prototype;

// child.prototype = new parent()
// child.prototype.__proto__ = parent.prototype

class child extends parent {


}

// var person = Person.prototype;
// Person.prototype.name = 'jackdan';

// person.name = 'jack';
// var person1 = new Person();
// var person2 = new Person();
// console.log(person1.name);
// console.log(person2.name);
```

## __proto__

### 定义

- 这是每一个JavaScript对象(除了 null )都具有的一个属性，叫**__proto__**，这个属性会**指向该对象的原型**。

``` javascript
function Person() {

}

var person = new Person();

console.log(persone.__proto__ === Person.prototype); // true
```

- 绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.__proto__ 时，可以理解成返回了 Object.getPrototypeOf(obj)。



## constructor

> 既然实例对象和构造函数都可以指向原型，那么**原型是否有属性指向构造函数或者实例**呢？

### 定义

- 指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor，**每个原型都有一个 constructor 属性指向关联的构造函数**。

``` javascript
function Person() {

}

// **Person.prototype.constructor 指向构造函数**
console.log(Person === Person.prototyoe.constructor); // true
```

## 关系

``` javascript
function Person() {

}

var person = new Person();
person.__proto__ === Person.prototype 
Person.prototype.constructor === Person
Object.getPropertyOf(person) === Person.prototype

```

- 了解了构造函数、实例原型、和实例之间的关系，接下来我们讲讲实例和原型的关系：

## 实例与原型
- 当读取实例的属性时，如果找不到，**就会查找与对象关联的原型中的属性**，**如果还查不到，就去找原型的原型，一直找到最顶层为止**(链式结构的雏形(chain))。
- 举个例子:

``` javascript
function Person() {

}
Person.prototype.name = 'jackdan';

var person = new Person();

person.name = 'jack';

console.log(person.name);

delete person.name;
console.log(persone.name);

```

- 在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 jack

- 但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 **person 的原型也就是 person.__proto__** ，**也就是 Person.prototype中查找**，幸运的是我们找到了 name 属性，结果为 jackdan。

- 但是万一还没有找到呢？原型的原型又是什么呢？

## 原型的原型

- 在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：

``` javascript
var obj = new Object();
obj.name = 'jackdan';
console.log(obj.name);
```

- 其实原**型对象就是通过 Object 构造函数生成的**，结合之前所讲，**实例的 __proto__ 指向构造函数的 prototype** ，所以我们再更新下关系图：

## 原型链

``` javascript
function Person() {

}

var obj = new Object();
obj.__proto__.name = 'dan';

// Object.prototype.name = 'dan';

Person.prototype.name = 'jackdan';

var person = new Person();

person.name = 'jack';

console.log(person.name);

delete person.name

console.log(person.name);

delete Person.prototype.name;

console.log(person.name);
```

## 类-class

``` javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function(name, age) {
    // console.log("name: " + this.name + "age: " + this.age);
    return '(' + this.name + ', ' + this.age + ')';
}

var p = new Person('jackdan', 25);

// class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return '(' + this.name + ', ' + this.age ')';
    }
}

var p = new Person('jackdan', 25);

typeof Person; // function

Person === Person.prototype.constructor;

```

- 上面代码定义了一个"类"，可以看到里面有一个**constructor**方法，这就是**构造方法**，而**this关键字则代表实例对象**。也就是说，**ES5 的构造函数Person**，**对应 ES6 的Person类的构造方法**。

- **Person类除了构造方法**，还**定义了一个toString方法**。注意，定义"类"的方法的时候，前面**不需要加上function这个关键字**，**直接把函数定义放进去了就可以了**。另外，**方法之间不需要逗号分隔，加了会报错**。


``` javascript
class Person {
    constructor() {

    }

    toString() {

    }

    toValue() {

    }

}

let person = new Person();
person.constructor = Person.prototype.constructor; 
// 等价于
Person.prototype = {
    constructor() {

    },

    toString() {

    },

    toValue() {

    },
}
```
