    var myChart2 = echarts.init(document.getElementById('second'), 'essos');
    var option = {
        backgroundColor: 'white',

        title: {
            text: 'HPV 各类型病毒株的宫颈癌致病率',
            left: 'center',
            top: 10,
            textStyle: {
                color: 'grey'
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0.55, 1]
            }
        },
        series: [{
            name: 'HPV',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],

            data: [
                { value: 71, name: '16,18型与71%的宫颈癌有关' },
                { value: 18, name: '31,33,45,52型与18%的宫颈癌有关' },
                { value: 11, name: '其他' },

            ].sort(function(a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(178,225,245, 0.8)',
                    shadowBlur: 60,
                    shadowColor: 'rgba(234,225,245, 0.1)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return Math.random() * 200;
            }
        }]
    };
    myChart2.setOption(option);

    $(window).on('resize', function() {
        if (myChart2 != null && myChart2 != undefined) {
            myChart2.resize();
            console.log(myChart2);
        }
    });