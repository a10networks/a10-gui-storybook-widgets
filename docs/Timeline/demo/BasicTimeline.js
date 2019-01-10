
import * as React from 'react'
import { A10Timeline } from '../../../src'

class Example extends React.Component {
render() {
  return (
    <A10Timeline>
      <A10Timeline.Item>Create a services site 2015-09-01</A10Timeline.Item>
      <A10Timeline.Item>Solve initial network problems 2015-09-01</A10Timeline.Item>
      <A10Timeline.Item>Technical testing 2015-09-01</A10Timeline.Item>
      <A10Timeline.Item>Network problems being solved 2015-09-01</A10Timeline.Item>
    </A10Timeline>
  )
}
}
export default Example
