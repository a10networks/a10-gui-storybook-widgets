import * as React from 'react'

import { A10Chart } from '../../../src'
import worldMapData from '../../../src/Chart/maps/WorldEckertHigh'

import TableContent from './TableContent'

const groups = [
  [
    { name: 'HTTP', actived: true },
    { name: 'HTTPS' },
    { name: 'FTP' },
    { name: 'SFTP' },
  ],
  [{ name: 'UPLOAD', actived: true }, { name: 'DOWNLOAD' }],
]

const settingsContent = (
  <div>
    <p>Add to Dashboard</p>
    <p>Options</p>
  </div>
)

const defaultConfig = {
  title: {
    text: 'World population 2013 by country',
  },

  subtitle: {
    text: 'Demo of Highcharts map with bubbles',
  },
  legend: {
    enabled: false,
  },

  mapNavigation: {
    enabled: false,
  },
  plotOptions: {
    map: {
      // allAreas: false,
      color: '#a1a4a0',
      joinBy: ['hc-key', 'code'],
      mapData: worldMapData,
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}<br/>{point.value}',
      },
    },
    mapbubble: {
      color: '#a1a4a0',
      joinBy: ['hc-key', 'code'],
      mapData: worldMapData,
      dataLabels: {
        enabled: false,
      },
      minSize: 4,
      maxSize: '12%',
      tooltip: {
        pointFormat: '{point.properties.hc-a2}: {point.z} thousands',
      },
    },
  },
  series: [
    {
      name: 'Geo-Locations',
      type: 'map',
      filterVisible: false,
    },
    {
      type: 'mapbubble',
      name: 'Access Latency',
      data: [
        { code: 'us', z: 100, color: 'pink' },
        { code: 'in', z: 200, color: 'skyblue' },
        { code: 'cn', z: 300, color: 'purple' },
        {
          z: 105,
          code: 'mp',
        },
        {
          'iso-a3': 'AFG',
          z: 34656,
          code: 'af',
        },
        {
          'iso-a3': 'AGO',
          z: 28813,
          code: 'ao',
        },
        {
          'iso-a3': 'ALB',
          z: 2876,
          code: 'al',
        },
        {
          'iso-a3': 'AND',
          z: 77,
          code: 'ad',
        },
        {
          'iso-a3': 'ARE',
          z: 9270,
          code: 'ae',
        },
        {
          'iso-a3': 'ARG',
          z: 43847,
          code: 'ar',
        },
      ],
    },
    {
      type: 'mapbubble',
      name: 'HTTP/HTTPS',
      color: '#4dd0e1',
      data: [
        { code: 'us', z: 150000 },
        { code: 'in', z: 2000 },
        { code: 'cn', z: 300},
        {
          z: 10,
          code: 'mp',
        },
        {
          'iso-a3': 'AFG',
          z: 34,
          code: 'af',
        },
        {
          'iso-a3': 'AGO',
          z: 28,
          code: 'ao',
        },
        {
          'iso-a3': 'ALB',
          z: 28,
          code: 'al',
        },
        {
          'iso-a3': 'AND',
          z: 50000,
          code: 'ad',
        },
        {
          'iso-a3': 'ARE',
          z: 92,
          code: 'ae',
        },
        {
          'iso-a3': 'ARG',
          z: 4,
          code: 'ar',
        },
      ],
    },
    {
      type: 'mapbubble',
      name: 'BANDWIDTH',
      color: '#9575cd',
      data: [
        { code: 'us', z: 40000 },
        { code: 'in', z: 200000 },
        { code: 'cn', z: 30000},
        {
          z: 100,
          code: 'mp',
        },
        {
          'iso-a3': 'AFG',
          z: 340,
          code: 'af',
        },
        {
          'iso-a3': 'AGO',
          z: 280,
          code: 'ao',
        },
        {
          'iso-a3': 'ALB',
          z: 280,
          code: 'al',
        },
        {
          'iso-a3': 'AND',
          z: 500,
          code: 'ad',
        },
        {
          'iso-a3': 'ARE',
          z: 920,
          code: 'ae',
        },
        {
          'iso-a3': 'ARG',
          z: 400,
          code: 'ar',
        },
      ],
    },
  ],
}

export default class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      disableFilter: true,
      chartConfig: defaultConfig,
    }
  }
  getChartCounters = () => {
    const { chartConfig } = this.state
    const data = chartConfig.series || []
    let total = 0
    let filters = {} as any
    data.forEach((series: IObject) => {
      if (series.data){
        filters[series.name] = 0
        series.data.forEach((country: IObject) => {
          total += country.z
          filters[series.name] += country.z
        })
      }
    })
    return { total, filters }
  }
  // onChangeFilter = (filter: any) => {
  //   // console.log('filter', filter)
  // }
  render() {
    const counters = this.getChartCounters()
    return (
      <div>
        <A10Chart.Detail
          types={['map_bubble']}
          title="Map Bubble"
          chartConfig={this.state.chartConfig}
          counters={counters}
          type={'map_bubble'}
          disableFilter={false}
          maxFilterNumber={defaultConfig.series.length - 1}
          // onChangeFilter={this.onChangeFilter}
        />
      </div>
    )
  }
}
