import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'

import { A10ContextMenu, A10Button } from '../../src'
import { Code, CodeComponent, CodeCard } from '../utils'
import * as readme from '../../src/ContextMenu/README.md'
import { basicDemoCode, dividerDemoCode } from './demo/code'

import './style/index.less'

const Example = () => {
  const example1Menu = [
    <div name="add">Add</div>,
    <div name="delete">Delete</div>,
    <div name="share">Share</div>,
  ]
  const example2Menu = [
    <div name="add">Add</div>,
    <A10ContextMenu.Divider />,
    <div name="delete">Delete</div>,
    <A10ContextMenu.Divider />,
    <div name="share">Share</div>,
  ]
  const onClick = (Component, index) => {
    console.log(Component, index)
  }
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="Basic Usage Example"
        code={<Code string={basicDemoCode} />}
      >
        <A10ContextMenu menu={example1Menu} onClick={onClick}>
          <div
            style={{ height: '60px', backgroundColor: 'rgb(245, 242, 240)' }}
          >
            Test
          </div>
        </A10ContextMenu>
      </CodeCard>

      <CodeCard
        title="ContextMenu Divider"
        desc="Divider Usage Example"
        code={<Code string={dividerDemoCode} />}
      >
        <A10ContextMenu menu={example2Menu} onClick={onClick}>
          <div
            style={{ height: '60px', backgroundColor: 'rgb(245, 242, 240)' }}
          >
            Test
          </div>
        </A10ContextMenu>
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10ContextMenu', withReadme(readme, Example))
}
