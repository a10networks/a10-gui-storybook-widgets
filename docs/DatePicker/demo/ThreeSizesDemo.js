import * as React from 'react'
import { A10DatePicker, A10Radio } from '../../../src'
import ComboIcons from './SuffixIcon'
const { A10MonthPicker, A10RangePicker, A10WeekPicker } = A10DatePicker

export default class PickerSizesDemo extends React.Component {
  state = {
    size: 'default',
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value })
  }

  render() {
    const { size } = this.state
    return (
      <div>
        <A10Radio.Group value={size} onChange={this.handleSizeChange}>
          <A10Radio.Button value="large">Large</A10Radio.Button>
          <A10Radio.Button value="default">Default</A10Radio.Button>
          <A10Radio.Button value="small">Small</A10Radio.Button>
        </A10Radio.Group>
        <br />
        <br />
        <A10DatePicker
          suffixIcon={<ComboIcons size={size} />}
          placeholder="Select Date"
          size={size}
        />
        <div style={{ height: 8 }} />
        <A10MonthPicker size={size} placeholder="Select Month" />
        <div style={{ height: 8 }} />
        <A10RangePicker size={size} />
        <div style={{ height: 8 }} />
        <A10WeekPicker size={size} placeholder="Select Week" />
      </div>
    )
  }
}
