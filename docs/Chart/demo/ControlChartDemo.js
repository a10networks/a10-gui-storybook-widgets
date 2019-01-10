import * as React from 'react'

import { A10Chart, A10Button } from '../../../src'
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
export default class Example extends React.Component {
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
      console.log(this.state)
      this.setState({ disableFilter: !this.state.disableFilter })
    }

    const onClickMenu = options => {
      console.log(options)
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
      <div>
        <A10Chart.Detail
          types={['scatter', 'area', 'groupColumn', 'column', 'pie', 'detail']}
          settings={settingsContent}
          groups={groups}
          onClickMenu={onClickMenu}
          title="SSL INSPECTION STATUS"
          maxFilterNumber={3}
          chartConfig={this.state.config}
          counters={this.state.counters}
          type={this.state.type}
          disableFilter={this.state.disableFilter}
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
