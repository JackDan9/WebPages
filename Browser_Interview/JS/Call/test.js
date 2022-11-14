Function.prototype._call = function(context) {
  var context = Object(context) || window;
  context.fn = this;

  var args = []
  
  for(var i = 0; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }

  let result = eval('context.fn(' + args + ')');

  delete context.fn();
  return result;
}

// test
// 'use strict';
var helloWords = "hello world";
// let obj = {
//   helloWords: "hello world"
// };

function hello() {
  console.log(this);
  console.log('Please say something: ', this.helloWords);
}

hello._call();
