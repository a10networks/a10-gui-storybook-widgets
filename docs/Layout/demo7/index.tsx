import * as React from 'react'
import { A10Layout, A10Menu } from '../../../src/'
import { Layout, Icon } from 'antd'
const { Sider } = A10Layout
const { Header, Footer, Content } = Layout
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const { SubMenu } = A10Menu
const A10Icon = Icon

class Demo7 extends React.Component {
  onCollapse = (collapsed, type) => {
    console.log(collapsed, type)
  }
  render() {
    // tslint:disable:max-line-length
    const desc = `
    Layout.Sider supports responsive layout.

Note: You can get a responsive layout by setting breakpoint, the Sider will collapse to the width of collapsedWidth when window width is below the breakpoint. And a special trigger will appear if the collapsedWidth is set to 0.
    `
    return (
      <CodeCard
        title="Responsive"
        desc={desc}
        code={<Code string={demoCode} />}
      >
        <A10Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <A10Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
              <A10Menu.Item key="1">
                <A10Icon type="user" />
                <span className="nav-text">nav 1</span>
              </A10Menu.Item>
              <A10Menu.Item key="2">
                <A10Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </A10Menu.Item>
              <A10Menu.Item key="3">
                <A10Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </A10Menu.Item>
              <A10Menu.Item key="4">
                <A10Icon type="user" />
                <span className="nav-text">nav 4</span>
              </A10Menu.Item>
            </A10Menu>
          </Sider>
          <A10Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                content
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
          </A10Layout>
        </A10Layout>
      </CodeCard>
    )
  }
}
export default Demo7
