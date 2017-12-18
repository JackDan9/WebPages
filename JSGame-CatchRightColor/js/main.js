
var time = document.querySelector('.time');
var scoring = document.querySelector('.scoring');
var show = document.querySelector('.show');
var list = document.querySelectorAll('.list>p');
var colors = ['red', 'yellow', 'blue', 'green', 'black'];
var fonts = ['红', '黄', '蓝', '绿', '黑'];
var times = 20;
var score = 0;
var colorIndex = 0;
var timer = null;

function randomFunction() {
    var random = Math.floor(Math.random() * 5);
    return random;
}

function updateShow() {
    colorIndex = randomFunction();
    var fontIndex = randomFunction();
    show.innerHTML = fonts[fontIndex];
    show.style.color = colors[colorIndex];
}
updateShow();

function randomArrayFunction() {
    var arr = [];
    while(arr.length < colors.length) {
        var bol = true;
        var rand = randomFunction();
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] == rand) {
                bol = false;
                break;
            } else {
                bol = true;
            }
        }
        if (bol) {
            arr.push(rand);
        }
    }
    return arr;
}

function updateList() {
    var color = randomArrayFunction();
    var font = randomArrayFunction();
    for(var i = 0; i < list.length; i++) {
        list[i].innerHTML = fonts[font[i]];
        list[i].style.color = colors[color[i]];
        list[i].fontIndex = font[i];
    }
}
updateList();

var flag = false;
for(var i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        if(this.fontIndex == colorIndex && times != 0) {
            score += 1;
            scoring.innerHTML = 'Success: ' + score;
            updateShow();
            updateList();
            flag = true;
        }
    }
}

timer = setInterval(function () {
    if(flag) {
        if(times == 0) {
            flag = false;
            alert('Game Over!');
        } else {
            times --;
            time.innerHTML = 'Time left:' + times;
        }
    }
}, 1000)