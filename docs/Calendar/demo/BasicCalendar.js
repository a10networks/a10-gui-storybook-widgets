import * as React from 'react'
import { A10Calendar } from '../../../src'
class Example extends React.Component {
  onPanelChange = (value, mode) => {
    console.log(value, mode)
  }

  render() {
    return <A10Calendar onPanelChange={this.onPanelChange} />
  }
}

export default Example
