
import * as React from 'react'
import { A10Timeline } from '../../../src'

class Example extends React.Component {
render() {
  return (
    <A10Timeline>
      <A10Timeline.Item color="green">Create a services site 2015-09-01</A10Timeline.Item>
      <A10Timeline.Item color="green">Create a services site 2015-09-01</A10Timeline.Item>
      <A10Timeline.Item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </A10Timeline.Item>
      <A10Timeline.Item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </A10Timeline.Item>
    </A10Timeline>
  )
}
}
export default Example




