import { Options } from 'highcharts';

export const barChart: Options = {
  chart: {
    type: 'bar',
  },
  credits: {
    enabled: false
  },
  title: {
    text: '',
  },
  yAxis: {
    visible: false,
    gridLineColor: '#fff',
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    lineColor: '#fff',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },

  plotOptions: {
    series: {
      borderRadius: 5,
    } as any,
  },

  series: [
    {
      type: 'bar',
      color: '#506ef9',
      data: [
        { y: 20.9, color: '#fc5185'},
        { y: 71.5 ,color: '#fc5185'},
        { y: 106.4 , color: '#fc5185'},
        { y: 129.2 , color: '#fc5185'},
        { y: 144.0, color: '#fc5185' },
        { y: 176.0 ,color: '#fc5185'},
        { y: 135.6 , color: '#fc5185'},
        { y: 148.5 , color: '#fc5185'},
        { y: 216.4, color: '#fc5185' },
        { y: 194.1 , color: '#fc5185'},
        { y: 95.6 , color: '#fc5185'},
        { y: 54.4 , color: '#fc5185'},
      ],
    },
  ],
};
