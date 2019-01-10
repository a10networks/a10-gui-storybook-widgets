import * as React from 'react'
import { A10Radio } from '../../../src'

const RadioGroup = A10Radio.Group
const RadioButton = A10Radio.Button
const onChange = (e) => {
  console.log(`radio checked:${e.target.value}`);
}

const Example = () => {
  return (
    <div>
      <div>
        <RadioGroup onChange={onChange} defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div style={{ marginTop: 16 }}>
        <RadioGroup onChange={onChange} defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b" disabled>Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div style={{ marginTop: 16 }}>
        <RadioGroup disabled onChange={onChange} defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
    </div>
  )
}

export default Example
