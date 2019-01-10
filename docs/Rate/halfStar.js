import * as React from 'react'
import { A10Rate } from '../../src'

export const halfStarString = `import { A10Rate } from 'a10-gui-widgets';

ReactDOM.render(<A10Rate allowHalf defaultValue={2.5} />, mountNode);`

export const HalfStarDemo = () => {
  return (
    <A10Rate allowHalf defaultValue={2.5} />
  )
}
