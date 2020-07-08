/**
 * fe: 'abcde'
 * rb: '123456789'
 * weeks: 20
 * result: 
 * @param {*} fe 
 * @param {*} rb 
 * @param {*} weeks 
 */
function handleZb(fe, rb, weeks) {
    var feArr = fe.split('');
    var rbArr = rb.split('');
    var feLen = feArr.length;
    var rbLen = rbArr.length;

    var indexFeLen = weeks - feLen;
    var indexRbLen = weeks - rbLen;

    var result = [];
    
    while(indexFeLen > feLen) {
        feArr = feArr.concat(feArr);
        feLen = feArr.length;
        indexFeLen = weeks - feLen;
    }

    if(0 < indexFeLen <= feLen) {
        feArr = feArr.concat(feArr.slice(0, indexFeLen));
    }
    
    while(indexRbLen > rbLen) {
        rbArr = rbArr.concat(rbArr);
        rbLen = rbArr.length;
        indexRbLen = weeks - rbLen;
    }
    
    if(0 < indexRbLen <= rbLen) {
        rbArr = rbArr.concat(rbArr.slice(0, indexRbLen));
    }

    for(var i = 0;  i < weeks; i++) {
        result.push(feArr[i]+rbArr[i])
    }

    return result;
}

var result = handleZb('abcdefghijklmnopquvwxyz', '123456789', 20);
console.log(result);

