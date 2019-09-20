import * as React from 'react'
import { Code, CodeComponent, CodeCard } from '../utils'
import { A10Tabs } from '../../src'
import GeneralDemo from './examples/General'
import LayoutDemo from './examples/Layout'
import NavigationDemo from './examples/Navigation'
import FeedbackDemo from './examples/Feedback'
import DataEntryDemo from './examples/DataEntry'
import DataDisplayDemo from './examples/DataDisplay'
import OtherDemo from './examples/Other'

import './examples/styles.less'
const SummaryTabs = () => {
  return (
    <CodeComponent>
      <A10Tabs size="small" defaultActiveKey="1">
        <A10Tabs.TabPane tab="General" key="1">
          <GeneralDemo />
        </A10Tabs.TabPane>
        <A10Tabs.TabPane tab="Layout" key="2">
          <LayoutDemo />
        </A10Tabs.TabPane>
        <A10Tabs.TabPane tab="Navigation" key="3">
          <NavigationDemo />
        </A10Tabs.TabPane>
        <A10Tabs.TabPane tab="Data Entry" key="4">
          <DataEntryDemo />
        </A10Tabs.TabPane>
        <A10Tabs.TabPane tab="Data Display" key="5">
          <DataDisplayDemo />
        </A10Tabs.TabPane>
        <A10Tabs.TabPane tab="Feedback" key="6">
          <FeedbackDemo />
        </A10Tabs.TabPane>
        <A10Tabs.TabPane tab="Other" key="7">
          <OtherDemo />
        </A10Tabs.TabPane>
      </A10Tabs>
    </CodeComponent>
  )
}

export default story => {
  story.add('Summary', SummaryTabs)
}
