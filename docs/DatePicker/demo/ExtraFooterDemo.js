import * as React from 'react'
import { A10DatePicker } from '../../../src'
import ComboIcons from './SuffixIcon'
const { A10RangePicker, A10MonthPicker } = A10DatePicker

const ExtraFooterDemo = () => {
  return (
    <div>
      <A10DatePicker renderExtraFooter={() => 'extra footer'} />
      <div style={{ height: 8 }} />
      <A10DatePicker renderExtraFooter={() => 'extra footer'} showTime />
      <div style={{ height: 8 }} />
      <A10RangePicker renderExtraFooter={() => 'extra footer'} />
      <div style={{ height: 8 }} />
      <A10RangePicker renderExtraFooter={() => 'extra footer'} showTime />
      <div style={{ height: 8 }} />
      <A10MonthPicker
        renderExtraFooter={() => 'extra footer'}
        placeholder="Select month"
      />
    </div>
  )
}

export default ExtraFooterDemo
