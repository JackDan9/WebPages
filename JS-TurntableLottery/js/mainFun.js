/**
 * Created by JackDan9 on 2018/6/15.
 */


var rotate = document.getElementById('imgs');
var speed = vspeed = 0;
var x0 = y0 = t0 = x1 = y1 = t1 = null;

(function () {
    var lastTime = 0;

    var vendors = ['ms', 'moz', 'webkit', 'o']
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    };

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
})(); // Setup requestAnimationFrame when it is unavailable.

document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}); // prevent scrolling page


rotate.addEventListener('touchstart', function (e) {
    if (e.touches.length == 1) {
        x0 = e.targetTouches[0].clientX;
        y0 = e.targetTouches[0].clientY;
        t0 = new Date().getTime();
    }
});

rotate.addEventListener('touched', function (e) {
    var that = this;
    var l = 0;
    var angle = 0;
    var timerID = null;
    x1 = e.changedTouches[0].clientX;
    y1 = e.changedTouches[0].clientY;
    t1 = new Date().getTime();
    l = Math.sqrt(Math.pow(x1-x0, 2) + Math.pow(y1-y0, 2));
    speed = l/(t1-t0)*20;
    if (speed < 10) {
        return;
    }
    vspeed = 0.5;

    var roll = function () {
        angle += speed;
        that.style.transform = 'rotate(' + angle + 'deg)'; // 'rotateZ('
        switch (true) {
            case speed < -0.3:
                window.cancelAnimationFrame(timerID);
                return;
            case speed < 10 && vspeed > 0.1:
                speed -= vspeed;
                vspeed -= 0.03;
                break;
            default:
                speed -= vspeed;
                break;
        }
        timerID = window.requestAnimationFrame(roll);
    };
    roll();
});

document.getElementById('start-btn').addEventListener('click', function () {
    var angle = 0;
    var timerID = null;
    speed = (1 + Math.random()) * 50;
    vspeed = 0.5;

    var roll = function () {
        angle += speed;
        rotate.style.transform = 'rotateZ(' + angle + 'deg)';
        switch (true) {
            case speed < -0.3:
                window.cancelAnimationFrame(timerID);
                return;
            case speed < 10 && vspeed > 0.1:
                speed -= vspeed;
                vspeed -= 0.05;
                break;
            default:
                speed -= vspeed;
                break;
        }
        timerID = window.requestAnimationFrame(roll);
    };
    roll();
});

