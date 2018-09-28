/**
 *  Version: 1.0.0
 *  Author: JackDan
 *  Description: De-weight algorithm
 *
 */
Array.prototype.unique4 = function () {
    this.sort();
    var re = [this[0]];

    for(var i = 1; i < this.length; i++)
    {
        if( this[i] !== re[re.length-1] )
        {
            re.push(this[i]);
        }
    }
    return re;
}

var sureNum = function () {
    var numStr = document.getElementById('num').value;
    var numArr = numStr.split(',');
    var sureNumArr = numArr.unique4();
    document.getElementById('sureNum').value = sureNumArr;
}



