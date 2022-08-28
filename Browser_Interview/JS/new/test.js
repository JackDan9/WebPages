function HandSomePerson (name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
}

const person1 = new HandSomePerson('jackdan', 183, 95);
console.log(person1.name);


// ```md
// 1. 创建一个空的简单 JavaScript 对象（即{}）；
// 2. 为步骤 1 新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
// 3. 将步骤 1 新创建的对象作为this的上下文 ；
// 4. 如果该函数没有返回对象，则返回this。
// ```

function _new(Fn, ...args) {
    // var obj = {};
    // obj.__proto__ = Fn.prototype;
    var obj = Object.create(Fn);
    var res = Fn.apply(obj, args);

    return res instanceof Object ? res : obj;
}