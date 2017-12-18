// 11 个单元格，每个单元格的大小就等于地图的大小(mapWH)/mapSize
var mapSize = 11;
// 地图大小
var mapWH = 440;
// 记录对象的ID
var computerID;
// 这个方向是否可走
var isPath = true;
// 记录四方位上距离对方的距离
var up = 0;
var left = 0;
var right = 0;
var down = 0;
// 障碍物的最多个数(可重叠)
var barrier = 3;

window.onerror = function() {
    alert("异常!点击确定重新开始");
    window.location.href = window.location.href;
};

function createMap() {
    var x = Math.round(Math.random() * (mapSize - 1)); // 行
    var y = Math.round(Math.random() * (mapSize - 1)); // 列

    if(x == 0) {
        x = x+1;
    } else if (x == (mapSize - 1)) {
        x = x - 1;
    }
    if(y == 0) {
        y = y+1;
    } else if(y == (mapSize - 1)) {
        y = y - 1;
    }

    computerID = x + "_" + y;

    var tableObject = document.createElement("table");
    tableObject.style.width = mapWH + 'px';
    tableObject.style.height = mapWH + 'px';
    tableObject.border = "1";

    var tbodyObject = document.createElement("tbody");

    for(var i=0; i<mapSize; i++) {
        var trObject = document.createElement("tr");

        for(var j=0; j<mapSize; j++) {
            var tdObject = document.createElement("td");
            tdObject.style.border = "rgba(128, 128, 255, 1) solid 1px";
            tdObject.id = i + "_" + j;
            tdObject.onclick = tdClick;

            if(i + "_" + j == computerID) {
                tdObject.style.backgroundColor = "red";
            }
            var txt = document.createTextNode(" ");
            tdObject.appendChild(txt);

            trObject.appendChild(tdObject);
        }
        tbodyObject.appendChild(trObject);
    }
    tableObject.appendChild(tbodyObject);
    document.getElementById("map_div").appendChild(tableObject);
    for(var i=0; i<barrier; i++) {
        var _id = Math.round(Math.random() * (mapSize - 1)) + "_" + Math.round(Math.random() * (mapSize - 1));
        if (document.getElementById(_id).style.backgroundColor == "") {
            document.getElementById(_id).style.backgroundColor = "gray";
        }
    }
    for(var i=0; i<mapSize; i++) {
        document.getElementById(i + "_" +(mapSize - 1)).style.border = "rgba(223, 223, 223, 1) solid 1px";
        document.getElementById((mapSize - 1) + "_" + i).style.border = "rgba(223, 223, 223, 1) solid 1px";
        document.getElementById(i + "_0").style.border = "rgba(223, 223, 223, 1) solid 1px";
        document.getElementById("0_" + i).style.border = "rgba(223, 223, 223, 1) solid 1px";
    }
}

function tdClick() {
    if (this.style.backgroundColor == "") {
        this.style.backgroundColor = "gray";

        up = 0;
        left = 0;
        right = 0;
        down = 0;

        computerXZ();
    }
}

function computerXZ() {
    var xy = computerID.split("_");
    var x = xy[0] - 0;
    var y = xy[1] - 0;

    var middle = (mapSize - 1)/2; // 中心位置

    // 左上角
    if (x <= middle && y <= middle) {
        if(x <= y) {
            if(!computerUp(x, y, false)) {
                if(!computerLeft(x, y, false)) {
                    if(!computerRight(x, y, false)) {
                        if(!computerDown(x, y, false)) {
                            direction(up, left, right, down, x, y);
                        }
                    }
                }
            }
        } else { // 向左
            if(!computerLeft(x, y, false)) {
                if(!computerUp(x, y, false)) {
                    if(!computerDown(x, y, false)) {
                        if(!computerRight(x, y, false)) {
                            direction(up, left, right, down, x, y);
                        }
                    }
                }
            }
        }
    } else if (x <= middle && y >= middle) { // 右上角
        if(x <= (mapSize - 1- y)) {
            if(!computerUp(x, y, false)) {
                if(!computerRight(x, y, false)) {
                    if(!computerLeft(x, y, false)) {
                        if(!computerDown(x, y, false)) {
                            direction(up, left, right, down, x, y);
                        }
                    }
                }
            }
        } else { // 向右
            if(!computerRight(x, y, false)) {
                if(!computerUp(x, y, false)) {
                    if(!computerDown(x, y, false)) {
                        if(!computerLeft(x, y, false)) {
                            direction(up, left, right, down, x, y);
                        }
                    }
                }
            }
        }
    } else if (x >= middle && y >= middle) { // 右下角
        if(x >= y) {
            if(!computerDown(x, y, false)) {
                if(!computerRight(x, y, false)) {
                    if(!computerLeft(x, y, false)) {
                        if(!computerUp(x, y, false)) {
                            direction(up, left, right, down, x, y);
                        }
                    }
                }
            } else {
                if(!computerRight(x, y, false)) {
                    if(!computerDown(x, y, false)) {
                        if(!computerUp(x, y, false)) {
                            if(!computerLeft(x, y, false)) {
                                direction(up, left, right, down, x, y);
                            }
                        }
                    }
                }
            }
        }
    } else if (x >= middle && y <= middle) { //左下角
        if((mapSize - 1 - x) <= y) {
            if(!computerDown(x, y, false)) {
                if(!computerLeft(x, y, false)) {
                    if(!computerRight(x, y, false)) {
                        if(!computerUp(x, y, false)) {
                            direction(up, left, right, down, x, y);
                        }
                    }
                }
            }
        } else {
            if(!computerLeft(x, y, false)) {
                if(!computerDown(x, y, false)) {
                    if(!computerUp(x, y, false)) {
                        if(!computerRight(x, y, false)) {
                            direction(up, left, right, down, x, y);
                        }
                    }
                }
            }
        }
    }
}

function direction(up, left, right, down, _x, _y) {
    if(up==0 && left==0 && right==0 && down==0) {
        alert("恭喜你， 赢了!");
        window.location.href = window.location.href;
    } else {
        var arrayDirection = new Array(up, left, right, down);
        arrayDirection.sort(function (x, y) {
            return y - x;
        })

        if(up == arrayDirection[0]) {
            computerUp(_x, _y, true);
        } else if (down == arrayDirection[0]) {
            computerDown(_x, _y, true);
        } else if (left == arrayDirection[0]) {
            computerLeft(_x, _y, true);
        } else if(right == arrayDirection[0]) {
            computerRight(_x, _y, true);
        }
    }
}

function isDeath() {
    for(var i=0; i<mapSize; i++) {
        if(document.getElementById(i + "_" + (mapSize - 1)).style.backgroundColor == "red" ||
            document.getElementById((mapSize - 1) + "_" + i).style.backgroundColor == "red" ||
            document.getElementById(i + "_0").style.backgroundColor == "red" ||
            document.getElementById("0_" + i).style.backgroundColor == "red") {
            alert("想抓我，没问!");
            window.location.href = window.location.href;
        }
    }
}

function computerUp(x, y, mode) {
    for(var i=x-1; i>=0; i--) {
        if(document.getElementById(i + "_" + y).style.backgroundColor == "") {
            isPath = true;
            up++;
        } else {
            isPath = false;
            break;
        }
    }
    if(isPath || mode) {
        document.getElementById(computerID).style.backgroundColor = "";
        document.getElementById((x-1) + "_" + y).style.backgroundColor = "red";
        computerID=(x-1) + "_" + y;
        isDeath();
        return true;
    }
    return false;
}

function computerLeft(x, y, mode) {
    for (var i=y-1; i>=0; i--) {
        if(document.getElementById(x + "_" + i).style.backgroundColor == "") {
            isPath = true;
            left++;
        } else {
            isPath = false;
            break;
        }
    }
    if(isPath || mode) {
        document.getElementById(computerID).style.backgroundColor = "";
        document.getElementById(x+"_"+(y-1)).style.backgroundColor = "red";
        computerID = x + "_" + (y-1);

        isDeath();

        return true;
    }
    return false;
}

function computerRight(x, y, mode) {
    for(var i=y+1; i<mapSize; i++) {
        if(document.getElementById(x + "_" + i).style.backgroundColor == "") {
            isPath = true;
            right++;
        } else {
            isPath = false;
            break;
        }
    }
    if(isPath || mode) {
        document.getElementById(computerID).style.backgroundColor = "";
        document.getElementById(x + "_" + (y+1)).style.backgroundColor = "red";
        computerID = x + "_" + (y+1);

        isDeath();

        return true;
    }
    return false;
}

function computerDown(x, y, mode) {
    for(var i=x+1; i<mapSize; i++) {
        if(document.getElementById(i + "_" + y).style.backgroundColor == "") {
            isPath = true;
            down++;
        } else {
            isPath = false;
            break;
        }
    }
    if(isPath || mode) {
        document.getElementById(computerID).style.backgroundColor = "";
        document.getElementById((x+1) + "_" + y).style.backgroundColor = "red";
        computerID = (x+1) + "_" + y;

        isDeath();

        return true;
    }
    return false;
}


