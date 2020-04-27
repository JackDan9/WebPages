function byId(id) {
    return document.getElementById(id);
}

function $(id) {
    return document.getElementById(id);
}

var selectedBag;

function createNumbers() {
    var div = document.createElement("div");
    div.style.padding = "3%";
    div.style.margin = "0 auto";
    div.style.textAlign = "center";
    document.body.appendChild(addNumber(div));
}

function addNumber(div) {
    for (var i = 0; i < 9; i++) {
        var p = document.createElement("p");
        p.disabled = false;
        p.onclick = function () {
            if (!this.disabled) {
                if (selectedBag) {
                    selectedBag.innerHTML = this.innerHTML;
                    selectedBag.style.border = "0";
                }
            }
        }
        p.id = i;
        p.innerHTML = i + 1;
        div.appendChild(p);
    }
    return div;
}

function appendTrs(table, num) {
    if (num < 1) {
        return table;
    }
    var tr = table.insertRow(-1);
    tr = appendTds(tr, 9);
    return table = appendTrs(table, num - 1);
}

function appendTds(tr, num) {
    if (num < 1) {
        return tr;
    }
    var td = tr.insertCell(-1);
    td.onclick = input;
    return tr = appendTds(tr, num - 1);
}

function input() {
    flush();
    checkNumbers(this);
    if (selectedBag) {
        selectedBag.style.border = "2px solid #cfc";
    }
    selectedBag = this;
    this.style.border = "2px inset";
}

function flush() {
    for (var i = 0; i < 9; i++) {
        document.getElementById(i).disabled = false;
        document.getElementById(i).style.backgroundColor = "LightSkyBlue";
    }
}

function checkNumbers(focused) {
    checkVertical(focused);
    checkHorizontal(focused);
    checkAround(focused);
}

function checkVertical(focused) {
    var x = focused.cellIndex;
    var table = focused.parentNode.parentNode.parentNode;
    for (var i = 0; i < 9; i++) {
        fkNumber(x, i);
    }
}

function checkHorizontal(focused) {
    var y = focused.parentNode.rowIndex;
    for (var i = 0; i < 9; i++) {
        fkNumber(i, y);
    }
}

function checkAround(focused) {
    var x = focused.cellIndex;
    var y = focused.parentNode.rowIndex;
    for (var i = parseInt(y / 3) * 3; i < (parseInt(y / 3) + 1) * 3; i++) {
        for (var j = parseInt(x / 3) * 3; j < (parseInt(x / 3) + 1) * 3; j++) {
            fkNumber(j, i);
        }
    }
}

function fkNumber(x, y) {
    var table = document.getElementsByTagName("table")[0];
    var disabledNumber = table.rows[y].cells[x].innerHTML;
    if (disabledNumber.length == 1) {
        document.getElementById(parseInt(disabledNumber) - 1).disabled = true;
        document.getElementById(parseInt(disabledNumber) - 1).style.backgroundColor = "gray";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createNumbers();
    var table = document.createElement("table");
    document.body.appendChild(table);
    table = appendTrs(table, 9);
}, false);