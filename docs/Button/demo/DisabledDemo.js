import * as React from 'react'
import { A10Button } from '../../../src'

const DisabledDemo = () => {
  return (
    <div>
      <A10Button type="primary">Primary</A10Button> &nbsp;
      <A10Button type="primary" disabled>
        Primary(disabled)
      </A10Button>
      <br />
      <A10Button>Default</A10Button> &nbsp;
      <A10Button disabled>Default(disabled)</A10Button>
      <br />
      <A10Button type="dashed">Dashed</A10Button> &nbsp;
      <A10Button type="dashed" disabled>
        Dashed(disabled)
      </A10Button>
      <div
        style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}
      >
        <A10Button ghost>Ghost</A10Button> &nbsp;
        <A10Button ghost disabled>
          Ghost(disabled)
        </A10Button>
      </div>
    </div>
  )
}

export default DisabledDemo
