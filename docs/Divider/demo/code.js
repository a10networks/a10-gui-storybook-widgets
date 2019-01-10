export const basicCode = `import * as React from 'react'
import { A10Divider } from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
      <A10Divider />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
      <A10Divider>With Text</A10Divider>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
      <A10Divider dashed />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    </div>
  )
}

ReactDOM.render(<Example />, mountNode)`

export const verticalCode = `import * as React from 'react'
import { A10Divider } from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
      Text
      <A10Divider type="vertical" />
      <a href="#">Link</a>
      <A10Divider type="vertical" />
      <a href="#">Link</a>
    </div>
  )
}

ReactDOM.render(<Example />, mountNode)`

export const titleOrientCode = `import * as React from 'react'
import { A10Divider } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Divider orientation="left">Left Text</A10Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
    <A10Divider orientation="right">Right Text</A10Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
  </div>,
  mountNode
);`