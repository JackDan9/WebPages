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
        return [];
    }

    if(pathArr.length === 1) {
        return obj[pathArr.length - 1];
    }
    
    depth_first_search(obj, result, 0)
}


var depth_first_search = function(obj, result, depth) {

}

var obj = {a: {b: {c: 1}}};
var path = 'a.b.c';

