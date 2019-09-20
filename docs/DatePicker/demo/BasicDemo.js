import * as React from 'react'
import { A10DatePicker } from '../../../src'
import ComboIcons from './SuffixIcon'
const { A10MonthPicker, A10RangePicker, A10WeekPicker } = A10DatePicker

function onChange(date, dateString) {
  console.log(date, dateString)
}

const BasicDemo = () => {
  return (
    <div>
      <A10DatePicker onChange={onChange} />
      <div style={{ height: 8 }} />
      <A10MonthPicker onChange={onChange} placeholder="Select month" />
      <div style={{ height: 8 }} />
      <A10RangePicker onChange={onChange} />
      <div style={{ height: 8 }} />
      <A10WeekPicker onChange={onChange} placeholder="Select week" />
    </div>
  )
}

export default BasicDemo
