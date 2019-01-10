import * as React from 'react'
import { A10Tabs, A10Button } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
import "../index.less"
const demoCode = require('./code.txt')
const TabPane = A10Tabs.TabPane

export const Demo = () => {
  const operations = <A10Button>Extra Action</A10Button>
  return (
    <CodeCard
      title="Extra content"
      desc="You can add extra actions to the right of Tabs."
      code={<Code string={demoCode} />}
    >
      <A10Tabs tabBarExtraContent={operations}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </A10Tabs>
    </CodeCard>
  )
}
export default Demo
