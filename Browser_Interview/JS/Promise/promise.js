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
let p1 = new Promise((resolve, reject) => {
    resolve('hello');
})

let p2 = new Promise((resolve, reject) => {
    reject('jackdan');
})

let p3 = new Promise((resolve, reject) => {
    resolve('world');
})

Promise.all([p1, p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log(err));


/**
 * 基于Promise是实现自己的Promise._all
 * @param {Promise Array} promisesArr 
 */
Promise._all = function (promiseArr) {
    if (!Array.isArray(promiseArr)) {
        throw new Error("Please give me a array!");
    } else {
        for (let i = 0; i < promiseArr.length; i++) {
            if (!(promiseArr[i] instanceof Promise)) {
                throw new Error("Please give me a promise!");
            }
        }

        return new Promise((resolve, reject) => {
            let _index = 0;
            let _len = promiseArr.length;
            let _results = new Array(_len);

            for (let j = 0; j < _len; j++) {
                promiseArr[j].then((value) => {
                    _index++;
                    _results[j] = value;
                    if (_index === _len) {
                        resolve(_results);
                    }
                }, (error) => {
                    let _err = new Error(error);
                    reject(_err);
                })
            }
        })
    }
}

/**
 * 基于自己实现的_Promise做操作
 * @param {Promise Array} promiseArr 
 */
_Promise._all = function (promiseArr) {
    if (!Array.isArray(promiseArr)) {
        throw new Error('You need give me a array');
    } else {
        let _len = promiseArr.length;
        for (let i = 0; i < _len; i++) {
            if (!(promiseArr[i] instanceof _Promise)) {
                throw new Error('You need give me a _promise');
            }
        }

        return new _Promise((resove, reject) => {
            let _index = 0;
            let _results = new Array(len);
            for(let j = 0; j < _len; j++) {
                promiseArr[j].then((value) => {
                    _index++;
                    _results[j] = value;
                    if(_index === _len) {
                        resolve(_results);
                    }
                }, (error) => {
                    let err = new Error(error);
                    reject(err);
                });
            }
        });
    }
};

let _p1 = new _Promise((resolve, reject) => {
    resolve('hello');
})

let _p2 = new _Promise((resolve, reject) => {
    reject("jackdan");
})

_Promise._all([_p1, _p2]);