import * as React from 'react'
import { A10Chart, A10Button } from '../../../src'

const config = {
  title: {
    text: 'Total<br />1.08 K',
    align: 'center',
    verticalAlign: 'middle',
    y: 20,
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
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
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
        {
          name: 'Proprietary or Undetectable',
          y: 0.2,
          dataLabels: {
            enabled: false,
          },
        },
      ],
    },
  ],
}

const counters = [
  {
    name: 'INFECTED',
    counter: 203332,
    percent: 20,
  },
  {
    name: 'SUSPICIOUS',
    counter: 453332,
    percent: 30,
  },
  {
    name: 'GOOD',
    counter: 933332,
    percent: 50,
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
        description="FILES STATUS"
        // counters={this.state.counters}
        chartConfig={this.state.chartConfig}
        hideLegend={true}
      />
    )
  }
}

export default Example
