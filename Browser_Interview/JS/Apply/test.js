Function.prototype.myApply = function(context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  let result = null;

  if(!arr) {
    result = context.fn();
  } else {
    // var args = [];
    // for(var i = 0; i < arr.length; i++) {
    //   args.push('[' + arr[i] + ']');
    // }

    result = eval('context.fn('+arr+')'); // 替换方案 eval存在脚本攻击的可能

  }

  delete context.fn();
  return result;
}

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.myApply(null, numbers);
console.log(max);