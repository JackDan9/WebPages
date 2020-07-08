var lengthOfLongestSubstring = function (str) {
  if (str == null || str.length < 1) {
    return 0;
  }

  var charArr = str.split('');
  var resultLen = 0;
  var resultArr = [];
  for (var i = 0; i < charArr.length; i++) {
    // var resultArr = [];
    for (var j = i;  j < charArr.length; j++) {
      /**
       * ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
       */
      if(!(resultArr.indexOf(charArr[j]) === -1)) {
        break;
        // resultArr.push(charArr[j]);
        // resultLen = Math.max(resultLen, j - i);
      }
      resultArr.push(charArr[j]);
      resultLen = resultArr.length > resultLen ? resultArr.length : resultLen;
    }
  }

  return resultLen;
}

let a = lengthOfLongestSubstring('abcabcbb');
console.log(a);