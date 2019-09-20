import * as React from 'react'
import { A10Chart, A10Button } from '../../../src'

const config = {
  title: {
    text: 'Total<br />1.08 K',
    align: 'center',
    verticalAlign: 'middle',
    y: 0,
    style: { color: '#999999', fontSize: '16px' },
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'white',
        },
      },
      startAngle: -180,
      endAngle: 180,
      center: ['50%', '50%'],
    },
  },
  series: [
    {
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
        {
          name: 'INFECTED',
          y: 10.38,
          color: '#ff2e48',
        },
        {
          name: 'SUSPICIOUS',
          y: 24.03,
          color: '#f5a623',
        },
        {
          name: 'GOOD',
          y: 56.33,
          color: '#00aa6c',
        },
      ],
    },
  ],
}

const counters = [
  {
    name: 'INFECTED',
    counter: 123.12,
    percent: 11.4,
  },
  {
    name: 'SUSPICIOUS',
    counter: 286.2,
    percent: 26.5,
  },
  {
    name: 'GOOD',
    counter: 670.68,
    percent: 62.1,
  },
]

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chartConfig: config,
      counters: counters,
    }
  }

  render() {
    return (
      <A10Chart.Summary
        title="FILES STATUS"
        counters={this.state.counters}
        chartConfig={this.state.chartConfig}
      />
    )
  }
}

export default Example
