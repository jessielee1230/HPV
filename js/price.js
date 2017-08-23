    var myChart7 = echarts.init(document.getElementById('price2'), 'essos');

    var option = {
        title: {
            text: 'HPV疫苗价格',
            subtext: '价格为平均预估价格，单位：元'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2价', '4价', '9价']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['新西兰', '澳大利亚', '加拿大', '美国', '中国大陆', '中国香港']
        },
        series: [{
                name: '2价',
                type: 'bar',
                data: [1990, 2990, 3000, 3000, 1220, 3000]
            },
            {
                name: '4价',
                type: 'bar',
                data: [1990, 2990, 3000, 3000, 1220, 3000]
            },
            {
                name: '4价',
                type: 'bar',
                data: [1990, 2990, 3000, 3000, 1220, 3000]
            }


        ]
    };

    myChart7.setOption(option);

    $(window).on('resize', function() {
        if (myChart6 != null && myChart6 != undefined) {
            myChart6.resize();
            console.log(myChart6);
        }
    });