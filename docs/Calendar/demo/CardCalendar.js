import { A10Calendar } from '../../../src'
import * as React from 'react'
class Example extends React.Component {
  onPanelChange = (value, mode) => {
    console.log(value, mode)
  }
  render() {
    return (
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <A10Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
      </div>
    )
  }
}
export default Example
