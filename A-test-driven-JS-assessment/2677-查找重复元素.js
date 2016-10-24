/**
|| =================================================================================
||
||	 Filename: 2677-查找重复元素.js
||	Description:
||	Problem Description:
||
||		找出数组 arr 中重复出现过的元素 
||		输入例子:
||		duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()
||
||		输出例子:
||		[1, 3, 4]
||
||  Version:  1.0
||  
||       Created:   22/10/2016 14:11:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function duplicates(arr) {
	var arr1 = new Array();
	for(var i = 0; i < arr.length - 1; i++)
	{
		for(var j = i+1; j < arr.length; j++)
		{
			if(arr[i] == arr[j] && arr1.indexOf(arr[i]) == -1)
			{
				arr1.push(arr[i]);
				break;
			}
		}
	}
	return arr1.sort();
}