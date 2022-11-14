const handleCharCount = (str: string): [string, number] => {
    let char = '';
    let count = 0;

    if (!str.length) return [char, count];

    let tempCount = 0;
    for (let i = 0; i < str.length; i++) {
        tempCount = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                tempCount++;
            }

            if (str[i] !== str[j] || j == str.length - 1) {
                if (tempCount > count) {
                    char = str[i];
                    count = tempCount;
                }

                if (i < str.length - 1) {
                    i = j - 1; 
                }
    
                break;
            }
        }
    }

    return [char, count];
}

console.log(handleCharCount("aaaaccccccddddd"));
console.log(handleCharCount("bbcddasda"))