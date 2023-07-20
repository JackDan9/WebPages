function hex2rgb(hex) {
    // 开始判断如果是非16进制格式的数，原始输入返回
    // 合理的16进制0-f
    // 第一步
    // 如果存在小于0的数或者大于f的数就可以返回了
    // indexOf可以判断
    // 正则可以判断(我可以使用正则)
    let res = /^#([0-9A-Fa-f]{3}){1,2}$/;

    if (!res.test(hex)) {
        return hex;
    }

    // 第二步 补全
    // #abc = #aabbcc
    // #aaa = #aaaaaa
    console.log(hex.length);
    if (hex.length === 4) {
        hex = hex.replace(/([0-9A-Fa-f])/g, "$1$1");
    }
    // 前面两位 - start
    // 中间两位 - middle
    // 后面两位 - end

    const start = parseInt(hex.substring(1, 3), 16);
    const middle = parseInt(hex.substring(3, 5), 16);
    const end = parseInt(hex.substring(5, 7), 16);

    return `rgb(${start}, ${middle}, ${end})`;
}

console.log(hex2rgb("#abc"));

