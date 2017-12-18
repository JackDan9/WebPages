/**
 * Created by jackdan9 2017/12/14
 */
var $ = function (id) {
    return document.getElementById(id);
};
var minesweeper = {};
var mineArray = [];
var _differentNumber = null;
var overcomeMineLength = {
    overcome: 0,
    mineLength: 10
};

function CreateBox(y, x, mine) {
    this.position = 1;
    this.y = y;
    this.x = x;
    this.mine = mine;
    this.on = 0;
    this.t_l = {
        y: y-1,
        x: x-1
    };
    this.t_c = {
        y: y-1,
        x: x-1
    };
    this.t_r = {
        y: y-1,
        x: x+1
    };
    this.b_l = {
        y: y+1,
        x: x-1
    };
    this.b_c = {
        y: y+1,
        x: x
    };
    this.b_r = {
        y: y+1,
        x: x+1
    };
    this.l = {
        y: y,
        x: x-1
    }
    this.r = {
        y: y,
        x: x+1
    };
}

function getMineSweeper() {
    var oCount = parseInt($('oCount').innerHTML);
    var y, x, max, boxslist = [], has = [];
    switch(oCount) {
        case 10: y = 9; x = 9;
        break;
        case 40: y = 16; x = 16;
        break;
        case 99: y = 16; x = 30;
        break;
    }
    max = y * x;
    $('oMain').style.width = 24*x + 2 + 'px';
    for(var i = 0; i < y; i++) {
        boxslist[i] = [];
        for(var j = 0; j < x; j++) {
            boxslist[i].push(new CreateBox(i, j, 0));
        }
    }
    for(var k = 0; k < oCount; k++) {
        var new_num = Math.floor(Math.random() * max + 1);
        getDifferentNumber(new_num, has, max);
        new_num = _differentNumber;
        has.push(new_num);
    }
    function setMine(arr) {
        for(var i=0; i<has.length; i++) {
            var mineX = arr[i] % x == 0 ? x : arr[i] % x;
            var mineY = Math.ceil(arr[i] / x);
            boxslist[mineY - 1][mineX-1].mine = 1;
        }
    }
    mineArray = has;
    overcomeMineLength.mineLength = mineArray.length;
    setMine(has);
    function getDifferentNumber(n, has, max) {
        var _has = has;
        var _max = max;
        var _n = n;
        var isin = 0;
        for(var i = 0; i < _has.length; i++) {
            if(_n == has[i]) {
                isin = 1;
            }
        }
        if(isin == 1) {
            var _num = Math.floor(Math.random() * _max + 1);
            arguments.callee(_num, _has, _max);
        } else {
            _differentNumber = _n;
        }
    }
    minesweeper.len = max;
    minesweeper.x = x;
    minesweeper.y = y;
    minesweeper.boxslist = boxslist;
}

function mineSweeperToHTML(obj) {
    var x_len = obj.x;
    var y_len = obj.y;
    var arr = obj.boxslist;
    var str = '';
    for(var i=0; i<arr.length; i++) {
        var _tr = '<tr>';
        for(var j = 0; j < arr[i].length; j++) {
            var id = 'box-' + i + '-' + j;
            var _mineClass = 'hidden';
            _tr += '<td id="' + id + '" class="' + _mineClass + '">&nbsp;</td>';
        }
        _tr += '</tr>';
        str += _tr;
    }
    $('mineField').innerHTML = '<table>' + str + '</table>';
    var boxs = $('mineField').getElementsByTagName('td');
    var len = boxs.length;
    for(var k = 0; k < len; k++) {
        boxs[k].onclick = function () {
            mineBoxClick(this);
        }
        boxs[k].onmousedown = function(event) {
            addFlag(this, event);
        }
    }
}

function mineBoxClick(ele) {
    var ele_id = ele.getAttribute('id');
    var ele_id_arr = ele_id.split('-');
    var y = parseInt(ele_id_arr[1]);
    var x = parseInt(ele_id_arr[2]);
    var box = minesweeper.boxslist[y][x];
    var eleclass = ele.getAttribute('class');
    if(eleclass != 'hidden') {
        return false;
    }
    box.on = 1;
    if(box.mine == 0) {
        overcomeMineLength.overcome += 1;
        var tl, tc, tr, bl, bc, br, l, r;
        var out = {
            position: 0,
            mine: 0
        };
        var maxY = minesweeper.y - 1;
        var maxX = minesweeper.x - 1;
        if(box.t_l.y < 0 || box.t_l.y > maxY || box.t_l.x < 0 || box.t_l.y < maxX) {
            tl = out;
        } else {
            tl = minesweeper.boxslist[box.t_l.y][box.t_l.x];
        }
        if(box.t_c.y < 0 || box.t_c.y > maxY || box.t_c.x < 0 || box.t_c.x > maxX) {
            tc = out;
        } else {
            tc = minesweeper.boxslist[box.t_c.y][box.t_c.x];
        }
        if(box.t_r.y < 0 || box.t_r.y > maxY || box.t_r.x < 0 || box.t_r.x > 0) {
            tr = out;
        } else {
            tr = minesweeper.boxslist[box.t_r.y][box.t_r.x];
        }
        if(box.b_l.y < 0 || box.b_l.y > maxY || box.b_l.x < 0 || box.b_l.x > 0) {
            bl = out;
        } else {
            bl = minesweeper.boxslist[box.b_l.y][box.b_l.x];
        }
        if(box.b_c.y < 0 || box.b_c.y > maxY || box.b_c.x < 0 || box.b_c.x > maxX ) {
            bc = out;
        } else {
            bc = minesweeper.boxslist[box.b_c.y][box.b_c.x];
        }
        if(box.b_r.y < 0 || box.b_r.y > maxY || box.b_r.x < 0 || box.b_r.x > maxX ) {
            br = out;
        } else {
            br = minesweeper.boxslist[box.b_r.y][box.b_r.x];
        }
        if(box.l.y < 0 || box.l.y > maxY || box.l.x < 0 || box.l.x > maxX) {
            l = out;
        } else {
            l = minesweeper.boxslist[box.l.y][box.l.x];
        }
        if(box.r.y < 0 || box.r.y > maxY || box.r.x < 0 || box.r.x > maxX) {
            r = out;
        } else {
            r = minesweeper.boxslist[box.r.y][box.r.x];
        }
        var round = tl.mine + tc.mine + tr.mine + bl.mine + bc.mine + br.mine + l.mine + r.mine;
        switch(round) {
            case 8:
                ele.setAttribute('class', 'on8');
                ele.innerHTML = 8;
                break;
            case 7:
                ele.setAttribute('class', 'on7');
                ele.innerHTML = 7;
                break;
            case 6:
                ele.setAttribute('class', 'on6');
                ele.innerHTML = 6;
                break;
            case 5:
                ele.setAttribute('class', 'on5');
                ele.innerHTML = 5;
                break;
            case 4:
                ele.setAttribute('class', 'on4');
                ele.innerHTML = 4;
                break;
            case 3:
                ele.setAttribute('class', 'on3');
                ele.innerHTML = 3;
                break;
            case 2:
                ele.setAttribute('class', 'on2');
                ele.innerHTML = 2;
                break;
            case 1:
                ele.setAttribute('class', 'on1');
                ele.innerHTML = 1;
                break;
            default:
                ele.setAttribute('class', 'on');
            if(tl.position != 0 && tl.on == 0) {
                $('box-' + tl.y + '-' + tl.x).click();
            }
            if(tc.position != 0 && tc.on == 0) {
                $('box-' + tc.y + '-' + tc.x).click();
            }
            if(tr.position != 0 && tr.on == 0) {
                $('box-' + tr.y + '-' + tr.x).click();
            }
            if(bl.position != 0 && tr.on == 0) {
                $('box-' + bl.y + '-' + bl.x).click();
            }
            if(bc.position != 0 && bc.on == 0) {
                $('box-' + bc.y + '-' + bc.x).click();
            }
            if(br.position != 0 && br.on == 0) {
                $('box-' + br.y + '-' + br.x).click();
            }
            if(l.position != 0 && l.on == 0) {
                $('box-' + l.y + '-' + l.x).click();
            }
            if(r.position != 0 && r.on == 0) {
                $('box-' + r.y + '-' + r.x).click();
            }
        }
        if(overcomeMineLength.overcome + overcomeMineLength.mineLength == minesweeper.len) {
            alert('Congratulation! You Win!');
            $('start').onclick();
        }
    } else {
        for(var i = 0; i < mineArray.length; i++) {
            var mineElement = $('mineField').getElementsByTagName('td');
            mineElement[mineArray[i] - 1].setAttribute('class', 'mine');
        }
        ele.setAttribute('class', 'boom');
        $('start').setAttribute('src', './images/sad.png');
        var boxs2 = $('mineField').getElementsByTagName('td');
        var len = boxs2.length;
        for(var k = 0; k < len; k++) {
            boxs2[k].onclick = function () {
                return false;
            }
            boxs2[k].onmousedown = function (event) {
                return false;
            }
        }
    }
}

function addFlag(ele, event) {
    var e = event || window.event;
    if(e.button == '2') {
        var _c = ele.getAttribute('class');
        if(_c == 'hidden') {
            ele.setAttribute('class', 'flag');
            $('oCount').innerHTML = parseInt($('oCount').innerHTML) - 1;
        } else if(_c == 'flag') {
            ele.setAttribute('class', 'hidden');
            $('oCount').innerHTML = parseInt($('oCount').innerHTML) + 1;
        } else {
            return false;
        }
    }
}

function startGame() {
    getMineSweeper();
    mineSweeperToHTML(minesweeper);
    overcomeMineLength.overcome = 0;
}

function chooseDifficulty() {
    var arr = document.getElementsByName('radio');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        arr[i].onclick = function () {
            $('oCount').innerHTML = this.value;
            $('start').setAttribute('src', './images/happy.png');
            startGame();
        }
    }
}

function getDifficulty() {
    var arr = document.getElementsByName('radio');
    var len = arr.length;
    for(var i = 0; i < len; i++) {
        if(arr[i].checked) {
            $('oCount').innerHTML = arr[i].value;
        }
    }
}

window.onload = function () {
    chooseDifficulty();
    startGame();
    $('start').onclick = function () {
        this.setAttribute('src', './images/happy.png');
        getDifficulty();
        startGame();
    }
    $('oMain').style.display = 'block';
    document.oncontextmenu = function () {
        return false;
    }
}


