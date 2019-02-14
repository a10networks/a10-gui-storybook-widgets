import * as React from 'react'

import { A10Chart, A10Button } from '../../../src'

import { columnConfigSingle, columnConfigSingleCounter } from './ChartConfig'

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
    const onChangeFilter = filters => {
      console.log(filters)
    }
    const toDisable = () => {
      const { config } = this.state
      const newSeries = config.series.map(item => {
        if (item.name === 'Good') {
          item.disable = true
        }
        return item
      })
      config.series = newSeries
      this.setState({ config })
    }
    return (
      <div>
        <A10Chart.Detail
          useSimpleHeader={true}
          title="Total 1,423 Threats Detected"
          description="Total 1,423 Threats Detected"
          maxFilterNumber={4}
          height={300}
          chartConfig={this.state.config}
          counters={this.state.counters}
          type={this.state.type}
          onChangeFilter={onChangeFilter}
        />
        <br />
        <br />
        <A10Button onClick={toDisable}>Defualt Disable Filter</A10Button>
      </div>
    )
  }
}
