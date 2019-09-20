import { A10TimePicker, A10Icon } from '../../../src'
import * as React from 'react'

function onChange(time, timeString) {
  console.log(time, timeString)
}

const TwelveDemo = () => {
  return (
    <div>
      <A10TimePicker use12Hours onChange={onChange} />
      <A10TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
      <A10TimePicker use12Hours format="h:mm a" onChange={onChange} />
    </div>
  )
}

export default TwelveDemo
