Function.prototype._bind = function(ctx) {
    var self = this;

    var args = Array.prototype.slice.call(arguments, 1);

    function fNOP () {};

    function fBound() {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? ctx : this, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound();
}