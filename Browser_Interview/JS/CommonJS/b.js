console.log('b starting');
exports.done = false;
const a = require('./a.js');
console.log('a console done %s', a.done);
exports.done = true;