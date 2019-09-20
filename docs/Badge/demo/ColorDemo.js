import { A10Badge } from '../../../src'
import * as React from 'react'

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
]

const ColorDemo = () => {
  return (
    <div>
      <h4 style={{ marginBottom: 16 }}>Presets:</h4>
      <div>
        {colors.map(color => (
          <div key={color}>
            <A10Badge color={color} text={color} />
          </div>
        ))}
      </div>
      <h4 style={{ margin: '16px 0' }}>Custom:</h4>
      <div>
        <A10Badge color="#f50" text="#f50" />
        <br />
        <A10Badge color="#2db7f5" text="#2db7f5" />
        <br />
        <A10Badge color="#87d068" text="#87d068" />
        <br />
        <A10Badge color="#108ee9" text="#108ee9" />
      </div>
    </div>
  )
}

export default ColorDemo
