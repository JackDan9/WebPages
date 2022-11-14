
const convertChartData = (data) => {
    if (!data) {
        return data;
    }

    let res = [];

    let _timeMap = new Map();
    let _packageMap = new Map();

    data && data.length > 0 && data.map((item, index) => {
        if (index === 0) {
            let temp = [];
            temp.push(item.label);
            res.push(temp);

            item.dataList.map((dataItem, dataIndex) => {
                if (!_timeMap.has(dataItem)) {
                    let temp = [];
                    temp.push((Math.floor(data[index + 2].dataList[dataIndex])).toString());
                    _timeMap.set(dataItem, temp);
                } else {
                    let temp = _timeMap.get(dataItem)
                    temp.push((Math.floor(data[index + 2].dataList[dataIndex])).toString());
                    _timeMap.set(dataItem, temp);
                }
            });
        }

        if (index === 1) {
            item.dataList.map((dataItem, dataIndex) => {
                if (!_packageMap.has(dataItem)) {
                    let temp = [];
                    temp.push((Math.floor(data[index + 1].dataList[dataIndex]).toString()));
                    _packageMap.set(dataItem, temp);
                } else {
                    let temp = _packageMap.get(dataItem)
                    temp.push((Math.floor(data[index + 1].dataList[dataIndex])).toString());
                    _packageMap.set(dataItem, temp);
                }
            });
        }

    });

    _timeMap.forEach((v, k) => {
        res.push([k].concat(v));
    });

    _packageMap.forEach((v, k) => {
        res[0].push(k);
    });
    
    return res;
}

let data = [
    {
        label: "时间",
        dataList: ["2020", "2020", "2020", "2021", "2021", "2021", "2022", "2022", "2022"]
    }, {
        label: "套餐类型",
        dataList: ["套餐1", "套餐2", "套餐3", "套餐1", "套餐2", "套餐3", "套餐1", "套餐2", "套餐3"]
    }, {
        label: "收费⾦额",
        dataList: ["27.1", "45", "87", "47", "89", "125", "63.3", "145", "287"]
    }
];

let data1 = [
    {
        label: "时间",
        dataList: ["2020", "2020", "2020", "2021", "2021", "2021", "2022", "2022", "2022", "2023", "2020", "2021"]
    }, {
        label: "套餐类型",
        dataList: ["套餐1", "套餐2", "套餐3", "套餐1", "套餐2", "套餐3", "套餐1", "套餐2", "套餐3", "套餐1", "套餐2", "套餐3"]
    }, {
        label: "收费⾦额",
        dataList: ["27.1", "45", "87", "47", "89", "125", "63.3", "145", "287", "263", "231", "23.2"]
    }
];

console.log(convertChartData(data));