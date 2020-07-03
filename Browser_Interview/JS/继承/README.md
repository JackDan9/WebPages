# 继承---Inheritance

## 定义Inheritance
- 对于使用过基于类的语言(如Java或者C++)的开发人员来说, JavaScript有点令人困惑, 因为它是动态的, 并且本身不提供一个class实现。(在ES2015/ES6中引入了class关键字, 但那只是语法糖, JavaScript仍然是基于原型的)。

- 当谈到继承时, JavaScript只有一种结构: 对象。每个实例对象(object)都有一个私有属性(称之为`__proto__`)指向它的构造函数的原型对象(prototype)。该原型对象也有一个自己的原型对象(`__proto__`), 层层向上直到一个对象的原型对象为null。根据定义, null没有原型, 并作为这个原型链中的最后一个环节。

- 几乎所有JavaScript中的对象都是位于原型链顶端的Object的实例。

- 尽管这种原型继承通常被认为是JavaScript的弱点之一, 但是原型继承模型本身实际上比经典模型更墙打。例如, 在原型模型的基础上构建经典模型相当简单。

## 基于原型链的继承---Inheritance 

### 继承属性
- JavaScript对象是动态的属性"包"(指其自己的属性)。JavaScript对象有一个指向一个原型对象的链。当试图访问一个对象的属性时, 它不仅仅在该对象上搜寻, 还会搜寻该对象的原型, 以及该对象的原型的原型, 依次层层向上搜索, 直到找到一个名字匹配的属性或到达原型链的末尾。

> 遵循ECMAScript标准, someObject.[[Prototype]]符号时用于指向someObject的原型。从ECMAScript 6开始, [[Prototype]]可以通过Object.getPrototypeOf()和Object.setPrototypeOf()访问器访问。这个等同于JavaScript的非标准但许多浏览器实现的属性__proto__。
> 但它不应该与构造函数func的prototype


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain