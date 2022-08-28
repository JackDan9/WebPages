Function.prototype.myBind = function(context) {
  var self = this;

  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
}


function LaterBooler() {
  this.count = 1;
}

LaterBooler.prototype.bloom = function () {
  global.setTimeout(this.declare.myBind(this), 2000);
}

LaterBooler.prototype.declare = function () {
  console.log('bobo called number is: ' + this.count + ' times');
}

var boomer = new LaterBooler;

boomer.bloom();