import * as React from 'react'
import { A10Component } from 'a10-gui-framework'
import { A10Chart } from '../../../src'

export class MyComponent extends A10Component {
  render() {
    const config = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      credits: {
        enabled: false,
      },
      title: {
        text: null,
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
          },
          shadow: false,
        },
      },
      series: [
        {
          type: 'pie',
          innerSize: '50%',
          data: [
            { name: 'USA', y: 300 },
            { name: 'Taiwan', y: 30 },
            { name: 'China', y: 60 },
            { name: 'India', y: 60 },
            {
              name: 'Other',
              y: 7.61,
            },
          ],
          colors: [
            '#109618',
            '#ff9900',
            '#dc3912',
            '#990099',
            '#9f9aff',
            '#70d1fc',
            '#e37efb',
            '#61fadd',
            '#ffe27b',
            '#3366cc',
          ]
        },
      ],
    }
    return <A10Chart config={config} ref="chart" />
  }
}
export default MyComponent
