import * as React from 'react'
import { A10Rate } from '../../src'

export const readOnlyString = `import { A10Rate } from 'a10-gui-widgets';

ReactDOM.render(<A10Rate disabled defaultValue={2} />, mountNode);
`

export const ReadOnlyDemo = () => {
  return (
    <A10Rate disabled defaultValue={2} />
  )
}