Function.prototype.myCall = function(context) {
  var context = Object(context) || window;
  context.fn = this;

  var args = []
  
  for(var i = 0; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }

  result = eval('context.fn(' + args + ')');

  delete context.fn();
  return result;
}