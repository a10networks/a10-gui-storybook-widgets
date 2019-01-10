import * as React from 'react'
import { A10DatePicker } from '../../../src'
import ComboIcons from './SuffixIcon'
const { A10MonthPicker, A10RangePicker, A10WeekPicker } = A10DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const BasicDemo = () => {
  return (
    <div>
      <A10DatePicker suffixIcon={<ComboIcons />} onChange={onChange} />
      <br />
      <A10MonthPicker suffixIcon={<ComboIcons />} onChange={onChange} placeholder="Select month" />
      <br />
      <A10RangePicker suffixIcon={<ComboIcons />} onChange={onChange} />
      <br />
      <A10WeekPicker suffixIcon={<ComboIcons />} onChange={onChange} placeholder="Select week" />
    </div>
  )
}

export default BasicDemo