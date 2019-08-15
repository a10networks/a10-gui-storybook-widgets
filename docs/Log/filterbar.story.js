import * as React from 'react'
import { withReadme } from 'storybook-readme'
import * as moment from 'moment'

import { Code, CodeComponent, CodeCard } from '../utils'
import FilterBar from '../../src/Log/FilterBar'
const A10FilterBar = require('../../src/Log/FilterBar/README.md')

class ExampleCustom extends React.Component {
  loadInterval: any
  state = {
    selectValue: 4,
    disable: false,
    timePeriodType: 0,
    timeRange: [moment().subtract(6, 'hours'), moment()],
  }

  getTimeRage = () => {
    const { timePeriodType } = this.state
    let timeRange
    if (timePeriodType === 0) {
      timeRange = [moment().subtract(30, 'minutes'), moment()]
    } else if (timePeriodType === 1) {
      timeRange = [moment().subtract(1, 'hours'), moment()]
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
    this.setState({ selectValue: value })
    clearInterval(this.loadInterval)
    this.loadInterval = setInterval(repeat, 5000)
  }

  onChangeTimeRange = (periods, lockTimePeriod, type) => {
    if (periods[1].format('X') !== lockTimePeriod[1].format('X')) {
      this.setState({ selectValue: 0, disable: true })
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
        selectedTimePeriod={this.state.selectedTimePeriod}
        timePeriodOpts={['30 Mins', '1 Hour', '6 Hours']}
        defaultTimePeriod="6 Hours"
        enableSimplifiedMode={true}
        enableTimeRepeat={true}
        enableDatePickerMode={true}
        isTimePeriodOptsEnabled={true}
        isOpenCustomTimeSelector={true}
        rangeBarOptions={{
          value: this.state.selectValue,
          size: 30,
          disable: this.state.disable,
          onClickRefresh: this.onClickRefresh,
          onChangeTimeRepeat: this.onChangeTimeRepeat,
        }}
        onChangeTimeRange={this.onChangeTimeRange}
        enableCustomRange={false}
      />
    )
  }
}

const Example = props => {
  const exampleCode = `
    <FilterBar
      timePeriod={[moment(), moment().add(7, 'days')]}
      onChangeTimeRange={(timePeriod: moment.Moment[]) => {}}
      onChangeCurrentTime={() => {}}
    />`
  const exampleCode2 = `
  <FilterBar timePeriod={[moment(), moment().add(7, 'days')]} />`

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
