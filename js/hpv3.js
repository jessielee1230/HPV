    var myChart3 = echarts.init(document.getElementById('third'), 'essos');

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['宫颈癌', '肛门癌', '外阴癌', '阴道癌']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['2价', '4价', '9价']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '宫颈癌',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'insideBottom'
                    }
                },
                data: [-70, -70, -90],
            },
            {
                name: '肛门癌',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'insideBottom'
                    }
                },
                data: [0, -80, -95]
            },

            {
                name: '外阴癌',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'insideBottom'
                    }
                },
                data: [0, -75, -85]
            },
            {
                name: '阴道癌',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'insideBottom'
                    }
                },
                data: [0, -65, -80]
            },
        ]
    };
    myChart3.setOption(option);

    $(window).on('resize', function() {
        if (myChart3 != null && myChart3 != undefined) {
            myChart3.resize();
            console.log(myChart3);
        }
    });