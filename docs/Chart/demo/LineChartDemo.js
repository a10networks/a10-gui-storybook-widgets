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
