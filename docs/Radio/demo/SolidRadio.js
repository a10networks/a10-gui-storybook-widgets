import * as React from 'react'
import { A10Radio } from '../../../src'

const Example = () => {
  return (
    <div>
    <div>
      <A10Radio.Group defaultValue="a" buttonStyle="solid">
        <A10Radio.Button value="a">Hangzhou</A10Radio.Button>
        <A10Radio.Button value="b">Shanghai</A10Radio.Button>
        <A10Radio.Button value="c">Beijing</A10Radio.Button>
        <A10Radio.Button value="d">Chengdu</A10Radio.Button>
      </A10Radio.Group>
    </div>
    <div style={{ marginTop: 16 }}>
      <A10Radio.Group defaultValue="c" buttonStyle="solid">
        <A10Radio.Button value="a">Hangzhou</A10Radio.Button>
        <A10Radio.Button value="b" disabled>Shanghai</A10Radio.Button>
        <A10Radio.Button value="c">Beijing</A10Radio.Button>
        <A10Radio.Button value="d">Chengdu</A10Radio.Button>
      </A10Radio.Group>
    </div>
  </div>
  )
}

export default Example