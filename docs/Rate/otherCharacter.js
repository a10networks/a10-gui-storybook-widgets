import * as React from 'react'
import { A10Rate, A10Icon } from '../../src'

export const otherCharacterString = `import { A10Rate, A10Icon } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Rate character={<A10Icon type="heart" />} allowHalf />
    <br />
    <A10Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <A10Rate character="好" allowHalf />
  </div>,
  mountNode
);`

export const OtherCharacterDemo = () => {
  return (
    <div>
    <A10Rate character={<A10Icon type="heart" />} allowHalf />
    <br />
    <A10Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <A10Rate character="好" allowHalf />
  </div>
  )
}