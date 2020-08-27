
/**
 * 
 * @param {Function} fn JavaScript 函数
 * @param {Number} n 可以重试的次数
 * @return {Function} 可以重复调用的function
 */
var reSet = function(fn, n) {
    try {

    } catch {
        
    } finally {
        
    }
}

const reS = reSet(fn, 3);

reS();

/***
 * 要求：
 * 1. 如果n-2次内成功, 只返回成功结果并且不执行n-2后面的次数(例子)
 * 2. 如果n次内失败，则重复调用重试函数
 * 3. 如果n次都没法成功, 则返回最后一次错误信息
 */
/**
 * 如何优化以下代码，同时保证高复用性和扩展性
 */
class Parent {
  login() {}
}

class ChildA extends Parent {
  login() {
    // 一段相同的逻辑
    console.log('do something before');

    // 一段 A 自己的逻辑
    console.log('do something for A');

    // 一段相同的逻辑
    console.log('do something after');
  }
}
// ChildB.prototype = new Parent()
class ChildB extends Parent {
  login() {
    // 一段相同的逻辑
    console.log('do something before');

    // 一段 B 自己的逻辑
    console.log('do something for B');

    // 一段相同的逻辑
    console.log('do something after');
  }
}

// 用法和效果，保持不变
const childA = new ChildA();
const childB = new ChildB();

childA.login();
childB.login();