// const handler = {
//     get(target, key) {
//         if (key == 'isProxy') {
//             return true;
//         }

//         const prop = target[key];

//         // return if property not found
//         if (typeof prop == 'undefined') {
//             return;
//         }

//         // set value as proxy if object
//         if (!prop.isProxy && typeof prop === 'object') {
//             target[key] = new Proxy(prop, handler);
//         }

//         return target[key];
//     },
//     set(target, key, value) {
//         console.log('Setting', target, `.${key} to equal`, value);

//         // todo: call callback

//         target[key] = value;
//         return true;
//     }
// };

// const test = {
//     string: "data",
//     number: 231321,
//     object: {
//         string: "data",
//         number: 32434
//     },
//     array: [
//         1, 2, 3, 4, 5
//     ],
// };

// const proxy = new Proxy(test, handler);

// console.log(proxy);
// console.log(proxy.string);


// var validator = {
//     get(target, key) {
//       if (typeof target[key] === 'object' && target[key] !== null) {
//         return new Proxy(target[key], validator)
//       } else {
//         return target[key];
//       }
//     },
//     set (target, key, value) {
//       console.log(target);
//       console.log(key);
//       console.log(value);
//       return true
//     }
//   }


//   var person = {
//         firstName: "alfred",
//         lastName: "john",
//         inner: {
//           salary: 8250,
//           Proffesion: ".NET Developer"
//         }
//   }
//   var proxy = new Proxy(person, validator)
//   proxy.inner.salary = 'foo'
//   console.log(proxy);
//   console.log(proxy.inner);
//   console.log(proxy.inner.salary);

var validator = {
    set(target, key, value) {
        console.log(target);
        console.log(key);
        console.log(value);
        // if (isObject(target[key])) {

        // }
        return true
    }
}


var person = {
    firstName: "alfred",
    lastName: "john",
    inner: {
        salary: 8250,
        Proffesion: ".NET Developer"
    }
}
var proxy = new Proxy(person, validator)
// proxy.inner.salary = 'foo'
proxy.firstName = 'aaaaa';