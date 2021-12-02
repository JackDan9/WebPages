/**
 * 手写Promise
 * 手写Promise.all()
 * 手写继承，通过原型链
 */
// 原来的Promise
let promise = new Promise((resolve, reject) => {
    var a = 1;
    // resolve(a);
    reject(a);
})
promise.then((a) => {
    console.log(1);
    console.log(a);
}, (b) => {
    console.log(2);
    console.log(b);
})

promise.catch((c) => {
    console.log(3);
    console.log(c);
})

// 自己实现的
/**
 * 
 * @param {Function} fn 
 */
var _Promise = function (fn) {
    _this = this;
    _this._status = 'Pending';
    _this._result = '';
    fn(_this.resolve.bind(_this), _this.reject.bind(_this));
}

/**
 * 
 * @param {Parameter} result 
 */
_Promise.prototype.resolve = function (result) {
    _this = this;
    if (_this._status === 'Pending') {
        _this._status = 'fullfilled';
        _this._result = result;
    }
}

/**
 * 
 * @param {Parameter} result 
 */
_Promise.prototype.reject = function (result) {
    _this = this;
    if (_this._status === 'Pending') {
        _this._status = 'rejected';
        _this._result = result;
    }
}

/**
 * 
 * @param {Function} isResolve 
 * @param {Function} isReject 
 */
_Promise.prototype.then = function (isResolve, isReject) {
    _this = this;
    if (_this._status === 'fullfilled') {
        let _isPromise = isResolve(_this._result);
        if (_isPromise instanceof _Promise) {
            return _isPromise(_this._result);
        }
        return _this;
    } else if (_this._status === 'rejected' && arguments[1]) {
        let _isPromise = isReject(_this._result);
        if (_isPromise instanceof _Promise) {
            let error = new Error(_this._result);
            return _isPromise(error);
        }
        return _this;
    }
}

/**
 * 
 * @param {Function} isReject 
 */
_Promise.prototype.catch = function (isReject) {
    _this = this;
    if (_this._status === 'rejected') {
        let _isPromise = isReject(_this._result);
        if (_isPromise instanceof _Promise) {
            let error = new Error(_this._result);
            return _Promise(_this._result);
        }
        return _this;
    }
}

var promise1 = new _Promise(function (resolve, reject) {
    var a = 1;
    reject(a);
})
promise1.then((a) => {
    console.log(a);
}, (b) => {
    console.log(2);
    console.log(b);
})
promise1.catch((c) => {
    console.log(c);
})

/**
 * 手写Promise.all
 */
// 原来的Promise.all
const p1 = new Promise((resolve, reject) => {
    resolve('hello');
})
.then(result => result)
.catch(e => e);

const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了');
})
.then(result => result)
.catch(e => e);

const p3 = new Promise((resolve, reject) => {
    resolve('world');
}).then(result => result)
.catch(e => e);

Promise.all([p1, p2, p3])
    .then(result => console.log(result))
    .catch(e => console.log(e));

// 自己写的Promise.all
_Promise.all = function(arr) {
    
}