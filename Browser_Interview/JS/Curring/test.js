/**
 * 
 */

var curring = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function() {
        if (arguments.length === 0) {
            return fn.apply(this, args); // 当没有参数时
        } else {
            [].push.apply(args, arguments); // 传入参数， 保存参数
            return arguments.callee;
        }
    }
}

var addCount = (function() {
    var count = 0;
    return function() {
        for (let i = 0; i < arguments.length; i++) {
            count += arguments[i];
        }

        return count;
    };
})();

var addCountFunc = curring(addCount, 100);
addCountFunc(200);
addCountFunc(300);

console.log(addCountFunc());