# 基础
## JS
- 1. 数据类型
```javascript
// 基本类型
Number, String, Boolean, Null, undefined, Symbol
// 引用类型
Array, Object, Function
```

- 2. 数据类型判定方法
```javascript
// typeof 
// string "symbol" "string" "number"
// null
// "object"

// Object.prototype.toString.call(null); === "[object Null]"
// instanceof 
// 引用类型 L instanceof R === null
// Array.isArray(arr); 
// arr.constructor === "Array";
// obj.contsructor 
```

- 3. `instanceof`原生实现
```javascript
function myInstanceof(L, R) {
  var RP = R.prototype;
  L = L.__proto__;

  while(true) {
    if(L === null) {
      return false;
    }
    if(L === RP) {
      return true;
    }
    L = L.__proto__;
  }
}

function Person() {
  console.log("test");
}

var person = new Person();
person instanceof Person;

person.__proto__.__proto__ === Person.prototype;
```

- 4. 原型与原型链
```javascript
// prototype 函数属性
// constructor 构造函数
// __proto__
function Person() {
  console.log("test");
}

console.log(Person.prototype.constructor === Person); // true
// Person 
console.log(Person.__proto__); // Function
console.log(Person.__proto__.prototype.constructor); // Function
console.log(Person.__proto__.__proto__); // Object
console.log(Person.__proto__.__proto__.__proto__); // null
```

- 5. 作用域
```javascript
// 静态作用域
// window
// global
// 动态作用域
// 普通函数
// 函数在调用过程中，作用域跟着去改变
// 全局作用域与函数作用域
let x = 1;

function A(y){
  let x = 2;
  function B(z){
    console.log(x+y+z);
  }
  return B;
}

let C = A(2);
C(3);
```

- 6. this
```javascript

// 普通函数
// 声明时 --- 根据调用的改变，谁调用这个this, this就指向谁，如果没有调用者，非严格模式下，window，严格模式下undefined
// 箭头函数
// 定义时---该函数所在的作用域指向的对象

function person() {
  console.log(this);
}

var person1 = () => {
  console.log(this)
}

person();
person1();
```

- 7. call
```javascript
// 执行上下文
// obj, this, fn
Function.prototype.myCall = function(context) {
  let ctx = Object(context) || window;
  let fn = Symbol();
  ctx[fn] = this;

  let result;

  let args = [];
  for(let i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);  
  }
  result = ctx[fn](...args);
  
  delete ctx[fn];
  
  return result;
}

fn.myCall(obj, 1, 2 ,3);


var fn = function() {
  console.log(this.name);
}

var obj = {
  name: 1
}

fn.call(obj);
```

- 8. apply
```javascript
Function.prototype.myApply = function(context, arr) {
  let ctx = Object(context) || window;
  let fn = Symbol();
  ctx[fn] = this;

  let result;
  if(!arr.length) {
    result = ctx[fn]();
  } else {
    result = ctx[fn](...arr);
  }

  delete ctx[fn];
  return result;
}
```

- 9. bind
```javascript
Function.prototype.myBind = function(context) {
  let self = this;
  let args = Array.prototype.slice.call(arguments, 1);

  let fTemp = function() {};

  let fBound = function() {
    let bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fTemp ? this : context, args.concat(bindArgs));
  }

  fTemp.prototype = this.prototype;
  fBound.prototype = new fTemp();

  return fBound;
}
```

- 10. for ... of 与 for ... in 区别
```javascript
// for ... of 遍历的值
// for ... in 遍历的key
```
- 11. 类class 
```javascript
class Person extends People {
  constructor(name) {
    super(age, height);
    this.name = name;
  }

  toPrint() {

  }
}
```
- 12. 继承
```javascript
// Person extends People
class Person {
  constructor() {

  }
}

class Person1 extends Person {
  constructor() {

  }
}

console.log(Person1.__proto__);

function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.prototype.sayHello = function() {
  console.log(this.name + '' + this.age);
}

function Child(name, age, height) {
  Parent.call(this, name, age);
  this.height = height;
}

function fTemp() {}

fTemp.prototype = Parent.prototype;
Child.prototype = new fTemp();
Child.prototype.sayHello = function() {
  console.log(this.name + '' + this.age + '' + this.height);
}
```
- 13. Module语法
```javascript
// 模块
// 
// css @import
// python import
// import export 
// import {Component} from 'React';
// export default a
// import {toString} from a 
// ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
```
- 14. Promise实现
```javascript
// callback
// pending fulfilled rejected
new Promise(function() {

}).then(() => {

}).then(() => {

}).catch(() => {

})
// 写原生实现

var MyPromise = function(resolver) {
  let self = this;
  let status = 'pending';
  let result = '';
  resolver(self.bind.resolve(this), self.bind.reject(this));
}

MyPromise.prototype.resolve(function(result) {
  if(this.status === 'pending') {
    this.status = 'fulfilled';
    this.result = result;
  }
  return this;
})
MyPromise.prototype.reject(function(result) {
  if(this.status === 'pending') {
    this.status = 'rejected';
    this.result = result;
  }
  return this;
})

MyPromise.prototype.then(function(isResolve, isReject) {
  if(this.status === 'fulfilled') {
    let isMyPromise = isResolve(this.result);
    if(isMyPromise instanceof MyPromise) {
      return isMyPromise(this.result);
    }
    return this;
  } else if(this.status === 'rejected' && arguments[1]) {
    let isMyPromise = isReject(this.result);
    if(isMyPromise instanceof MyPromise) {
      let err = new Error(this.result);
      return isMyPromise(err);
    }
    return this;
  }
})

MyPromise.prototype.catch(function(isReject) {
  if(this.statue === 'rejected') {
    let isMyPromise = isReject(this.result);
    if(isMyPromise instanceof MyPromise) {
      let err = new Error(this.result);
      return isMyPromise(err);
    }
    return this;
  }
})
```

- 好的解决方案是什么，为什么这么做，有没有更好的，别人会怎么做？

- 15. Promise.all实现

```javascript
Promise.all([p1, p2, p3])
// 如果其中有一个是rejected，返回rejected，否则返回resolved/fulfilled
// 写原生实现

Promise.myAll = function(arr) {
  if(!Array.isArray(arr) || arr.length === 0) {
    throw Error("Please input array type");
  } else {
    for(let i = 0, len = arr.length; i < len; i++) {
      if(!(arr[i] instanceof Promise)) {
        throw Error("Please input promise's array type");
      }
    }

    return new Promise((resolve, reject) => {
      let result = new Array(arr.length);
      let index = 0;
      for(let j = 0; j < arr.length; j++) {
        arr[j].then((value) => {
          index++;
          result[j] = value;
          if(index === arr.length) {
            resolve(result);
          }
        }, (error) => {
          reject(error);
        })
      }
    })
  }
}
```
- 16. CommonJS AMD CMD ES6
```javascript
// 模块加载方式
// CommonJS Node.js 等你所有加载完了之后才去执行
// module、exports、require、global
// 同步的方式加载模块
// Node.js 放在服务端上，不用考虑加载速度的问题
// AMD(Aysnc Module Define) require.js
// AMD推崇依赖前置、提前执行
define('./a, ./b', {

}, {

})
// CMD(Common Module Define) sea.js 玉伯
// CMD推崇依赖就近、延迟执行

// ES Module
// import/export/export default
// 边编译，边运行，边加载
// CommonJS VS ES Module
// CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
// CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
```
- 17. 变量提升

```javascript
// var let const
```
- 18. 闭包
```javascript

```
- 19. 防抖
```javascript
function debounce(fn, delay) {
  let timer;
  return function() {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      fn.apply(this, arguments);
    }, delay)
  }
}
```
- 20. 节流
```javascript
function throttle(fn, delay) {
  let prevTime = 0;
  return function() {
    let nowTime = new Date.getTime();
    if(nowTime - prevTime > delay) {
      fn.apply(this, arguments);
      prevTime = nowTime;
    }
  }
}
```
- 21. 泛型(TS)
- 22. EventLoop

```javascript
// macroTask script setTimeout setInterval Promise(() => {  }) 
// microTask Promise.then(() => {}) 
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
Promise(() => {
  console.log('promise0');
  resolve();
}).then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});
console.log('script end');
// script start 
// promise0
// script end
// promise1
// promise2
// setTimeout

// 先执行宏任务，把你所有的micro执行完
```

- 实现on和emit，实现一个简单的发布/订阅

```javascript
// 不要抢答面试官的问题，不要太着急
// 笔试+面试
// 音调保持一致
var on = function(name, fn) {
  if(!obj[name]) {
    obj[name] = [];
  }
  obj[name].push(fn);
}

var emit = function(name, fn) {
  if(obj[name]) {
    obj[name].map((fn) => {
      fn(val);
    })
  }
}
```

- fetch


## CSS
- 1. 盒子模型

```css
IE盒模型的content包括border、padding，box-sizing:border-box
```
- 2. BFC(Block Format Content)

```css
<div>
  <p></p>
</div>
```
- 3. FLex
```css
a {
  width: 1000px;
  height: 1000px;
  display: flex
}

left {
  width: 300px;
}

middle {
  flex: 1;
}

right {
  width: 300px;
}
```
  - flex: 1
  - 3.1. flex-grow, flex-shrink, flex-basis
  - 第一个参数表示: flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
  - 第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
  - 第三个参数表示: flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小
  - 3.2. 垂直居中(row)/column(水平居中) align-items, 水屏居中 justify-conetnt
- 4. 实现一个三角形
```css
{
  width: 0;
  height: 0;
  border-left: 50px red;
  
}
```
- 5. 实现一个平行四边形
```css
.a {
  transform: skewX(-10deg)
}
```

- 6. 实现一段平移
```css

```
- 7. CSS3的新属性
```css
animation
transfrom
transtion
```
- 8. position
```css
static
relative
absolute
fixed
```

- 9. 实现一条对角线

```css
transform: rotate(30deg)
```

- 10. 支持12px以下的字体
```css
transform: scale(0.8);
```

## HTML

# 框架
## React
1. setState异步更新、同步更新

```javascript
1. setState 只在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout 中都是同步的。
2. setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
3. setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。
```
2. 生命周期状态
```javascript
componentWillMount();

componentDidMount();

componentWillReceiveProps(nextProps);
// getDerivedStateFromProps(nextProps, prevState); react16.4 代替了旧的componentWillReceiveProps及componentWillMount
shouldComponentUpdate(nextProps, nextState);
componentWillUpdate(nextProps, nextState);
// getSnapshotBeforeUpdate(prevProps, prevState);
componentDidUpdate(prevProps, prevState);

componentWillUnMount();
```
3. Fiber
- 16版本之后
4. Hooks
- 使用useEffect，不要调用函数层次太多，代码应该一眼看清楚哪些函数会被useEffect调用
### ReactDOM
### ReactRouter
- 
### Redux
1. react-redux redux-saga
2. mobx
3. 
## Vue

# 构建工具
## Babel
parse transform generating

## Webpack
- HRM(HOT Replacement Module)
- 

# Node.js
## Egg.js

# 算法
## 两个大数相加
```javascript

```
## 斐波那契数列

## 找出url中的


## flat是想

```javascript
var a = [1, [2, [3, 4]]];

function flat(arr, n) {
  if(!n) {
    n = 1;
  }

  let result = [];

  arr.forEach((item) => {
    if(Array.isArray(item)) {
      n--;
      if(n < 0) {
        let newArr = result.push(item);
        return newArr;
      }
      result.push(...(flat(item, n)));
    } else {
      result.push(item);
    }
  })
  return result;
}
console.log(flat(a, 1));
```

## 业务sense(三年到五年)
结合业务本身
## 业务线
11个不同的产品线(Pass层，Sass层，Iass层)
## 客户(行业的标杆客户)
类似于微软的架构，Pass层更多偏Windows，一体机/混合云。
## 第四范式
公司的远景——帮助传统行业进行数字化的转型，帮助数字化转型过程中的工程师更加方便进行研究和分析

```javascript

```
## 


## 找出queryString

```javascript
/**
 * 输入: 'http://www.baidu.com/index.html?a=1&b=2&c=3&d#hash'
 * 输出: { a: '1', b: '2', c: '3', d: '' }
 * 备注: 程序尽可能满足
*/

function findQueryString(str) {

}
```

## 实现Array原生方法unique

```javascript
/**
 * 输入: let arr1 = [1, 2, 3, 4, 4, 1, 2, 3, 8, 7, 9]
 * 执行: arr1.unique()
 * 输出: [1, 2, 3, 4, 8, 7, 9];
 * 
 * 输入: [1, 1, 8, 4, 0, 5, 6].unique();
 * 输出: [1, 8, 4, 0, 5, 6]
*/

Array.prototype.unique = function() {


}
```

## 找出最长的斐波那契子序列的子序列

```javascript
/**
 * 输入: [1,2,3,4,5,6,7,8]
 * 输出: [1,2,3,5,8]
 * 
 * 输入: [1,3,7,11,12,14,18]
 * 输出: [1,11,12]、[3,11,14] 以及 [7,11,18]
*/
function findFib(arr) {
  
}
```
