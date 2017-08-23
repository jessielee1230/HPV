    var myChart = echarts.init(document.getElementById('first'), 'essos');
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2价', '4价', '9价']
        },

        calculable: false,
        xAxis: [{
            type: 'value',
            show: false
        }],
        yAxis: [{
            type: 'category',
            // data: ['2价', '4价', '9价'],
            show: false
        }],
        series: [{
            name: '2价',
            category: '2价',
            type: 'bar',
            // stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '2价：HPV-16,18型',
                    }
                }
            },
            data: [2]
        }, {
            name: '4价',
            type: 'bar',
            // stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '4价：HPV-16,18,6,11型',
                    }
                }
            },
            data: [4]
        }, {
            name: '9价',
            type: 'bar',
            // stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '9价：HPV-16,18,6,11,31,33,45,52,58型',
                    }
                }
            },
            data: [9]
        }]
    };
    myChart.setOption(option);

    $(window).on('resize', function() {
        if (myChart != null && myChart != undefined) {
            myChart.resize();
            console.log(myChart);
        }
    });