    var myChart5 = echarts.init(document.getElementById('cv2'), 'essos');
    var option = {
        title: {
            text: '2012年中国女性宫颈癌各年龄段患癌人数'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['宫颈癌']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0-14岁', '15-39岁', '40-44岁', '45-49岁', '50-54岁', '55-59岁', '60-64岁', '65-69岁', '70-74岁', '大于75岁']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '患癌人数',
            type: 'line',

            data: [67, 16819, 10746, 9410, 7082, 6090, 4212, 2537, 1814, 2914]
        }]
    };
    myChart5.setOption(option);

    $(window).on('resize', function() {
        if (myChart5 != null && myChart5 != undefined) {
            myChart5.resize();
            console.log(myChart5);
        }
    });