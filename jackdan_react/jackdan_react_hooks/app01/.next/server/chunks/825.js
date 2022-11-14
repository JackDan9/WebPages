"use strict";
exports.id = 825;
exports.ids = [825];
exports.modules = {

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6211);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
var _class, _descriptor;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


;
let Store = (_class = class Store {
  constructor() {
    _initializerDefineProperty(this, "count", _descriptor, this);

    (0,mobx__WEBPACK_IMPORTED_MODULE_0__.makeObservable)(this);
  }

  addCount() {
    this.count++;
  }

  reduceCount() {
    this.count--;
  }

  get countNum() {
    return this.count;
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "count", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _applyDecoratedDescriptor(_class.prototype, "addCount", [mobx__WEBPACK_IMPORTED_MODULE_0__.action], Object.getOwnPropertyDescriptor(_class.prototype, "addCount"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "reduceCount", [mobx__WEBPACK_IMPORTED_MODULE_0__.action], Object.getOwnPropertyDescriptor(_class.prototype, "reduceCount"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "countNum", [mobx__WEBPACK_IMPORTED_MODULE_0__.computed], Object.getOwnPropertyDescriptor(_class.prototype, "countNum"), _class.prototype)), _class);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Store());

/***/ })

};
;