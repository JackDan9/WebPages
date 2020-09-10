
function debounce(fn, timer) {
    let timerTemp = null;

    return function() {
        if(timerTemp) {
            clearTimeout(timerTemp);
        }
        timerTemp = setTimeout(fn, timer);
    }
}

