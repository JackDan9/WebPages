// 写个转换函数，把一个JSON对象的key从横杠形式（Pascal）转换到小驼峰形式，如：

// {
//   user_name: 'Tony',
//   current_position: 'developer',
//   age: 45
// }
// 将被转换为:

// {
//   userName: 'Tony',
//   currentPosition: 'developer',
//   age: 45
// }


function transferKey(keyArr) {
    let _res = keyArr[0];
    for(let i = 1; i < keyArr.length; i++) {
        _res = _res.concat(keyArr[i].replace(keyArr[i][0], keyArr[i][0].toUpperCase()));
    }

    return _res;
}

function pascalToCamel(data) {
    if (Object.prototype.toString.call(data).slice(8, -1) !== "Object") {
        return;
    } 

    let result = {};

    for (k in data) {
        if (k.indexOf("_") !== -1) {
            let _kArr = k.split("_");
            let _k = transferKey(_kArr);
            result[_k] = data[k];
        } else {
            result[k] = data[k];
        }
    }
    
    return result;
}

console.log(transferPascal({
    user_name: 'Tony',
    current_position: 'developer',
    my_name_is: 'Jack',
    age: 45
}));


