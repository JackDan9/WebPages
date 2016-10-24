
/**
|| =================================================================================
||
||	 Filename: 5371-查找数组元素位置.js
||	Description:
||	Problem Description:
||
||  找出元素 item 在给定数组 arr 中的位置 
||  输出描述:
||  如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
||
||  输入例子:
||  indexOf([ 1, 2, 3, 4 ], 3)
||
||  输出例子:
||  2
||
||  Version:  1.0
||  
||       Created:   21/10/2016 20:13:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function indexOf(arr, item) { 
  if (Array.prototype.indexOf){ 
      return arr.indexOf(item); 
  } else { 
      for (var i = 0; i < arr.length; i++){ 
          if (arr[i] === item){ 
              return i; 
          } 
      } 
  }      
  return -1; 
} 