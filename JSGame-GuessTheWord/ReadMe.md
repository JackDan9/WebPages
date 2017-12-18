---
title: JSGame-GuessTheWord
tags: word, guess, game
authors: jackdan9
---
- **给出`words`的长度**:
```
var words = [
    "javascript",
    "amazing",
    "crazy"
];
```

------

- **`words`显示区域**:
```
<div id="show"></div>
```

------

- **`words`随机给出**:
```
var word = words[Math.floor(Math.random() * words.length)];
```
- `Math.floor()`方法是执行的是向下取整计算，它返回的是**小于**或者**等于**函数参数，并且与之最接近的整数。
- `Math.random()`方法是返回`0.0 - 1.0`之间的一个伪随机数。

------

- **没有匹配的字符用`-`**:
```
var answerArray = [];
for(var i = 0; i < word.length; i++) {
    answerArray[i] = "-";
}
```