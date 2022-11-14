// 3. // 读取一个文件，打印文件每一行的第 3 个字符



const fs = require('fs')

try {
    fs.readFileSync('/Users/jackdan/test.txt', 'utf8' , (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const lines = data.split(/\n/);

        if(!lines.length) return;

        let res = '';
        for(let i = 0; i < lines.length; i++) {
            res = lines[i].substring(2, 3);
        }

        return res;
    })
} catch (err) {
    console.error(err);
}
