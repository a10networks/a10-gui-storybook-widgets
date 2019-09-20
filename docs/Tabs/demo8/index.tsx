import * as React from 'react'
import { A10Tabs } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')
const TabPane = A10Tabs.TabPane

export const Demo = () => {
  function callback(key) {
    console.log(key)
  }
  return (
    <CodeCard
      title="Card type tab"
      desc="Another type Tabs, which doesn't support vertical mode."
      code={<Code string={demoCode} />}
    >
      <A10Tabs onChange={callback} type="card">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </A10Tabs>
    </CodeCard>
  )
}
export default Demo
