import * as React from 'react'
import { A10Rate } from '../../src'

export const basicString = `import { A10Rate } from 'a10-gui-widgets';

ReactDOM.render(<A10Rate />, mountNode);
`

export const BasicDemo = () => {
  return (
    <A10Rate />
  )
}
