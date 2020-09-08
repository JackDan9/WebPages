/**
 * sum(1)(2,3)(4).sumof()
 * 
 * 输出10
 */
// var sum = function () {
//     var args = [];
//     for (var i = 0; i < arguments.length; i++) {
//         args.push(arguments[i]);
//     }

//     return function () {
//         var args1 = [];
//         for (var i = 0; i < arguments.length; i++) {
//             args1.push(arguments[i]);
//         }

//         return function () {
//             var args2 = [];
//             for (var i = 0; i < arguments.length; i++) {
//                 args2.push(arguments[i]);
//             }

//             return {
//                 sumof: function () {
//                     console.log(eval(args.join("+")) + eval(args1.join("+")) + eval(args2.join("+")));
//                 }
//             }
//         }
//     }
// }

function sum(...rest) {
    return (...rest1) => {
        return (...rest2) => {
            var sumAll = (a, b) => a + b
            return {
                sumof: () => {
                    console.log(rest.reduce(sumAll) + rest1.reduce(sumAll) + rest2.reduce(sumAll))
                }
            }
        }
    }
}

sum(1)(2, 3)(4).sumof();