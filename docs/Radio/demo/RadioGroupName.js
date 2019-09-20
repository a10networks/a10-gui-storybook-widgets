import * as React from 'react'
import { A10Radio } from '../../../src'

const RadioGroup = A10Radio.Group;

const Example = () => {
  return (
    <RadioGroup name="radiogroup" defaultValue={1}>
      <A10Radio value={1}>A</A10Radio>
      <A10Radio value={2}>B</A10Radio>
      <A10Radio value={3}>C</A10Radio>
      <A10Radio value={4}>D</A10Radio>
    </RadioGroup>
  )
}

export default Example