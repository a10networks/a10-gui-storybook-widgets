import * as React from 'react'
import { A10Component } from 'a10-gui-framework'
import { A10Chart } from '../../../src'

export default class PieDemo extends A10Component {
  render() {
    const additionalConfig = {
      title: {
        text: '',
        verticalAlign: 'middle',
        floating: true,
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
          size: '100%',
        },
      },
      series: [
        {
          type: 'pie',
          innerSize: '50%',
          data: [
            { name: 'USA', y: 300, color: '#4db6ac' },
            { name: 'Taiwan', y: 30, color: '#ef9a9a' },
            { name: 'China', y: 60, color: '#ffb74d' },
            { name: 'India', y: 60, color: '#ba68c8' },
            {
              name: 'Beijing',
              y: 10,
              color: '#7986cb',
            },
            {
              name: 'Japan',
              y: 25,
              color: '#a1887f',
            },
          ],
        },
      ],
    }

    const filterConfig = {
      enableFilters: true,
      alignment: 'center',
      showFilterByCaption: false,
    }
    return (
      <>
        <A10Chart.Pie config={additionalConfig} filterConfig={filterConfig} />
      </>
    )
  }
}
