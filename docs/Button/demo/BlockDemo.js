import * as React from 'react'
import { A10Button } from '../../../src'

const BlockDemo = () => {
  return (
    <div>
      <A10Button type="primary" block>
        Primary
      </A10Button>
      <div style={{ width: 1, height: 8 }} />
      <A10Button block>Default</A10Button>
      <div style={{ width: 1, height: 8 }} />
      <A10Button type="dashed" block>
        Dashed
      </A10Button>
      <div style={{ width: 1, height: 8 }} />
      <A10Button type="danger" block>
        danger
      </A10Button>
    </div>
  )
}

export default BlockDemo
