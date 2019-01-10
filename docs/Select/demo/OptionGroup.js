import * as React from 'react'
import { A10Select } from '../../../src'

const { Option, OptGroup } = A10Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default () => {
  return (
    <A10Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
  >
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </A10Select>
  )
}