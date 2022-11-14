class Parent {
    constructor(name, hobby) {
        this.name = name;
        this.hobby = hobby;
    }

    print() {
        console.log("名字: " + this.name + ", " + "爱好: " + this.hobby);
    }
}

class Child extends Parent {
    constructor(name, hobby, age) {
        super(name, hobby);
        this.age = age;
    }

    print() {
        console.log("名字: " + this.name + ", " + "年纪: " +  this.age + ", " + "爱好: " + this.hobby);
    }
}

let child = new Child('Jack', 28, 'beauty');

child.print();

console.log(Child.__proto__ === Parent);
console.log(Child.prototype.__proto__ === Parent.prototype);
// console.log(Parent.prototype);