// "{}[]()" true
// "{[}]" false

// ][(])} false

function handleString(str) {
    var arr = str.split('');
    var len = arr.length;
    var index = 0;
    
    while(index < len) {
        switch(arr(index)) {
            case '{':
                
            case '[':

            case '(':
            default:
                return false;
        }
    }
}