/**
|| =================================================================================
||
||	 Filename: 2596-查找元素位置.js
||	Description:
||	Problem Description:
||		在数组 arr 中，查找值与 item 相等的元素出现的所有位置 
||		输入例子:
||		findAllOccurrences('abcdefabc'.split(''), 'a').sort()
||
||		输出例子:
||		[0, 6]
||
||  Version:  1.0
||  
||       Created:   22/10/2016 14:25:41
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.push()
function findAllOccurrences(arr, target) { 
	var temp = []; 
    arr.forEach(function(val,index){ 
        val !== target ||  temp.push(index); 
    }); 
    return temp; 
} 
// 2.push()
function findAllOccurrences(arr, target) {
    var a = [];
    for(var i = 0; i < arr.length; i++){
        if(target == arr[i])
            a.push(i);
    }
    return a;
}