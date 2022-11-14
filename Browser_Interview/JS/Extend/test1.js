function Parent(name, hobby) {
    this.name = name;
    this.hobby = hobby;
}

Parent.prototype.print = function() {
    console.log("姓名: " + this.name + ", " + "爱好: " + this.hobby);
}

function Child(name, age, hobby) {
    Parent.call(this, name, hobby);
    this.age = age;
}


function Temp() {};

Temp.prototype = Parent.prototype;

Child.prototype = new Temp();

Child.prototype.print = function() {
    console.log("姓名: " + this.name + "; \n"  + "年纪: " + this.age + "; \n" + "爱好: " + this.hobby);
}



let child = new Child('Jack', 28, 'beauty');
child.print();