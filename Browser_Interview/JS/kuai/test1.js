/**
 * 
 * @param {Object} obj 
 * @param {String} path 
 * 
 * Example:
 *  obj = {a: {b: {c: 1}}}
 *  path = 'a.b.c';
 *  obj.a.b.c
 */
var handleObj = function(obj, path) {
    var pathArr = path.split('.');

    if(pathArr.length === 0) {
        return;
    }

    if(pathArr.length === 1) {
        return obj[pathArr[0]];
    }
    
    var index = 0;
    while(index < pathArr.length) {
        obj = obj[pathArr[index]];
        index++;
    }

    return obj;
}

var obj = {a: {b: {c: 1}}};
var path = 'a';

var result = handleObj(obj, path);
console.log(result);
