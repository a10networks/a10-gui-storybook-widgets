import * as React from 'react'
import filterMapping from './FilterMapping'
import { A10FilterTree, A10Button } from '../../src'

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.onChangeFilter = this.onChangeFilter.bind(this)
    this.changeFilter = this.changeFilter.bind(this)
    this.state = {
      groups: filterMapping,
      useSwitch: false,
    }
  }

  onChangeFilter(filters) {
    console.log('Change Filters:', filters)
  }

  changeFilter() {
    const { groups } = this.state
    groups.push({
      label: 'Protocol222',
      filters: [],
      type: 'scroll',
      min: 0,
      max: 10,
      orderInfo: {},
      'total-count': 10,
    })
    this.setState({ groups })
  }

  onClickChangeSwitch = () => {
    this.setState({ useSwitch: !this.state.useSwitch })
  }
  render() {
    return (
      <div>
        <A10FilterTree
          useSwitch={this.state.useSwitch}
          groups={this.state.groups}
          data={{
            'IP Version': ['Chrome', 'Firefox'],
          }}
          hideFilterCounter={false}
          onChangeFilter={this.onChangeFilter}
        />
        {/* <button onClick={this.changeFilter}>Change</button> */}
        <A10Button onClick={this.onClickChangeSwitch}>
          {this.state.useSwitch ? 'Use CheckBox' : 'Use Swtich'}
        </A10Button>
      </div>
    )
  }
}
export default Example
