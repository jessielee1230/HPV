 var myChart6 = echarts.init(document.getElementById('cv3'), 'essos');
 // app.title = '每年的宫颈癌新病例数';

 var option = {
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: {
         // data: ['+4岁']
     },
     grid: {
         left: '3%',
         right: '4%',
         bottom: '3%',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
         data: ['15-39岁', '40−64岁', '65岁以上']
     }],
     yAxis: [{
         type: 'value'
     }],
     series: [

         {
             name: '+4岁',
             type: 'bar',
             stack: '15-39岁',
             data: [6, 10746, 7265]
         },
         {
             name: '+8岁',
             type: 'bar',
             stack: '15-39岁',
             data: [1127, 9410, 0]
         },
         {
             name: '+16岁',
             type: 'bar',
             stack: '15-39岁',
             data: [3441, 7082, 0]
         },
         {
             name: '+20岁',
             type: 'bar',
             stack: '15-39岁',
             data: [4626, 6090, 0]
         },
         {
             name: '+24岁',
             type: 'bar',
             stack: '15-39岁',
             data: [7619, 4212, 0],
             // itemStyle: {
             //     normal: {
             //         label: {
             //             show: true,
             //             position: 'insideLeft',
             //             formatter: "dataView",
             //         }
             //     }
             // },
         },
     ]
 };
 myChart6.setOption(option);