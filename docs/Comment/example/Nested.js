import * as React from 'react'
import { A10Comment, A10Avatar } from '../../../src'

const ExampleComment = ({ children }) => (
  <A10Comment
    actions={[<span>Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={(
      <A10Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    )}
    content={<p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).</p>}
  >
    {children}
  </A10Comment>
);

const reader = () => {
  return (
    <ExampleComment>
      <ExampleComment>
        <ExampleComment />
        <ExampleComment />
      </ExampleComment>
    </ExampleComment>
  )
}

export default reader
