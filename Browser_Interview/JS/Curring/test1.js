function uncurring(fn) {
    return function(...args) {
        var ret = fn;

        for (let i = 0; i < args.length; i++) {
            ret = ret(args[i]); 
        }

        return ret;
    }
}


