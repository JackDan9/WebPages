// const array1 = [10, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// const reducer1 = (accumulator, currentValue, currentIndex, array) => accumulator + currentValue;

// const reducer2 = function(accumulator, currentValue, currentIndex, array) {
//     return accumulator + currentValue;
// }

// const reducer3 = function(accumulator, currentValue, currentIndex, array) {
//     return accumulator - currentValue;
// }
// // console.log(array1.reduce(reducer));

// // console.log(array1.reduce(reducer, 5));

// console.log(array1.reduce(reducer3));


if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, thisArg) {
        return this.reduce(function(mappedArray, currentValue, index, array) {
            mappedArray[index] = callback.call(thisArg, currentValue, index, array);
            return mappedArray;
        }, []);
    };
}

var a = [1, 2, , 3].mapUsingReduce(
    (currentValue, index, array) => currentValue + index + array.length
);

console.log(a);