import * as React from 'react'
import { withReadme } from 'storybook-readme'
import * as moment from 'moment'

import { Code, CodeComponent, CodeCard } from '../utils'
import FilterBar from '../../src/Log/FilterBar'
const A10FilterBar = require('../../src/Log/FilterBar/README.md')

class ExampleCustom extends React.Component {
  loadInterval
  timeRangeForAllTime = [moment().subtract(1, 'hours'), moment()]
  state = {
    disable: true,
    timePeriodType: 7,
    timeRange: this.timeRangeForAllTime,
  }

  getTimeRage = () => {
    const { timePeriodType } = this.state
    let timeRange
    if (timePeriodType === 0) {
      timeRange = [moment().subtract(30, 'minutes'), moment()]
    } else if (timePeriodType === 1) {
      timeRange = [moment().subtract(1, 'hours'), moment()]
    } else if (timePeriodType === 7) {
      timeRange = this.timeRangeForAllTime
    } else {
      timeRange = [moment().subtract(6, 'hours'), moment()]
    }
    return timeRange
  }

  onChangeTimeRepeat = value => {
    const repeat = () => {
      const timeRange = this.getTimeRage()
      this.setState({ timeRange })
    }
    clearInterval(this.loadInterval)
    this.loadInterval = setInterval(repeat, 5000)
  }

  onChangeTimeRange = (periods, lockTimePeriod, type, typeName) => {
    console.log(periods, lockTimePeriod, type, typeName)
    if (periods[1].format('X') !== lockTimePeriod[1].format('X')) {
      this.setState({ disable: true })
      clearInterval(this.loadInterval)
    } else {
      this.setState({ disable: false })
    }
  }

  onClickRefresh = () => {
    this.setState({ disable: false })
    return this.getTimeRage()
  }

  render() {
    return (
      <FilterBar
        timePeriod={this.state.timeRange}
        isTimePeriodOptsEnabled={true}
        timePeriodOpts={[
          3600,
          '6hours',
          'today',
          'divider',
          'yesterday',
          172800,
          'last7',
          'last30',
          'allTime',
        ]}
        defaultTimePeriod={'allTime'}
        enableSimplifiedMode={true}
        enableTimeRepeat={false}
        showTimeRepeat={true}
        isOpenCustomTimeSelector={true}
        rangeBarOptions={{
          size: 30,
          disable: this.state.disable,
          onClickRefresh: this.onClickRefresh,
          onChangeTimeRepeat: this.onChangeTimeRepeat,
        }}
        onChangeTimeRange={this.onChangeTimeRange}
        enableDatePickerMode={true}
        enableCustomRange={true} // custom range depends on whether date picker is true/false
      />
    )
  }
}

const Example = props => {
  const exampleCode = `
import React from 'react'
import moment from 'moment'
import { A10FilterBar } from 'a10-gui-widgets'

class ExampleCustom extends React.Component {
  loadInterval
  timeRangeForAllTime = [
    moment().subtract(1, 'hours'), moment()
  ]
  state = {
    disable: true,
    timePeriodType: 7,
    timeRange: this.timeRangeForAllTime,
  }

  getTimeRage = () => {
    const { timePeriodType } = this.state
    let timeRange
    if (timePeriodType === 0) {
      timeRange = [moment().subtract(30, 'minutes'), moment()]
    } else if (timePeriodType === 1) {
      timeRange = [moment().subtract(1, 'hours'), moment()]
    } else if (timePeriodType === 7) {
      timeRange = this.timeRangeForAllTime
    } else {
      timeRange = [moment().subtract(6, 'hours'), moment()]
    }
    return timeRange
  }

  onChangeTimeRepeat = value => {
    const repeat = () => {
      const timeRange = this.getTimeRage()
      this.setState({ timeRange })
    }
    clearInterval(this.loadInterval)
    this.loadInterval = setInterval(repeat, 5000)
  }

  onChangeTimeRange = (periods, lockTimePeriod, type, typeName) => {
    console.log(periods, lockTimePeriod, type, typeName)
    if (
      periods[1].format('X') !== lockTimePeriod[1].format('X')
    ) {
      this.setState({ disable: true })
      clearInterval(this.loadInterval)
    } else {
      this.setState({ disable: false })
    }
  }

  onClickRefresh = () => {
    this.setState({ disable: false })
    return this.getTimeRage()
  }

  render() {
    return (
      <A10FilterBar
        timePeriod={this.state.timeRange}
        isTimePeriodOptsEnabled={true}
        timePeriodOpts={[
          3600,
          '6hours',
          'today',
          'divider',
          'yesterday',
          172800,
          'last7',
          'last30',
          'allTime',
        ]}
        defaultTimePeriod={'allTime'}
        enableSimplifiedMode={true}
        enableTimeRepeat={true}
        isOpenCustomTimeSelector={true}
        rangeBarOptions={{
          size: 30,
          disable: this.state.disable,
          onClickRefresh: this.onClickRefresh,
          onChangeTimeRepeat: this.onChangeTimeRepeat,
        }}
        onChangeTimeRange={this.onChangeTimeRange}
        enableDatePickerMode={true}
        enableCustomRange={true} // custom range depends on whether date picker is true/false
      />
    )
  }
}
  `
  const exampleCode2 = `
  <A10FilterBar timePeriod={[moment(), moment().add(7, 'days')]} />`

  return (
    <CodeComponent>
      <CodeCard title="Basic Usage" code={<Code string={exampleCode} />}>
        <ExampleCustom />
      </CodeCard>
      <CodeCard title="Calendar usage" code={<Code string={exampleCode2} />}>
        <FilterBar timePeriod={[moment(), moment().add(7, 'days')]} />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10LogFilterBar', withReadme(A10FilterBar, Example))
}
