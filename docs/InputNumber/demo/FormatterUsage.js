import * as React from 'react'
import { A10InputNumber } from '../../../src'

const onChange = value => {
  console.log('changed', value)
}

const Example = () => (
  <div>
    <A10InputNumber
      defaultValue={1000}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
    &nbsp;&nbsp;
    <A10InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={value => `${value}%`}
      parser={value => value.replace('%', '')}
      onChange={onChange}
    />
  </div>
)

export default Example
