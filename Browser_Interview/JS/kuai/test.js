//line=readline()
//print(line)
//console.log('Hello World!');
function handleZb(fe, rb, weeks) {
    var feLen = fe.length;
    var rbLen = rb.length;
    
    var indexFeLen = weeks - feLen;
    var indexRbLen = weeks - rbLen;
    
    while(indexFeLen > feLen) {
        fe.concat(fe);
        feLen = fe.length;
        indexFeLen = weeks - feLen; 
    }
    if(indexFeLen <= feLen) {
        fe.concat(fe.substring(0, indexFeLen));
    }
    
    while(indexRbLen > rbLen) {
        rb.concat(rb);
        rbLen = rb.length;
        indexRbLen = weeks - rbLen;
    }
    
    if(indexRbLen <= rbLen) {
        rb.concat(fe.substring(0, indexRbLen));
    }
    // console.log(fe);
    // console.log(rb);
    return fe;
    var result = [];
}

var fe = handleZb('abcde', '123456789', 20);


