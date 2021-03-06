import * as React from 'react'
import { A10Tabs, A10Radio } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')
const TabPane = A10Tabs.TabPane

class Demo extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'top',
    }
  }
  handleModeChange = (e) => {
    const mode = e.target.value
    this.setState({ mode })
  }
  render() {
    const { mode } = this.state
    return (
      <CodeCard
        title="Slide"
        desc="In order to fit in more tabs, they can slide left and right (or up and down)."
        code={<Code string={demoCode} />}
      >
        <A10Radio.Group
          onChange={this.handleModeChange}
          value={mode}
          style={{ marginBottom: 8 }}
        >
          <A10Radio.Button value="top">Horizontal</A10Radio.Button>
          <A10Radio.Button value="left">Vertical</A10Radio.Button>
        </A10Radio.Group>
        <A10Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: 220 }}
        >
          <TabPane tab="Tab 1" key="1">
            Content of tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
          <TabPane tab="Tab 4" key="4">
            Content of tab 4
          </TabPane>
          <TabPane tab="Tab 5" key="5">
            Content of tab 5
          </TabPane>
          <TabPane tab="Tab 6" key="6">
            Content of tab 6
          </TabPane>
          <TabPane tab="Tab 7" key="7">
            Content of tab 7
          </TabPane>
          <TabPane tab="Tab 8" key="8">
            Content of tab 8
          </TabPane>
          <TabPane tab="Tab 9" key="9">
            Content of tab 9
          </TabPane>
          <TabPane tab="Tab 10" key="10">
            Content of tab 10
          </TabPane>
          <TabPane tab="Tab 11" key="11">
            Content of tab 11
          </TabPane>
        </A10Tabs>
      </CodeCard>
    )
  }
}

export default Demo
