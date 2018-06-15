/**
 * Created by JackDan9 on 2018/6/15.
 */

/**
 * Created by JackDan9 on 2018/6/15.
 * Responsive to screen size
 */

(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'resize';
    recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
            return;
        } else if (clientWidth < 420) {
            docEl.style.fontSize = 44 * (clientWidth / 320) + 'px';
        } else {
            docEl.style.fontSize = '100px';
        }
    };
    if (!doc.addEventListener) {
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);