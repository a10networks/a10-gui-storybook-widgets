import { A10TimePicker, A10Icon } from '../../../src'
import * as moment from 'moment'
import * as React from 'react'

const DisableDemo = () => {
  return (
    <div id="DisabledTimepickerSpecific">
      <A10TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
    </div>
  )
}

export default DisableDemo
