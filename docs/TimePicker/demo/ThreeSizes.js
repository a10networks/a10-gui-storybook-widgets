import { A10TimePicker, A10Icon } from '../../../src'
import * as moment from 'moment'
import * as React from 'react'

const ThreeSizesDemo = () => {
  return (
    <div>
      <A10TimePicker
        defaultValue={moment('12:08:23', 'HH:mm:ss')}
        size="large"
      />
      <A10TimePicker
        defaultValue={moment('12:08:23', 'HH:mm:ss')}
        size="medium"
      />
      <A10TimePicker
        defaultValue={moment('12:08:23', 'HH:mm:ss')}
        size="small"
      />
    </div>
  )
}

export default ThreeSizesDemo
