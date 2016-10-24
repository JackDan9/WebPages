/**
|| =================================================================================
||
||	 Filename: 3737-移除数组中的元素.js
||	Description:
||	Problem Description:
||
||		移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回 
||		输入例子:
||		removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2)
||
||		输出例子:
||		[1, 3, 4]
||
||  Version:  1.0
||  
||       Created:   21/10/2016 21:13:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function removeWithoutCopy(arr, item) {
     for(var i = 0; i < arr.length; i++){
         if(arr[i] == item){
             //splice方法会改变数组长度，
			 //当减掉一个元素后，
			 //后面的元素都会前移，
			 //因此需要相应减少i的值
             arr.splice(i,1);
             i--;
         }
     }
     return arr;
 }