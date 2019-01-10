import * as React from 'react'
import { A10Select, A10Icon, A10Divider} from '../../../src'

const Opeion = A10Select.Option

function handleChange(value) {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
}

export default () => {
  return (
    <A10Select
    defaultValue="lucy"
    style={{ width: 120 }}
    dropdownRender={menu => (
      <div>
        {menu}
        <A10Divider style={{ margin: '4px 0' }} />
        <div style={{ padding: '8px', cursor: 'pointer' }}>
          <A10Icon type="plus" /> Add item
        </div>
      </div>
    )}
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
  </A10Select>
  )
}