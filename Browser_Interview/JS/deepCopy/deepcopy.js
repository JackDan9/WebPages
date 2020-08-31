function deepCopy(oldObj) {
  var newObj = oldObj;
  if (oldObj && typeof oldObj === 'object') {
    newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
    for (var i in oldObj) {
      newObj[i] = deepCopy(oldObj[i]);
    }
  }
  return newObj;
}

// var a = {a: {b: {c: 1}}};

// var b = deepCopy(a);

// b.a.b.c = 3;
// console.log(b);
// console.log(a);