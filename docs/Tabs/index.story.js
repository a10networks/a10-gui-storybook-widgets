import * as React from 'react'

import { Code, CodeComponent, CodeCard } from '../utils'
import { A10Tabs } from '../../src'

import { withReadme } from 'storybook-readme'
const readme = require('../../src/Tabs/README.md')

export const BasicDemo = () => {
  function callback(key) {
    console.log(key)
  }

  return (
    <A10Tabs defaultActiveKey="1" onChange={callback}>
      <A10Tabs.TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </A10Tabs.TabPane>
      <A10Tabs.TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </A10Tabs.TabPane>
      <A10Tabs.TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </A10Tabs.TabPane>
    </A10Tabs>
  )
}

const DisableTabsDemo = () => {
  return (
    <A10Tabs defaultActiveKey="1">
      <A10Tabs.TabPane tab="Tab 1" key="1">
        Tab 1
      </A10Tabs.TabPane>
      <A10Tabs.TabPane tab="Tab 2" disabled key="2">
        Tab 2
      </A10Tabs.TabPane>
      <A10Tabs.TabPane tab="Tab 3" key="3">
        Tab 3
      </A10Tabs.TabPane>
    </A10Tabs>
  )
}

const basicTabsCode = `import * as React from 'react'
import { A10Tabs } from 'a10-gui-widgets'
const Example = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <A10Tabs defaultActiveKey="1" onChange={callback}>
      <A10Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</A10Tabs.TabPane>
      <A10Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</A10Tabs.TabPane>
      <A10Tabs.TabPane tab="Tab 3" key="3">Content of Tab Pane 3</A10Tabs.TabPane>
    </A10Tabs>
  )
}
ReactDOM.render(<Example />, mountNode)`

const disableTabsCode = `import * as React from 'react'
import { A10Tabs } from 'a10-gui-widgets'
const Example = () => {
  return (
    <A10Tabs defaultActiveKey="1">
      <A10Tabs.TabPane tab="Tab 1" key="1">Tab 1</A10Tabs.TabPane>
      <A10Tabs.TabPane tab="Tab 2" disabled key="2">Tab 2</A10Tabs.TabPane>
      <A10Tabs.TabPane tab="Tab 3" key="3">Tab 3</A10Tabs.TabPane>
    </A10Tabs>
  )
}
ReactDOM.render(<Example />, mountNode)`

import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'
import Demo9 from './demo9'
import Demo9half from './demo9.5'
import Demo10 from './demo10'
import CustomNewTriggerDemo from './CustomNewTriggerDemo'
const Example = () => {
  return (
    <div id="TabsSpecific">
      <CodeComponent>
        <CodeCard
          title="Basic Tabs"
          desc="Default activate first tab."
          code={<Code string={basicTabsCode} />}
        >
          <BasicDemo />
        </CodeCard>
        <CodeCard
          title="Disabled Tabs"
          desc="Disabled a tab."
          code={<Code string={disableTabsCode} />}
        >
          <DisableTabsDemo />
        </CodeCard>
        <Demo3 />
        <Demo4 />
        <Demo5 />
        <Demo6 />
        <Demo7 />
        <Demo8 />
        <Demo9 />
        <Demo9half />
        <CustomNewTriggerDemo />
        <Demo10 />
      </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10Tabs', withReadme(readme, Example))
}
