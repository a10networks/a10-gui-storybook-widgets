import * as React from 'react'
import { A10Radio } from '../../../src'

const RadioButton = A10Radio.Button;
const RadioGroup = A10Radio.Group;
const Example = () => {
  return (
    <div>
      <div>
        <RadioGroup defaultValue="a" size="large">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div style={{ marginTop: 16 }} size="default">
        <RadioGroup defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div style={{ marginTop: 16 }}>
        <RadioGroup defaultValue="a" size="small">
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