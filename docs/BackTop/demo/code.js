
export const basicCode = `import * as React from 'react'
import { A10BackTop } from 'a10-gui-widgets'

const Example = () => {
  return (
    <div>
      <div style={{ height: '1000px', backgroundColor: 'yellow' }}>
        The page content is very long.
        Please scroll down the see the back-top button near the bottom right corner.
      </div>
      <A10BackTop/>            
    </div>
  )
}

ReactDOM.render(<Example />, mountNode)`

export const customCode = `import { A10BackTop } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10BackTop visibilityHeight="2000">
      <div className="ant-back-top-inner">UP</div>
    </A10BackTop>
    Scroll down to see the bottom-right
    <strong style={{ color: '#1088e9' }}> blue </strong>
    button.
  </div>,
  mountNode
);`