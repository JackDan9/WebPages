/**
|| =================================================================================
||
||	 Filename: 4159-移除数组中的元素.js
||	Description:
||	Problem Description:
||		移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组 
||		输入例子:
||		remove([1, 2, 3, 4, 2], 2)
||
||		输出例子:
||		[1, 3, 4]
||
||  Version:  1.0
||  
||       Created:   21/10/2016 20:20:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.splice()
function remove(arr,item){
    var newarr = arr.slice(0);
    for(var i=0;i<newarr.length;i++){
        if(newarr[i] == item){
            newarr.splice(i,1);
            i--;
        }
    }
    return newarr;
}
// 2.push()
function remove(arr,item){
    var newarr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] != item){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
// 2.push()
function remove(arr,item){
    var newarr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i] == item)continue;
       newarr.push(arr[i]);
    }
    return nawarr;
}
// 3 y.prototype.filter() 
function remove(arr,item){
    return arr.filter(function(ele){
         return ele != item;
    })
}