class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(this.name + '岁数是' + this.age);
    }
}

class Child extends Parent {
    constructor(name, age, isYoung) {
        super(name, age);
        this.isYoung = isYoung;
    }

    print() {
        console.log(this.name + '岁数是, ' + this.age + 'isYoung, ' + this.isYoung);
    }
}

let child = new Child('Jackdan', 25, false);
console.log(child.print());

Child.__proto__ === Parent;
Child.prototype.__proto__ === Parent.prototype;

/**
 * 
 * @param {String} name 
 * @param {Number} age 
 */
function _Parent(name, age) {
    this.name = name;
    this.age = age;
}

_Parent.prototype.print = function () {
    console.log(this.name + '岁数is' + this.age);
}

/**
 * 
 * @param {String} name 
 * @param {Number} age 
 * @param {Boolean} isYoung 
 */
function _Child(name, age, isYoung) {
    _Parent.call(this, name, age);
    this.isYoung = isYoung;
}

/**
 * Temp 为过渡函数, 避免重复去调用Parent的构造函数
 * 
 * _Child.prototype = new Parent();
 * 调用一次
 * 
 * Parent.call(this, arguments);
 * 又调用了一次
 */
let Temp = function () { };
Temp.prototype = _Parent.prototype;

_Child.prototype = new Temp();
_Child.prototype.print = function () {
    console.log(this.name + ' 岁数是 ' + this.age + ' isYoung ' + this.isYoung)
}

let _child = new _Child('Jackdan', 26, false);
console.log(_child.print());