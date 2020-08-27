var reSet = function(fn, n) {
    var i = 0;
    var fn = Object(fn) || window;
    
    return function() {
        while(i < n) {
            
            i++;
        }
    }
}

// reSet(3);
var fn = function () {
    console.log(1);
}

var reS = reSet(fn, 3);

reS();