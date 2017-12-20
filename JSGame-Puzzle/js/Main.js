/**
 * Created by JackDan9 on 2017/12/14.
 */
/** Init myGame */
LInit(60, "myGame", 390, 580, main);

var imgBmpd;
/** 游戏层 */
var stageLayer, gameLayer, overLayer;
/** 拼图块列表 */
var blockList;
/** 是否游戏结束 */
var isGameOver;
/** 用时 */
var startTime, time, timeTxt;
/** 步数 */
var steps, stepsTxt;

function main () {
    /** 全屏设置 */
    if (LGlobal.mobile) {
        LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
    }
    LGlobal.screen(LGlobal.FULL_SCREEN);

    /** 添加加载提示 */
    var loadingHint = new LTextField();
    loadingHint.text = "资源加载中……";
    loadingHint.size = 20;
    loadingHint.x = (LGlobal.width - loadingHint.getWidth()) / 2;
    loadingHint.y = (LGlobal.height - loadingHint.getHeight()) / 2;
    addChild(loadingHint);

    /** 加载图片 */
    LLoadManage.load(
        [
            {path : "./js/Block.js"},
            {name : "img", path : "./images/img.jpg"}
        ],
        null,
        function (result) {
            /** 移除加载提示 */
            loadingHint.remove();

            /** 保存位图数据，方便后续使用 */
            imgBmpd = new LBitmapData(result["img"]);

            gameInit();
        }
    );
}

function gameInit (e) {
    /** 初始化舞台层 */
    stageLayer = new LSprite();
    stageLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "#EFEFEF");
    addChild(stageLayer);

    /** 初始化游戏层 */
    gameLayer = new LSprite();
    stageLayer.addChild(gameLayer);

    /** 初始化最上层 */
    overLayer = new LSprite();
    stageLayer.addChild(overLayer);

    /** 添加开始界面 */
    addBeginningUI();
}

function addBeginningUI () {
    var beginningLayer = new LSprite();
    beginningLayer.graphics.drawRect(0, "", [0, 0, LGlobal.width, LGlobal.height], true, "#EDEDED");
    stageLayer.addChild(beginningLayer);

    /** 游戏标题 */
    var title = new LTextField();
    title.text = "拼图游戏";
    title.size = 50;
    title.weight = "bold";
    title.x = (LGlobal.width - title.getWidth()) / 2;
    title.y = 160;
    title.color = "#FFFFFF";
    title.lineWidth = 5;
    title.lineColor = "#000000";
    title.stroke = true;
    beginningLayer.addChild(title);

    /** 开始游戏提示 */
    var hint = new LTextField();
    hint.text = "- 点击屏幕开始游戏 -";
    hint.size = 25;
    hint.x = (LGlobal.width - hint.getWidth()) / 2;
    hint.y = 370;
    beginningLayer.addChild(hint);

    /** 开始游戏 */
    beginningLayer.addEventListener(LMouseEvent.MOUSE_UP, function () {
        beginningLayer.remove();

        startGame();
    });
}

function startGame () {
    isGameOver = false;

    /** 初始化时间和步数 */
    startTime = (new Date()).getTime();
    time = 0;
    steps = 0;
    /** 初始化拼图块列表 */
    initBlockList();
    /** 打乱拼图 */
    getRandomBlockList();
    /** 显示拼图 */
    showBlock();
    /** 显示缩略图 */
    showThumbnail();
    /** 显示时间 */
    addTimeTxt();
    /** 显示步数 */
    addStepsTxt();

    stageLayer.addEventListener(LEvent.ENTER_FRAME, onFrame);
}

function initBlockList () {
    blockList = new Array();

    for (var i = 0; i < 9; i++) {
        /** 根据序号计算拼图块图片显示位置 */
        var y = (i / 3) >>> 0, x = i % 3;

        blockList.push(new Block(i, x, y));
    }
}

function getRandomBlockList () {
    /** 随机打乱拼图 */
    blockList.sort(function () {
        return 0.5 - Math.random();
    });

    /** 计算逆序和 */
    var reverseAmount = 0;

    for (var i = 0, l = blockList.length, preBlock = null; i < l; i++) {
        if (!preBlock) {
            preBlock = blockList[0];

            continue;
        }

        var currentBlock = blockList[i];

        if (currentBlock.index < preBlock.index) {
            reverseAmount++;
        }

        preBlock = currentBlock;
    }

    /** 检测打乱后是否可还原 */
    if (reverseAmount % 2 != 0) {
        /** 不合格，重新打乱 */
        getRandomBlockList();
    }
}

function showBlock() {
    for (var i = 0, l = blockList.length; i < l; i++) {
        var b = blockList[i];

        /** 根据序号计算拼图块位置 */
        var y = (i / 3) >>> 0, x = i % 3;

        b.setLocation(x, y);

        gameLayer.addChild(b);
    }
}

function showThumbnail() {
    var thumbnail = new LBitmap(imgBmpd);
    thumbnail.scaleX = 130 / imgBmpd.width;
    thumbnail.scaleY = 130 / imgBmpd.height;
    thumbnail.x = (LGlobal.width - 100) /2;
    thumbnail.y = 410;
    overLayer.addChild(thumbnail);
}

function addTimeTxt () {
    timeTxt = new LTextField();
    timeTxt.stroke = true;
    timeTxt.lineWidth = 3;
    timeTxt.lineColor = "#54D9EF";
    timeTxt.color = "#FFFFFF";
    timeTxt.size = 18;
    timeTxt.x = 20;
    timeTxt.y = 450;
    overLayer.addChild(timeTxt);

    updateTimeTxt();
}

function updateTimeTxt () {
    timeTxt.text = "时间：" + getTimeTxt(time);
}

function getTimeTxt () {
    var d = new Date(time);

    return d.getMinutes() + " : " + d.getSeconds();
};

function addStepsTxt () {
    stepsTxt = new LTextField();
    stepsTxt.stroke = true;
    stepsTxt.lineWidth = 3;
    stepsTxt.lineColor = "#54D9EF";
    stepsTxt.color = "#FFFFFF";
    stepsTxt.size = 18;
    stepsTxt.y = 450;
    overLayer.addChild(stepsTxt);

    updateStepsTxt();
}

function updateStepsTxt () {
    stepsTxt.text = "步数：" + steps;

    stepsTxt.x = LGlobal.width - stepsTxt.getWidth() - 20;
}

function onFrame () {
    if (isGameOver) {
        return;
    }

    /** 获取当前时间 */
    var currentTime = (new Date()).getTime();

    /** 计算使用的时间并更新时间显示 */
    time = currentTime - startTime;
    updateTimeTxt();
}

function gameOver () {
    isGameOver = true;

    var resultLayer = new LSprite();
    resultLayer.filters = [new LDropShadowFilter()];
    resultLayer.graphics.drawRoundRect(3, "#BBBBBB", [0, 0, 350, 350, 5], true,"#DDDDDD");
    resultLayer.x = (LGlobal.width - resultLayer.getWidth()) / 2;
    resultLayer.y = LGlobal.height / 2;
    resultLayer.alpha = 0;
    overLayer.addChild(resultLayer);

    var title = new LTextField();
    title.text = "游戏通关"
    title.weight = "bold";
    title.stroke = true;
    title.lineWidth = 3;
    title.lineColor = "#555555";
    title.size = 30;
    title.color = "#FFFFFF";
    title.x = (resultLayer.getWidth() - title.getWidth()) / 2;
    title.y = 30;
    resultLayer.addChild(title);

    var usedTimeTxt = new LTextField();
    usedTimeTxt.text = "游戏用时：" + getTimeTxt(time);
    usedTimeTxt.size = 20;
    usedTimeTxt.stroke = true;
    usedTimeTxt.lineWidth = 2;
    usedTimeTxt.lineColor = "#555555";
    usedTimeTxt.color = "#FFFFFF";
    usedTimeTxt.x = (resultLayer.getWidth() - usedTimeTxt.getWidth()) / 2;
    usedTimeTxt.y = 130;
    resultLayer.addChild(usedTimeTxt);

    var usedStepsTxt = new LTextField();
    usedStepsTxt.text = "所用步数：" + steps;
    usedStepsTxt.size = 20;
    usedStepsTxt.stroke = true;
    usedStepsTxt.lineWidth = 2;
    usedStepsTxt.lineColor = "#555555";
    usedStepsTxt.color = "#FFFFFF";
    usedStepsTxt.x = usedTimeTxt.x;
    usedStepsTxt.y = 180;
    resultLayer.addChild(usedStepsTxt);

    var hintTxt = new LTextField();
    hintTxt.text = "- 点击屏幕重新开始 -";
    hintTxt.size = 23;
    hintTxt.stroke = true;
    hintTxt.lineWidth = 2;
    hintTxt.lineColor = "#888888";
    hintTxt.color = "#FFFFFF";
    hintTxt.x = (resultLayer.getWidth() - hintTxt.getWidth()) / 2;
    hintTxt.y = 260;
    resultLayer.addChild(hintTxt);

    LTweenLite.to(resultLayer, 0.5, {
        alpha : 0.7,
        y : (LGlobal.height - resultLayer.getHeight()) / 2,
        onComplete : function () {
            /** 点击界面重新开始游戏 */
            stageLayer.addEventListener(LMouseEvent.MOUSE_UP, function () {
                gameLayer.removeAllChild();
                overLayer.removeAllChild();

                stageLayer.removeAllEventListener();

                startGame();
            });
        }
    });
}