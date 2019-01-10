import * as React from 'react'
import { A10Select } from '../../../src'

const Opeion = A10Select.Option

const handleChange = (value) => {
  console.log(`selected ${value}`);
}

function handleBlur() {
    console.log('blur');
  }
  
  function handleFocus() {
    console.log('focus');
  }

export default () => {
  return (
    <A10Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </A10Select>
  )
}