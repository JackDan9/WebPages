/**
 * Created by JackDan9 on 2018/6/15.
 */

function Lottery(id) {
    this.index = 0; // 当前位置转动到哪个位置，起点位置
    this.count = 0; // 总共有多少个位置
    this.timer = 0; // setTimeout的ID, 用clearTimeout清除
    this.speed = 20; // 初始转动速度
    this.times = 0; // 转动次数
    this.cycle = 100; // 转动基本次数: 即至少需要转动多少次再进入抽奖环节
    this.prize = -1; // 中奖位置
    this.running = false; // 转动状态
    this.obj = null;
    this.units = null;
    this.id = id;
}

Lottery.prototype = {
    constructor: Lottery,
    init: function () {
        this.obj = document.getElementById(this.id);
        this.units = this.obj.getElementsByClassName('lottery-unit');
        this.count = this.units.length;
    },
    roll: function () {
        var that = this;
        this.times += 1;
        this._run();
        if (this.times > this.cycle + 10 && this.prize == this.index) {
            clearTimeout(this.timer);
            this.running = false;
            this.times = 0;
            this.prize = -1;
        } else {
            if (this.times < this.cycle) {
                this.speed -= 10;
            } else if (this.times == this.cycle) {
                this.prize = Math.floor( Math.random() * (this.count + 1));
            } else {
                if (this.times > this.cycle + 10 && ((this.prize==0 && this.index==7) || this.prize==this.index+1)) {
                    this.speed += 110;
                } else {
                    this.speed += 20;
                }
            }
            if (this.speed < 40) {
                this.speed = 40;
            }
            this.timer = setTimeout(function () {
                that.roll();
            }, this.speed);
        }
    },
    _run: function () {
        var index = this.index;
        var count = this.count;
        this.obj.getElementsByClassName('lottery-unit-' + index)[0].classList.remove('active');
        index += 1;
        if (index > count - 1) {
            index = 0;
        }
        this.obj.getElementsByClassName('lottery-unit-' + index)[0].classList.add('active');
        this.index = index;
    },
    _stop: function (index) {
        this.prize = index;
    }
};

window.onload = function () {
    var lottery = new Lottery('zd-lottery');
    lottery.init();
    document.getElementById('start-btn').addEventListener('click', function (e) {
        if (lottery.running) {
            return false;
        } else {
            lottery.speed = 100;
            lottery.roll();
            lottery.running = true;
        }
        e.stopPropagation();
    })
}