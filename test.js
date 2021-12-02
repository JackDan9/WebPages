/**
 * sum(1)(2,3)(4).sumof()
 * 输出 10
 */

var sum = function() {
    console.log(arguments);
    return function(arguments) {
        console.log(arguments);
        return function(arguments) {
            console.log(arguments);
        }
    }
}

sum(1)(2,3)(4);