import * as React from 'react'
import { A10Tabs, A10Icon } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')
const TabPane = A10Tabs.TabPane

export const Demo = () => {
  return (
    <CodeCard
      title="Icon"
      desc="The Tab with Icon."
      code={<Code string={demoCode} />}
    >
      <A10Tabs defaultActiveKey="2">
        <TabPane tab={<span><A10Icon type="apple" />Tab 1</span>} key="1">
          Tab 1
        </TabPane>
        <TabPane tab={<span><A10Icon type="android" />Tab 2</span>} key="2">
          Tab 2
        </TabPane>
      </A10Tabs>
    </CodeCard>
  )
}
export default Demo
