import * as React from 'react'
import { A10Tabs, A10Radio } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')
const TabPane = A10Tabs.TabPane

class Demo extends React.Component {
  state = { size: 'small' }
  onChange = e => {
    this.setState({ size: e.target.value })
  }
  render() {
    const { size } = this.state
    return (
      <CodeCard
        title="Size"
        desc="Large size tabs are usally used in page header, and small size could be used in Modal."
        code={<Code string={demoCode} />}
      >
        <A10Radio.Group
          value={size}
          onChange={this.onChange}
          style={{ marginBottom: 16 }}
        >
          <A10Radio.Button value="small">Small</A10Radio.Button>
          <A10Radio.Button value="default">Default</A10Radio.Button>
          <A10Radio.Button value="large">Large</A10Radio.Button>
        </A10Radio.Group>
        <A10Tabs defaultActiveKey="1" size={size}>
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
}

export default Demo
