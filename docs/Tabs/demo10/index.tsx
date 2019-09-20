import { A10Tabs } from '../../../src';
import { StickyContainer, Sticky } from 'react-sticky';
import * as React from 'react';
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')
const TabPane = A10Tabs.TabPane;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

const CustomizeBarExample = () => {
  return (
    <CodeCard
      title="Customized bar of tab"
      desc="use react-sticky"
      code={<Code string={demoCode} />}
    >
      <StickyContainer>
        <A10Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
          <TabPane tab="Tab 1" key="1" style={{ height: 200 }}>Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </A10Tabs>
      </StickyContainer>
    </CodeCard>
  )
}

export default CustomizeBarExample