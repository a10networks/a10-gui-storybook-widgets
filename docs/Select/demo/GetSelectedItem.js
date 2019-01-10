import * as React from 'react'
import { A10Select } from '../../../src'

const Opeion = A10Select.Option

function handleChange(value) {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

export default () => {
  return (
    <A10Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 120 }} onChange={handleChange}>
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </A10Select>
  )
}