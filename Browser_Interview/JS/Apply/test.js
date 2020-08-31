Function.prototype.myApply = function(context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  if(!arr) {
    result = context.fn();
  } else {
    var args = [];
    for(var i = 0; i < arr.length; i++) {
      args.push('[' + arr[i] + ']');
    }

    result = eval('context.fn('+args+')');
  }

  delete context.fn();
  return result;
}