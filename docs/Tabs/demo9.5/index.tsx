import * as React from 'react'
import { A10Tabs } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
import "../index.less"
const demoCode = require('./code.txt')
const TabPane = A10Tabs.TabPane

export const Demo = () => {
    return (
        <CodeCard
            title="Container of card type Tab"
            desc="Should be used at the top of container, needs to override styles."
            code={<Code string={demoCode} />}
        >
            <div className="card-container">
                <A10Tabs type="card">
                    <TabPane tab="Tab Title 1" key="1">
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                        <p>Content of Tab Pane 1</p>
                    </TabPane>
                    <TabPane tab="Tab Title 2" key="2">
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                    <TabPane tab="Tab Title 3" key="3">
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                        <p>Content of Tab Pane 3</p>
                    </TabPane>
                </A10Tabs>
            </div>
        </CodeCard >
    )
}
export default Demo
