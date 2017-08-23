    var myChart4 = echarts.init(document.getElementById('cv1'), 'essos');
    var option = {
        title: {
            // text: 'World Female Cervical Cancer Death (2012)',
            // subtext: 'Estimated age-standardized rates (World) of deaths, cervical cancer, worldwide in 2012',
            // sublink: 'http://gco.iarc.fr/today/online-analysis-map?mode=population&mode_population=continents&population=900&sex=2&cancer=16&type=1&statistic=0&prevalence=0&color_palette=default&projection=natural-earth',
            left: 'center',
            top: 'top'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') +
                    '.' + value[1];
                return params.seriesName + '<br/>' + params.name + ' : ' + value;
            }
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 0,
            max: 50,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#B2E1F5', '#3599C5', '#28577c']
            }
        },
        series: [{
            name: ' Rates of Deaths, Cervical Cancer (2012)',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle: {
                emphasis: { label: { show: true } }
            },
            data: [{
                    name: 'Afghanistan',
                    value: '6.9'
                },
                {
                    name: 'Albania',
                    value: '1.8'
                },
                {
                    name: 'Algeria',
                    value: '3.5'
                },
                {
                    name: 'Angola',
                    value: '21.2'
                },
                {
                    name: 'Argentina',
                    value: '8.3'
                },
                {
                    name: 'Armenia',
                    value: '5.2'
                },
                {
                    name: 'Australia',
                    value: '1.6'
                },
                {
                    name: 'Austria',
                    value: '2.0'
                },
                {
                    name: 'Azerbaijan',
                    value: '3.9'
                },
                {
                    name: 'Bahamas',
                    value: '7.0'
                },
                {
                    name: 'Bahrain',
                    value: '1.9'
                },
                {
                    name: 'Bangladesh',
                    value: '11.5'
                },
                {
                    name: 'Barbados',
                    value: '7.2'
                },
                {
                    name: 'Belarus',
                    value: '4.7'
                },
                {
                    name: 'Belgium',
                    value: '1.9'
                },
                {
                    name: 'Belize',
                    value: '14.9'
                },
                {
                    name: 'Benin',
                    value: '17.8'
                },
                {
                    name: 'Bhutan',
                    value: '7.0'
                },
                {
                    name: 'Bolivia',
                    value: '21.0'
                },
                {
                    name: 'Bosnia and Herz',
                    value: '2.7'
                },
                {
                    name: 'Botswana',
                    value: '14.6'
                },
                {
                    name: 'Brazil',
                    value: '7.3'
                },
                {
                    name: 'Brunei Darussalam',
                    value: '6.0'
                },
                {
                    name: 'Bulgaria',
                    value: '7.0'
                },
                {
                    name: 'Burkina Faso',
                    value: '18.6'
                },
                {
                    name: 'Burundi',
                    value: '39.3'
                },
                {
                    name: 'Cabo Verde',
                    value: '13.2'
                },
                {
                    name: 'Cambodia',
                    value: '13.4'
                },
                {
                    name: 'Cameroon',
                    value: '17.5'
                },
                {
                    name: 'Canada',
                    value: '1.7'
                },
                {
                    name: 'Central African Rep.',
                    value: '15.3'
                },
                {
                    name: 'Chad',
                    value: '14.6'
                },
                {
                    name: 'Chile',
                    value: '6.0'
                },
                {
                    name: 'China',
                    value: '3.4'
                },
                {
                    name: 'Colombia',
                    value: '8.0'
                },
                {
                    name: 'Comoros',
                    value: '40.3'
                },
                {
                    name: 'Dem. Rep. Congo',
                    value: '27.3'
                },
                {
                    name: 'Costa Rica',
                    value: '4.4'
                },
                {
                    name: 'Croatia',
                    value: '3.2'
                },
                {
                    name: 'Cuba',
                    value: '6.7'
                },
                {
                    name: 'Cyprus',
                    value: '1.5'
                },
                {
                    name: 'Czech',
                    value: '3.2'
                },
                {
                    name: 'Côte d\'Ivoire',
                    value: '14.7'
                },
                {
                    name: 'Dem. Rep. Korea',
                    value: '7.2'
                },
                {
                    name: 'Congo',
                    value: '13.0'
                },
                {
                    name: 'Denmark',
                    value: '1.9'
                },
                {
                    name: 'Djibouti',
                    value: '11.5'
                },
                {
                    name: 'Dominican Republic',
                    value: '12.3'
                },
                {
                    name: 'Ecuador',
                    value: '14.0'
                },
                {
                    name: 'Egypt',
                    value: '1.0'
                },
                {
                    name: 'El Salvador',
                    value: '11.9'
                },
                {
                    name: 'Equatorial Guinea',
                    value: '14.1'
                },
                {
                    name: 'Eritrea',
                    value: '13.1'
                },
                {
                    name: 'Estonia',
                    value: '5.9'
                },
                {
                    name: 'Ethiopia',
                    value: '18.4'
                },
                {
                    name: 'Fiji',
                    value: '20.9'
                },
                {
                    name: 'Finland',
                    value: '1.0'
                },
                {
                    name: 'France',
                    value: '1.9'
                },
                {
                    name: 'Guadeloupe',
                    value: '4.3'
                },
                {
                    name: 'La Reunion',
                    value: '4.3'
                },
                {
                    name: 'Martinique',
                    value: '3.9'
                },
                {
                    name: 'New Caledonia',
                    value: '10.3'
                },
                {
                    name: 'Guyana',
                    value: '13.1'
                },
                {
                    name: 'Polynesia',
                    value: '5.1'
                },
                {
                    name: 'Gabon',
                    value: '8.4'
                },
                {
                    name: 'The Gambia',
                    value: '18.0'
                },
                {
                    name: 'Georgia',
                    value: '5.7'
                },
                {
                    name: 'Germany',
                    value: '1.7'
                },
                {
                    name: 'Ghana',
                    value: '18.9'
                },
                {
                    name: 'Greece',
                    value: '1.8'
                },
                {
                    name: 'Guatemala',
                    value: '12.2'
                },
                {
                    name: 'Guinea',
                    value: '27.9'
                },
                {
                    name: 'Guinea-Bissau',
                    value: '21.6'
                },
                {
                    name: 'Guyana',
                    value: '21.9'
                },
                {
                    name: 'Haiti',
                    value: '14.6'
                },
                {
                    name: 'Honduras',
                    value: '14.1'
                },
                {
                    name: 'Hungary',
                    value: '5.3'
                },
                {
                    name: 'Iceland',
                    value: '0.4'
                },
                {
                    name: 'India',
                    value: '12.4'
                },
                {
                    name: 'Indonesia',
                    value: '8.1'
                },
                {
                    name: 'Iran',
                    value: '1.2'
                },
                {
                    name: 'Iraq',
                    value: '1.5'
                },
                {
                    name: 'Ireland',
                    value: '3.3'
                },
                {
                    name: 'Israel',
                    value: '2.3'
                },
                {
                    name: 'Italy',
                    value: '1.5'
                },
                {
                    name: 'Jamaica',
                    value: '11.9'
                },
                {
                    name: 'Japan',
                    value: '2.8'
                },
                {
                    name: 'Jordan',
                    value: '1.0'
                },
                {
                    name: 'Kazakhstan',
                    value: '9.8'
                },
                {
                    name: 'Kenya',
                    value: '21.8'
                },
                {
                    name: 'Korea',
                    value: '2.6'
                },
                {
                    name: 'Kuwait',
                    value: '2.1'
                },
                {
                    name: 'Kyrgyzstan',
                    value: '11.2'
                },
                {
                    name: 'Lao PDR',
                    value: '7.4'
                },
                {
                    name: 'Latvia',
                    value: '6.3'
                },
                {
                    name: 'Lebanon',
                    value: '1.7'
                },
                {
                    name: 'Lesotho',
                    value: '23.2'
                },
                {
                    name: 'Liberia',
                    value: '23.6'
                },
                {
                    name: 'Libya',
                    value: '4.0'
                },
                {
                    name: 'Lithuania',
                    value: '7.5'
                },
                {
                    name: 'Luxembourg',
                    value: '2.4'
                },
                {
                    name: 'Madagascar',
                    value: '26.8'
                },
                {
                    name: 'Malawi',
                    value: '49.8'
                },
                {
                    name: 'Malaysia',
                    value: '4.7'
                },
                {
                    name: 'Maldives',
                    value: '6.3'
                },
                {
                    name: 'Mali',
                    value: '32.1'
                },
                {
                    name: 'Malta',
                    value: '0.8'
                },
                {
                    name: 'Mauritania',
                    value: '18.8'
                },
                {
                    name: 'Mauritius',
                    value: '8.2'
                },
                {
                    name: 'Mexico',
                    value: '8.0'
                },
                {
                    name: 'Mongolia',
                    value: '9.3'
                },
                {
                    name: 'Montenegro',
                    value: '5.8'
                },
                {
                    name: 'Morocco',
                    value: '7.0'
                },
                {
                    name: 'Mozambique',
                    value: '49.2'
                },
                {
                    name: 'Myanmar',
                    value: '12.3'
                },
                {
                    name: 'Namibia',
                    value: '6.9'
                },
                {
                    name: 'Nepal',
                    value: '12.0'
                },
                {
                    name: 'Netherlands',
                    value: '1.6'
                },
                {
                    name: 'New Zealand',
                    value: '1.4'
                },
                {
                    name: 'Nicaragua',
                    value: '18.3'
                },
                {
                    name: 'Niger',
                    value: '7.1'
                },
                {
                    name: 'Nigeria',
                    value: '17.5'
                },
                {
                    name: 'Norway',
                    value: '2.3'
                },
                {
                    name: 'Oman',
                    value: '2.5'
                },
                {
                    name: 'Pakistan',
                    value: '4.7'
                },
                {
                    name: 'Panama',
                    value: '7.1'
                },
                {
                    name: 'Papua New Guinea',
                    value: '21.7'
                },
                {
                    name: 'Paraguay',
                    value: '15.7'
                },
                {
                    name: 'Peru',
                    value: '12.0'
                },
                {
                    name: 'Philippines',
                    value: '7.5'
                },
                {
                    name: 'Poland',
                    value: '5.4'
                },
                {
                    name: 'Portugal',
                    value: '3.7'
                },
                {
                    name: 'Puerto Rico',
                    value: '2.8'
                },
                {
                    name: 'Qatar',
                    value: '2.4'
                },
                {
                    name: 'Republic of Moldova',
                    value: '7.9'
                },
                {
                    name: 'Romania',
                    value: '10.8'
                },
                {
                    name: 'Russia',
                    value: '6.1'
                },
                {
                    name: 'Rwanda',
                    value: '26.2'
                },
                {
                    name: 'Samoa',
                    value: '6.9'
                },
                {
                    name: 'Saudi Arabia',
                    value: '1.1'
                },
                {
                    name: 'Senegal',
                    value: '26.3'
                },
                {
                    name: 'Serbia',
                    value: '7.7'
                },
                {
                    name: 'Sierra Leone',
                    value: '25.0'
                },
                {
                    name: 'Singapore',
                    value: '2.6'
                },
                {
                    name: 'Slovakia',
                    value: '5.2'
                },
                {
                    name: 'Slovenia',
                    value: '3.0'
                },
                {
                    name: 'Solomon Islands',
                    value: '17.9'
                },
                {
                    name: 'Somalia',
                    value: '20.1'
                },
                {
                    name: 'South Africa',
                    value: '18.0'
                },
                {
                    name: 'S. Sudan',
                    value: '20.3'
                },
                {
                    name: 'Spain',
                    value: '2.1'
                },
                {
                    name: 'Sri Lanka',
                    value: '5.0'
                },
                {
                    name: 'Sudan',
                    value: '5.3'
                },
                {
                    name: 'Suriname',
                    value: '15.7'
                },
                {
                    name: 'Swaziland',
                    value: '31.0'
                },
                {
                    name: 'Sweden',
                    value: '1.9'
                },
                {
                    name: 'Switzerland',
                    value: '1.1'
                },
                {
                    name: 'Syrian Arab Republic',
                    value: '1.2'
                },
                {
                    name: 'Tajikistan',
                    value: '4.9'
                },
                {
                    name: 'Thailand',
                    value: '9.7'
                },
                {
                    name: 'Macedonia',
                    value: '5.1'
                },
                {
                    name: 'Timor-Leste',
                    value: '8.1'
                },
                {
                    name: 'Togo',
                    value: '13.8'
                },
                {
                    name: 'Trinidad and Tobago',
                    value: '12.0'
                },
                {
                    name: 'Tunisia',
                    value: '1.9'
                },
                {
                    name: 'Turkey',
                    value: '1.7'
                },
                {
                    name: 'Turkmenistan',
                    value: '5.8'
                },
                {
                    name: 'Uganda',
                    value: '27.2'
                },
                {
                    name: 'Ukraine',
                    value: '6.4'
                },
                {
                    name: 'United Arab Emirates',
                    value: '4.4'
                },
                {
                    name: 'United Kingdom',
                    value: '1.8'
                },
                {
                    name: 'Tanzania',
                    value: '32.4'
                },
                {
                    name: 'United States',
                    value: '2.7'
                },
                {
                    name: 'Uruguay',
                    value: '7.1'
                },
                {
                    name: 'Uzbekistan',
                    value: '6.4'
                },
                {
                    name: 'Vanuatu',
                    value: '9.8'
                },
                {
                    name: 'Venezuela',
                    value: '12.3'
                },
                {
                    name: 'Vietnam',
                    value: '5.2'
                },
                {
                    name: 'West Bank and Gaza Strip',
                    value: '0.9'
                },
                {
                    name: 'Yemen',
                    value: '2.0'
                },
                {
                    name: 'Zambia',
                    value: '36.2'
                },
                {
                    name: 'Zimbabwe',
                    value: '35.3'
                }
            ]
        }]
    };
    myChart4.setOption(option);

    $(window).on('resize', function() {
        if (myChart4 != null && myChart4 != undefined) {
            myChart4.resize();
            console.log(myChart4);
        }
    });