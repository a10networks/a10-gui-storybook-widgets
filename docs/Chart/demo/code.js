export const A10ChartDemoCode = `import * as React from 'react'
import { A10Component } from 'a10-gui-framework'
import { A10Chart } from 'a10-gui-widgets'

class MyComponent extends A10Component {
  componentDidMount() {
    let chart = this.refs.chart.getChart()
    chart.series[0].addPoint({ x: 10, y: 12 })
  }
  render() {
    const config = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
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
        },
      ],
    }
    return <A10Chart config={config} ref="chart" />
  }
}
`

export const mapChartCode = `import { A10Chart, A10Button } from 'a10-gui-widgets'
import TableContent from './TableContent'

const groups = [
    [
        {name: 'HTTP', actived: true},
        {name: 'HTTPS'},
        {name: 'FTP'},
        {name: 'SFTP'},
    ],
    [
        {name: 'UPLOAD', actived: true},
        {name: 'DOWNLOAD'},
    ]
]

const settingsContent = <div>
    <p>Add to Dashboard</p>
    <p>Options</p>
</div>

const defaultData = {
  'map': {
      type: 'map',
      config: {
          series: [{
            name: 'Geo-Locations',
            data: [
                { code: 'us', value: 100 },
                { code: 'in', value: 200 },
                { code: 'cn', value: 300 },
            ]
          }]
      },
      counters: {},
  },

  detail: {
      type: 'detail',
      config: <TableContent />
  }
}

class Example extends React.Component {

  constructor() {
      super()
      this.state = {
          disableFilter: true,
          ...defaultData.map,
      }
  }

  render() {

    const onClickMenu = (options) => {
        const type = options.type
        this.setState(defaultData[type])
        if (this.state.groups.length === options.groups.length) {
            this.state.groups.map((group, index) => {
                group.map((tab) => {
                    tab.actived = tab.name === options.groups[index]
                })
            })
        }
    }

    return (
      <div>
        <A10Chart.Detail
            types={['map', 'detail']}
            settings={settingsContent}
            onClickMenu={onClickMenu}
            title="WORLD MAP"
            chartConfig={this.state.config}
            counters={this.state.counters}
            type={this.state.type}
        />
      </div>
    )
  }
}
ReactDOM.render(<Example />, mountNode);`

export const summaryChartHalfCode = `import { A10Chart, A10Button } from 'a10-gui-widgets'

const config = {
    title: {
        text: 'Total<br />1.08 K',
        align: 'center',
        verticalAlign: 'middle',
        y: 20,
        style: { "color": "#999999", "fontSize": "16px" }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          {
            name: 'INFECTED',
            y: 10.38,
            color: '#ff2e48'
          },
          {
            name: 'SUSPICIOUS',
            y: 24.03,
            color: '#f5a623'
          },
          {
            name: 'GOOD',
            y: 56.33,
            color: '#00aa6c',
          },
        ]
    }]
  }

  const counters = [
      {
          name: 'INFECTED',
          counter: 203332,
          percent: 20
      },
      {
          name: 'SUSPICIOUS',
          counter: 453332,
          percent: 30
      },
      {
          name: 'GOOD',
          counter: 933332,
          percent: 50
      }
  ]

  class Example extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        chartConfig: config,
        counters: counters
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

ReactDOM.render(<Example />, mountNode);`

export const summaryChartCircleCode = `import { A10Chart, A10Button } from 'a10-gui-widgets'
const config = {
    title: {
        text: 'Total<br />1.08 K',
        align: 'center',
        verticalAlign: 'middle',
        y: 0,
        style: { "color": "#999999", "fontSize": "16px" }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -180,
            endAngle: 180,
            center: ['50%', '50%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          {
            name: 'INFECTED',
            y: 10.38,
            color: '#ff2e48'
          },
          {
            name: 'SUSPICIOUS',
            y: 24.03,
            color: '#f5a623'
          },
          {
            name: 'GOOD',
            y: 56.33,
            color: '#00aa6c',
          },
        ]
    }]
}

const counters = [
      {
          name: 'INFECTED',
          counter: 203332,
          percent: 20
      },
      {
          name: 'SUSPICIOUS',
          counter: 453332,
          percent: 30
      },
      {
          name: 'GOOD',
          counter: 933332,
          percent: 50
      }
]

class Example extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        chartConfig: config,
        counters: counters
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
ReactDOM.render(<Example />, mountNode);`

export const controlChartDemoCode = `
import { A10Chart, A10Button } from 'a10-gui-widgets'
import TableContent from './TableContent'

import {
  areaConfig,
  areaConfigCounter,
  pieConfig,
  pieConfigCounter,
  columnConfig,
  columnConfigCounter,
  groupColumnConfig,
  groupColumnCounter,
  scatterConfig,
  scatterConfigCounter,
} from './ChartConfig'

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

const defaultData = {
  scatter: {
    type: 'scatter',
    config: scatterConfig,
    counters: scatterConfigCounter,
  },
  area: {
    type: 'area',
    config: areaConfig,
    counters: areaConfigCounter,
  },
  column: {
    type: 'column',
    config: columnConfig,
    counters: columnConfigCounter,
  },
  groupColumn: {
    type: 'groupColumn',
    config: groupColumnConfig,
    counters: groupColumnCounter,
  },
  pie: {
    type: 'pie',
    config: pieConfig,
    counters: pieConfigCounter,
  },
  detail: {
    type: 'detail',
    config: <TableContent />,
  },
}

class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      type: 'scatter',
      disableFilter: false,
      config: scatterConfig,
      counters: scatterConfigCounter,
      groups: ['HTTP', 'UPLOAD'],
    }
  }

  render() {
    const showFilter = () => {
      this.setState({ disableFilter: !this.state.disableFilter })
    }

    const onClickMenu = options => {
      const type = options.type
      this.setState(defaultData[type])
      if (this.state.groups.length === options.groups.length) {
        this.state.groups.map((group, index) => {
          groups[index].map(tab => {
            tab.actived = tab.name === options.groups[index]
          })
        })
      }
    }

    return (
      <div style={{ width: '100%' }}>
        <A10Chart.Detail
          types={[
            'scatter',
            'area',
            'groupColumn',
            'column',
            'pie',
            'detail',
            'semi_donut',
            'donut',
            'treemap',
          ]}
          settings={settingsContent}
          groups={groups}
          onClickMenu={onClickMenu}
          title="SSL INSPECTION STATUS"
          description="SSL INSPECTION STATUS"
          maxFilterNumber={3}
          chartConfig={this.state.config}
          counters={this.state.counters}
          type={this.state.type}
          disableFilter={this.state.disableFilter}
          showTitle={true}
          showSettingIcon={false}
          showChartIcons={false}
          showChartHeaderMenu={true}
        />

        <div style={{ marginTop: '10px' }}>
          <A10Button onClick={showFilter}>
            {this.state.disableFilter ? 'Show Filters' : 'Hide Filters'}
          </A10Button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Example />, mountNode);
`

export const simpleUsageChartCode = `import { A10Chart, A10Button } from 'a10-gui-widgets'
import TableContent from './TableContent'

import {
    areaConfig,
    areaConfigCounter,
    pieConfig,
    pieConfigCounter,
    columnConfig,
    columnConfigCounter,
} from './ChartConfig'

const settingsContent = <div>
    <p>Add to Dashboard</p>
    <p>Options</p>
</div>

const defaultData = {
    area: {
        type: 'area',
        config: areaConfig,
        counters: areaConfigCounter
    },
    column: {
        type: 'column',
        config: columnConfig,
        counters: columnConfigCounter
    },
    pie: {
        type: 'pie',
        config: pieConfig,
        counters: pieConfigCounter
    },
    detail: {
        type: 'detail',
        config: <TableContent />
    }
}

export default class Example extends React.Component {

  constructor() {
      super()
      this.state = {
          type: 'area',
          showFilter: true,
          config: areaConfig,
          counters: areaConfigCounter,
      }
  }

  render() {
    const showFilter = () => {
      this.setState({ showFilter: !this.state.showFilter })
    }
    const onClickMenu = (options) => {
        const type = options.type
        this.setState(defaultData[type])
        if (this.state.groups.length === options.groups.length) {
            this.state.groups.map((group, index) => {
                group.map((tab) => {
                    tab.actived = tab.name === options.groups[index]
                })
            })
        }
    }
    return (
      <div>
        <A10Chart.Detail
            types={['area', 'column', 'pie', 'detail']}
            settings={settingsContent}
            onClickMenu={onClickMenu}
            title="SSL INSPECTION STATUS"
            maxFilterNumber={3}
            chartConfig={this.state.config}
            counters={this.state.counters}
            type={this.state.type}
        />
      </div>
    )
  }
}

ReactDOM.render(<Example />, mountNode);`

export const simpleHeaderChartDemoCode = `import { A10Chart, A10Button } from 'a10-gui-widgets'

const columnConfigSingle = {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Stacked column chart'
  },
  xAxis: {
      title: {
          enabled: false,
      },
  },
  yAxis: {
      title: {
          enabled: false,
      },
  },
  tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: false,
          },
          pointPadding: 0,
          groupPadding: 0,
      },
  },
  series: [{
      name: 'Good',
      color: '#00aa6c',
      data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2,
          5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2,
          2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1]
  }, {
      name: 'Suspicious',
      color: '#f5a623',
      data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1,
          5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2,
          2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1]
  }, {
      name: 'Infected',
      color: '#ff0927',
      data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5,
          5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2,
          3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5]
  }, {
      name: 'Failed',
      color: '#bababa',
      data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2,
          5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2,
          3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5]
  }]
}

const columnConfigSingleCounter = {
  total: 168,
  filters: {
    'Good':156,
    'Suspicious': 124,
    'Infected': 110.38,
    'Failed': 104.77,
  }
}

export default class Example extends React.Component {

  constructor() {
      super()
      this.state = {
          type: 'column',
          config: columnConfigSingle,
          counters: columnConfigSingleCounter,
      }
  }

  render() {
    const onChangeFilter = (filters) => {
      console.log(filters)
    }
    return (
      <div>
        <A10Chart.Detail
            useSimpleHeader={true}
            title="Total 1,423 Threats Detected"
            maxFilterNumber={4}
            height={300}
            chartConfig={this.state.config}
            counters={this.state.counters}
            type={this.state.type}
            onChangeFilter={onChangeFilter}
        />
      </div>
    )
  }
}

ReactDOM.render(<Example />, mountNode);`

export const A10ChartPieCode = `import * as React from 'react'
import { A10Component } from 'a10-gui-framework'
import { A10Chart } from '../../../src'

export default class PieDemo extends A10Component {
  render() {
    const additionalConfig = {
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
      <A10Chart.Pie config={additionalConfig} filterConfig={filterConfig} />
    )
  }
}
`
