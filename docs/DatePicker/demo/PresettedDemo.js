import * as React from 'react'
import { A10DatePicker } from '../../../src'
import * as moment from 'moment'
import ComboIcons from './SuffixIcon'
const { A10RangePicker } = A10DatePicker

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1])
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
}

const PresettedDemo = () => {
  return (
    <div>
      <A10RangePicker
        ranges={{
          Today: [moment(), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
        }}
        onChange={onChange}
      />
      <div style={{ height: 8 }} />
      <A10RangePicker
        ranges={{
          Today: [moment(), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
        }}
        showTime
        format="YYYY/MM/DD HH:mm:ss"
        onChange={onChange}
      />
    </div>
  )
}

export default PresettedDemo
