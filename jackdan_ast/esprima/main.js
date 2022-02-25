// 

var arr = [
  { id: 1, value: '11', value1: '55' },
  { id: 1, value: '12' },
  { id: 2, value: '22' },
  { id: 2, value: '23' },
  { id: 2, value: '24' },
  { id: 3, value: '33' },
  { id: 3, value: '34' },
  { id: 4, value: '44' }
];
var _s = new Set();
arr.forEach((arrItem) => {
  var arrItemKeys = Object.keys(arrItem);
  arrItemKeys.forEach((itemKey) => {
    _s.add(itemKey);
  });
});
console.log(_s);
// arr.map((arrItem) => {
  // var arrItemKeys = Object.keys(arrItem);
  // console.log(arrItemKeys);
  // var _s = new Set(...[arrItem]);
  // console.log(_s)

  // arrItem.forEach((objItem) => {
  //   console.log(objItem);
  // });
// })