import { A10TimePicker, A10Icon } from '../../../src'
import * as moment from 'moment'
import * as React from 'react'

const format = 'HH:mm'

const HourMinExample = () => {
  return (
    <A10TimePicker defaultValue={moment('12:08', format)} format={format} />
  )
}
export default HourMinExample
