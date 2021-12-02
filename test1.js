function test(fn, timer) {
    let flag = true;
    return function() {
        if(!flag) {
            return false;
        }
        setTimeout(() => {
            fn();
            flag = true;
        }, timer);
    }
}