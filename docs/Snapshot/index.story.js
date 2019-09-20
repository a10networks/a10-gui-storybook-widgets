
import * as React from 'react'
import { Code, CodeComponent, CodeCard } from '../utils'
import { A10Tabs } from '../../src'
import GeneralDemo from './demo/General'
import LayoutDemo from './demo/Layout'
import NavigationDemo from './demo/Navigation'
import FeedbackDemo from './demo/Feedback'
import DataEntryDemo from './demo/DataEntry'
import DataDisplayDemo from './demo/DataDisplay'
const SnapshotTabs = () => {

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
                </A10Tabs.TabPane>
            </A10Tabs>
        </CodeComponent>
    )
}

export default story => {
    story.add('Snapshots', SnapshotTabs)
}