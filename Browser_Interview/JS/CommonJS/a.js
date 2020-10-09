console.log('a starting');
exports.done = false;
const b = requre('./b.js');
exports.done = true;
console.log('a done is %s, b done is %s', a.done, b.done);