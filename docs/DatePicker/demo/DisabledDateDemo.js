import * as React from 'react'
import * as moment from 'moment'
import { A10DatePicker } from '../../../src'
import ComboIcons from './SuffixIcon'

const { A10MonthPicker, A10RangePicker } = A10DatePicker

function range(start, end) {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day')
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  }
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    }
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  }
}

export const DisabledDateDemo = () => {
  return (
    <div>
      <A10DatePicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
      />
      <div style={{ height: 8 }} />
      <A10MonthPicker disabledDate={disabledDate} placeholder="Select month" />
      <div style={{ height: 8 }} />
      <A10RangePicker
        disabledDate={disabledDate}
        disabledTime={disabledRangeTime}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [
            moment('00:00:00', 'HH:mm:ss'),
            moment('11:59:59', 'HH:mm:ss'),
          ],
        }}
        format="YYYY-MM-DD HH:mm:ss"
      />
    </div>
  )
}

export default DisabledDateDemo
