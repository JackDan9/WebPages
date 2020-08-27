# Promise
## 定义
- Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。
- 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

- Promise对象有以下两个特点。

- （1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

- （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

``` javascript
const promise = new Promise((resolve, reject) => {
    if (/* 异步操作成功 */) {
        resolve(value)
    } else {
        reject(error);
    }
})
```

``` javascript
var promise1 = new Promise((resolve, reject) => {
    if (/* 异步操作成功 */) {
        resolve(value);
    } else {
        reject(error);
    }
});

promose1.then(function() {
    // success
}, function() {
    // error
})
```

## ES5原生实现

``` javascript
var _Promise = function(resolver) {
    var _this = this;
    _this._status = 'pending';
    _this._result = '';
    resolver(_this.resolve.bind(_this), _this.reject.bind(_this));
}

_Promise.prototype.resolve = function(result) {
    var _this = this;
    if(_this._status === 'pending') {
        _this._status = 'fullfilled';
        _this._result = result;
    }
    return _this;
}

_Promise.prototype.reject = function(reject) {
    var _this = this;
    if(_this._status === 'pending') {
        _this._status = 'rejected';
        _this._result = result;
    }
    return _this;
}

_Promise.prototype.then = function(isResolve, isReject) {
    var _this = this;
    if(_this._status === 'fullfilled') {
        var _isPromise = isResolve(_this._result);
        if(_isPromise instanceof _Promise) {
            return _isPromise(_this._result);
        }
        return _this;
    } else if(_this._status === 'rejected' && arguments[1]) {
        var _err = TypeError(_this._result);
        var _isPromise = isReject(_err);
        if(_isPromise instanceof _Promise) {
            return _isPromise(_err);
        }
        return _this;
    }
}

_Promise.prototype.catch = function(isReject) {
    var _this = this;
    if(_this._status === 'rejected') {
        var _err = TypeError(_this._result);
        var _isPromise = isReject(_err);
        if(_isPromise instanceof _Promise) {
            return isPromise(_err);
        }
        return _this;
    }
}

var promise1 = new _Promise(function(resolve, reject) {
    var a = 10;
    resolve(10);
})
```
