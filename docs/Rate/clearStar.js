import * as React from 'react'
import { A10Rate } from '../../src'

export const clearStarString = `import { A10Rate } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Rate defaultValue={3} /> allowClear: true
    <br />
    <A10Rate allowClear={false} defaultValue={3} /> allowClear: false
  </div>,
  mountNode
);`

export const ClearStarDemo = () => {
  return (
    <div>
        <A10Rate defaultValue={3} /> allowClear: true
        <br />
        <A10Rate allowClear={false} defaultValue={3} /> allowClear: false
    </div>
  )
}
