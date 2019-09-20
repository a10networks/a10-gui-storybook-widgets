import * as React from 'react'
import { withReadme }  from 'storybook-readme'

import * as readme from '../../src/DnD/Basic/README.md'
import { CodeComponent, CodeCard, Code } from '../utils'
import { basicExample } from './code'
import {
  A10DragDropContext,
  A10DragSource,
  A10DropTarget,
} from '../../src'

import './index.less'

const Target = A10DropTarget('test', {
  drop: (props, monitor) => {
    const { data, remove } = monitor.getItem()
    remove(data)
  },
})(props => {
  return props.connectDropTarget(
    <div className="target-container">test</div>
  )
})

const Source = A10DragSource('test', {
  beginDrag: (props) => {
    return props
  },
})(props => {
  return props.connectDragSource(
    <div>Source {props.data}</div>
  )
})

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sourceItemList: [
        1,
        2,
        3,
      ]
    }
  }
  render() {
    const { sourceItemList } = this.state
    return (
      <div className="dnd-container">
        <Target />
        <div className="source-container">
          {sourceItemList.map((index) => (
            <Source
              key={index}
              data={index}
              remove={(index) => {
                this.setState({
                  sourceItemList: sourceItemList.filter((id) => id !== index)
                })
              }}
            />
          ))}
        </div>
      </div>
    )
  }
}
const ExampleComponent = A10DragDropContext(Component)

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard title="Basic Usage" desc="Basic Usage Example" code={<Code string={basicExample} />}>
        <ExampleComponent />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10DnDBasic', withReadme(readme, Example))
}
