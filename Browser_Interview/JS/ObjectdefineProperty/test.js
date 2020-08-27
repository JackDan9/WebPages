'use strict';

const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
});

object1.property1 = 77;

console.log(object1.property1);
// TypeError: Cannot assign to read only property 'property1' of object '#<Object>'