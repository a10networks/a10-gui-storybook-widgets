export default {}
export const basicTimelineCode = `import { A10Timeline } from 'a10-gui-widgets'
import * as React from 'react'
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
ReactDOM.render(<Example />, mountNode);`

export const colorTimelineCode = `import { A10Timeline } from 'a10-gui-widgets'
import * as React from 'react'
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
ReactDOM.render(<Example />, mountNode);`

export const lastNodeTimelineCode = `import { A10Timeline } from 'a10-gui-widgets'
import * as React from 'react'
class Example extends React.Component {
  render() {
    return (
      <A10Timeline pending="Recording...">
        <A10Timeline.Item>Create a services site 2015-09-01</A10Timeline.Item>
        <A10Timeline.Item>Solve initial network problems 2015-09-01</A10Timeline.Item>
        <A10Timeline.Item>Technical testing 2015-09-01</A10Timeline.Item>
      </A10Timeline>
    )
  }
  }
ReactDOM.render(<Example />, mountNode);`

export const customTimelineCode = `import { A10Timeline } from 'a10-gui-widgets'
import * as React from 'react'
class Example extends React.Component {
  render() {
    return (
      <A10Timeline>
        <A10Timeline.Item>Create a services site 2015-09-01</A10Timeline.Item>
        <A10Timeline.Item>Solve initial network problems 2015-09-01</A10Timeline.Item>
        <A10Timeline.Item dot={<A10Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</A10Timeline.Item>
        <A10Timeline.Item>Network problems being solved 2015-09-01</A10Timeline.Item>
      </A10Timeline>
    )
  }
  }
ReactDOM.render(<Example />, mountNode);`

export const rightAlternateCode = `import { A10Timeline, A10Icon } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Timeline mode="right">
    <A10Timeline.Item>Create a services site 2015-09-01</A10Timeline.Item>
    <A10Timeline.Item>Solve initial network problems 2015-09-01</A10Timeline.Item>
    <A10Timeline.Item dot={<A10Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</A10Timeline.Item>
    <A10Timeline.Item>Network problems being solved 2015-09-01</A10Timeline.Item>
  </A10Timeline>,
  mountNode
);`

export const alternateCode = `import { A10Timeline, A10Icon } from 'a10-gui-widgets';

ReactDOM.render(
  <A10Timeline mode="alternate">
    <A10Timeline.Item>Create a services site 2015-09-01</A10Timeline.Item>
    <A10Timeline.Item color="green">Solve initial network problems 2015-09-01</A10Timeline.Item>
    <A10Timeline.Item dot={<A10Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</A10Timeline.Item>
    <A10Timeline.Item color="red">Network problems being solved 2015-09-01</A10Timeline.Item>
    <A10Timeline.Item>Create a services site 2015-09-01</A10Timeline.Item>
    <A10Timeline.Item dot={<A10Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</A10Timeline.Item>
  </A10Timeline>,
  mountNode
);`