(function () {
    let

        idx,
        timer,

        // 存放li 元素
        liElem,

        // 存放span 元素
        spanElem,

        // 记录布局类型
        currentStyle,

        // 鼠标X、Y坐标值
        oldCoordX,
        oldCoordY,
        nowCoordX,
        nowCoordY,

        // li 元素水平、垂直、纵深方向偏移位
        offsetStepX,
        offsetStepY,
        offsetStepZ,

        // li 元素的坐标
        liElemCoordX,
        liElemCoordY,
        liElemCoordZ,

        // 鼠标X、Y差值
        minusX = 0,
        minusY = 0,

        // X、Y偏移度数
        liElemDegX = 0,
        liElemDegY = 0,

        // li 元素的最大个数
        liElemMaxNum = 162,

        // li 元素 水平、垂直铺放的最大个数
        liElemRowMaxNum = 5,
        liElemColMaxNum = 5,

        // li 元素水平、垂直、纵深方向的最大间隔距离
        liElemOffsetX = 350,
        liElemOffsetY = 350,
        liElemOffsetZ = 350,

        // li 元素默认景深
        liElemDepDefault = -1000,

        // 避免覆盖默认景深值
        depDefault = liElemDepDefault - 600;

    // 避免第一次拖动发生错位
    liElemDepZ = liElemDepDefault - 600,

        // 单个方阵中 li 元素的总个数
        aScreenNum = liElemRowMaxNum * liElemColMaxNum,

        // li 元素纵深方向的最在间隔距离
        liElemDepMaxDist = parseInt(liElemMaxNum / aScreenNum),

        // 计算第一个li 元素的坐标点
        liElemFristSiteX = parseInt('-' + liElemRowMaxNum / 2) * liElemOffsetX,
        liElemFristSiteY = parseInt('-' + liElemColMaxNum / 2) * liElemOffsetY,
        liElemFristSiteZ = parseInt('-' + liElemDepMaxDist / 2) * liElemOffsetZ,

        // 文本内容
        data = ['Grid', 'Helix', 'Chaotic', 'Sphere', 'Three', 'Geome', 'Curve', 'Random'];

    // 指定一个区间，获取一个随机数
    randomFrom = (lowerValue, upperValue) => {
        return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    }

    // 方阵
    gridLayout = _ => {
        let arr = [...Array(liElemMaxNum).keys()];
        $('#box li').each(i => {
            // 数组的索引
            let idx = randomFrom(0, arr.length - 1);

            // 计算li 元素 水平、垂直、纵深方向的偏移位
            offsetStepX = ((i % aScreenNum) % liElemRowMaxNum) * liElemOffsetX;
            offsetStepY = parseInt((i % aScreenNum) / liElemColMaxNum) * liElemOffsetY;
            offsetStepZ = parseInt(i / aScreenNum) * liElemOffsetZ;

            // 计算当前li 元素的坐标值
            liElemCoordX = liElemFristSiteX + offsetStepX;
            liElemCoordY = liElemFristSiteY + offsetStepY;
            liElemCoordZ = liElemFristSiteZ + offsetStepZ;

            $('#box li').eq(arr[idx]).css({
                "transform": `translate3d(${liElemCoordX}px,${liElemCoordY}px,${liElemCoordZ}px)`,
                "transition": "4s ease-in-out"
            })

            // 删除数组中的值
            arr.splice(idx, 1);
        }); currentStyle = gridLayout;
    }

    // 螺旋
    helixLayout = _ => {
        let arr = [...Array(liElemMaxNum).keys()];
        $('#box li').each(i => {
            let idx = randomFrom(0, arr.length - 1);
            let liElemDegY = 10 * i;
            let liElemDepY = -10 * parseInt(liElemMaxNum / 2) + 10 * i;

            $('#box li').eq(arr[idx]).css({
                "transform": `rotateY(${liElemDegY}deg) translateY(${liElemDepY}px) translateZ(${Math.abs(liElemDepDefault)}px)`,
                "transition": "4s ease-in-out"
            })

            // 删除数组中的值
            arr.splice(idx, 1)
        }); currentStyle = helixLayout;
    }

    // 球形
    sphereLayout = _ => {
        let arr = [...Array(liElemMaxNum).keys()];
        $('#box li').each(i => {
            let idx = randomFrom(0, arr.length - 1);
            let liElemDegY = 3 * i;
            let liElemDegX = 30 * i;

            $('#box li').eq(arr[idx]).css({
                "transform": `rotateY(${liElemDegY}deg) rotateX(${liElemDegX}deg) translateZ(${Math.abs(liElemDepDefault)}px)`,
                "transition": "4s ease-in-out"
            })

            // 删除数组中的值
            arr.splice(idx, 1)
        }); currentStyle = sphereLayout;
    }

    // 三体
    threeLayout = _ => {
        let arr = [...Array(liElemMaxNum).keys()];
        $('#box li').each(i => {
            let idx = randomFrom(0, arr.length - 1);
            let liElemDegY = 3 * i;
            let liElemDegX = 60 * i;

            $('#box li').eq(arr[idx]).css({
                "transform": `rotateY(${liElemDegY}deg) rotateX(${liElemDegX}deg) translateZ(${Math.abs(liElemDepDefault)}px)`,
                "transition": "4s ease-in-out"
            })

            // 删除数组中的值
            arr.splice(idx, 1)
        }); currentStyle = threeLayout;
    }

    // 几何
    geomeLayout = _ => {
        let arr = [...Array(liElemMaxNum).keys()];
        $('#box li').each(i => {
            let idx = randomFrom(0, arr.length - 1);
            let liElemDegY = 8.9 * i;
            let liElemDegX = 2.9 * i;

            $('#box li').eq(arr[idx]).css({
                "transform": `rotateY(${liElemDegY}deg) rotateX(${liElemDegX}deg) translateZ(${Math.abs(liElemDepDefault)}px)`,
                "transition": "4s ease-in-out"
            })

            // 删除数组中的值
            arr.splice(idx, 1)
        }); currentStyle = geomeLayout;
    }

    // 曲线
    curveLayout = _ => {
        let arr = [...Array(liElemMaxNum).keys()];
        $('#box li').each(i => {
            let idx = randomFrom(0, arr.length - 1);
            let liElemDegY = 1 * i;
            let liElemDegX = 2 * i;

            $('#box li').eq(arr[idx]).css({
                "transform": `rotateY(${liElemDegY}deg) rotateX(${liElemDegX}deg) translateZ(${liElemDepDefault}px)`,
                "transition": "4s ease-in-out"
            })

            // 删除数组中的值
            arr.splice(idx, 1)
        }); currentStyle = curveLayout;
    }

    // 随机
    chaoticLayout = _ => {
        $('#box li').each(function (i) {
            // 随机生成li 元素的坐标点
            liElemCoordX = (Math.random() - 0.5) * 3000;
            liElemCoordY = (Math.random() - 0.5) * 3000;
            liElemCoordZ = (Math.random() - 0.5) * 3000;

            $(this).css({
                "transform": `translate3d(${liElemCoordX}px,${liElemCoordY}px,${liElemCoordZ}px)`,
                "transition": "4s ease-in-out"
            })
        }); currentStyle = chaoticLayout;
    }

    function main() {
        $([...Array(liElemMaxNum).keys()]).each(i => {
            // 创建一个li 元素
            liElem = $('<li></li>');
            let idx = randomFrom(0, data.length - 1);

            // 创建一个span 元素
            spanElem = $(`<span>${data[idx]}</span>`);
            liElem.append(spanElem);

            // 设置span 中的文本颜色
            spanElem.css('color', `rgb(${randomFrom(100, 255)},${randomFrom(100, 255)},${randomFrom(100, 255)})`);

            // 将已创建的li 元素添加至容器中
            $('#box').append(liElem);
        })

        // 布局类型
        layoutStyle = [gridLayout, helixLayout, chaoticLayout, sphereLayout,
            threeLayout, geomeLayout, curveLayout];

        // 鼠标移入移出效果
        $('#box li').hover(function () {
            $(this).css('border', '1px solid rgba(125,255,255,0.75)');
            $(this).css('boxShadow', '0 0 15px rgba(0,255,255,0.75)');
            $(this).css('transition', '0s');
        }, function () {
            $(this).css('border', '1px solid rgba(125,255,255,0.25)');
            $(this).css('boxShadow', '0 0 15px rgba(0,255,255,0.5)');
            $(this).css('transition', '0s');
        })

        // 鼠标点击，切换布局
        $('#box li').click(function () {
            switch ($(this).text()) {
                case 'Grid': gridLayout(); break;
                case 'Helix': helixLayout(); break;
                case 'Three': threeLayout(); break;
                case 'Geome': geomeLayout(); break;
                case 'Curve': curveLayout(); break;
                case 'Sphere': sphereLayout(); break;
                case 'Chaotic': chaoticLayout(); break;

                default:
                    while (true) {
                        idx = randomFrom(0, layoutStyle.length - 1);
                        if (layoutStyle[idx] != currentStyle) {
                            return layoutStyle[idx]();
                        }
                    }
                    break;
            }
        })

        // 鼠标拖动与滚轮效果
        $(document).mousedown(function (event) {
            event = event || window.event;

            // 上一个点的X、Y坐标
            oldCoordX = event.clientX;
            oldCoordY = event.clientY;

            $(this).on('mousemove', event => {
                event = event || window.event;

                // 若上一个定时器存在，则将其删除
                timer && clearInterval(timer);

                // 当前点的X、Y坐标
                nowCoordX = event.clientX;
                nowCoordY = event.clientY;

                // 计算机X、Y差值
                minusX = nowCoordX - oldCoordX;
                minusY = nowCoordY - oldCoordY;

                // 更新上一个点的X、Y坐标值
                oldCoordX = nowCoordX;
                oldCoordY = nowCoordY;

                // 计算X、Y轴的移动度数
                liElemDegX -= minusY * 0.1;
                liElemDegY += minusX * 0.1;

                $('#box').css({
                    "transform": `translateZ(${liElemDepZ}px) rotateX(${liElemDegX}deg) rotateY(${liElemDegY}deg)`
                })


            }).mouseup(_ => {
                // 当鼠标弹起解除移动
                $(document).off('mousemove');

                // 若上一个定时器存在，则将其删除
                timer && clearInterval(timer);

                // 鼠标弹起后有缓动效果
                timer = setInterval(_ => {
                    // 缓动差值 
                    minusX *= 0.95;
                    minusY *= 0.95;

                    // 计算X、Y轴的移动度数
                    liElemDegX -= minusY * 0.1;
                    liElemDegY += minusX * 0.1;

                    // 当差值超出指定范围时，则清除定时器
                    Math.abs(minusX) < 0.05
                        && Math.abs(minusY) < 0.05
                        && clearInterval(timer);

                    $('#box').css({
                        "transform": `translateZ(${liElemDepZ}px) rotateX(${liElemDegX}deg) rotateY(${liElemDegY}deg)`
                    })
                }, 12);
            })

        }).on('mousewheel DOMMouseScroll', e => {
            // 若上一个定时器存在，则将其删除
            timer && clearInterval(timer);

            // 获取鼠标滚动方向
            let step = (e.originalEvent.wheelDelta
                && (e.originalEvent.wheelDelta > 0 ? 1 : -1))
                || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));

            // 计算滚轮滚动时Z 轴景深的步长
            liElemDepZ = depDefault += step * 90;

            $('#box').css({
                "transform": `translateZ(${liElemDepZ}px) rotateX(${liElemDegX}deg) rotateY(${liElemDegY}deg)`
            })

            // 设置缓动效果
            timer = setInterval(_ => {
                // 缓动步长
                step *= 0.6;
                liElemDepZ += step * 80;

                Math.abs(step) < 0.000005
                    && clearInterval(timer);

                $('#box').css({
                    "transform": `translateZ(${liElemDepZ}px) rotateX(${liElemDegX}deg) rotateY(${liElemDegY}deg)`
                })
            }, 12);
        })

        // 加载布局
        setTimeout(gridLayout, 1000);
    }

    main();

})();
