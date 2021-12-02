// input: 无符号的整数
// Output: 转换成2进制数, 2进制数中1的个数。

function handleBinary(num) {
    var number = 0;
    while(num > 0) {
        var index = num % 2;
        num = Math.floor(num / 2);
        if(index === 1) {
            number = number + 1;
        }
    }
    return number;
}

