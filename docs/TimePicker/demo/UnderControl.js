import { A10TimePicker, A10Icon } from '../../../src'
import * as React from 'react'

export default class Demo extends React.Component {
  state = {
    value: null,
  }

  onChange = time => {
    console.log(time)
    this.setState({ value: time })
  }

  render() {
    return <A10TimePicker value={this.state.value} onChange={this.onChange} />
  }
}
