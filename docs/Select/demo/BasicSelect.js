import * as React from 'react'
import { A10Select } from '../../../src'

const Opeion = A10Select.Option

const handleChange = (value) => {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <div>
    <A10Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>Disabled</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </A10Select>
    <A10Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </A10Select>
    <A10Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </A10Select>
  </div>
  )
}
