/**
|| =================================================================================
||
||	 Filename: 2818-计数.js
||	Description:
||	Problem Description:
||
||		统计数组 arr 中值等于 item 的元素出现的次数 
||		输入例子:
||		count([1, 2, 4, 4, 3, 4, 3], 4)
||
||		输出例子:
||		3
||
||  Version:  1.0
||  
||       Created:   22/10/2016 14:06:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function count(arr, item) {
	var n = 0;
	for(var i=0; i<arr.length; i++)
	{	
		if(arr[i] == item)
			n++;
	}
	return n;
}