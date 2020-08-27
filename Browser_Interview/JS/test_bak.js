// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // var person = new Person('dandan', 25);
// var person = {};

// person.__proto__ = Person.constructor.prototype;


// console.log(person);


// var Person = (name, age) => {
//     this.name = name;
//     this.age = age;
// }

// var person = new Person('dandan', 25);

// console.log(person); // TypeError: Person is not a constructor



// for(var i = 0; i < 10; i++) {
//     (function(i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 500)
//     })(i);
// }

// console.log(typeof(NaN));

// var b = 2.2;
// console.log(typeof(b) === "number");
// console.log(b/1 === b);
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}

var b = 2e+10 + 1;
console.log(parseInt(b, 10) === b);