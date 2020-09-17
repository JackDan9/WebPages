var handle = function(s) {
    var _len = s.length;
    if(_len % 2 === 1) return false;

    var map = new Map();
    map.set('{', '}');
    map.set('(', ')');
    map.set('[', ']');

    var stack = [];

    for(let i = 0; i < _len; i++) {
        let item = s[i];
        if(map.has(item)) {
            stack.push(item);
        } else {
            let last = stack[stack.length - 1];
            if(map.get(last) === item) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}

var a = "{[]}";
console.log(handle(a));
