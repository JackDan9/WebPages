/**
|| =================================================================================
||
||	 Filename: 2992-添加元素.js
||	Description:
||	Problem Description:
||
||		在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组 
||		输入例子:
||		insert([1, 2, 3, 4], 'z', 2)
||
||		输出例子:
||		[1, 2, 'z', 3, 4]
||
||  Version:  1.0
||  
||       Created:   22/10/2016 08:13:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.splice
function insert(arr, item, index) {
     //复制数组
     var a = arr.slice(0);
     a.splice(index, 0, item);
     return a;
 }
// 2.slice+concat
function insert(arr, item, index) {
    return arr.slice(0,index).concat(item,arr.slice(index));
}
// 3.concat +splice
function insert(arr, item, index) {
    var newArr=arr.concat();
    newArr.splice(index,0,item);
    return newArr;
}
// 4.slice+splice
function insert(arr, item, index) {
    var newArr=arr.slice(0);
    newArr.splice(index,0,item);
    return newArr;
}
// 5.push.apply+splice
function insert(arr, item, index) {
    var newArr=[];
    [].push.apply(newArr, arr);
    newArr.splice(index,0,item);
    return newArr;
}
// 6.普通的迭代拷贝
function insert(arr, item, index) {
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    newArr.splice(index,0,item);
    return newArr;
}