import * as React from 'react'
import { A10InputNumber } from '../../../src'

const onChange = value => {
  console.log('changed', value)
}

const Example = () => (
  <A10InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
)

export default Example
