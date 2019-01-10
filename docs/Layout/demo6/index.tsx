import * as React from 'react'
import { A10Layout, A10Menu } from '../../../src/'
import { Layout, Icon } from 'antd'
const { Sider } = A10Layout
const { Header, Footer, Content } = Layout
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const { SubMenu } = A10Menu
const A10Icon = Icon

class Demo6 extends React.Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    // tslint:disable:max-line-length
    const desc = `
    If you want to use a customized trigger, you can hide the default one by setting trigger={null}.
    `
    return (
      <CodeCard
        title="Custom trigger"
        desc={desc}
        code={<Code string={demoCode} />}
      >
        <A10Layout>
          <Sider
            trigger={null}
            collapsible={true}
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <A10Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <A10Menu.Item key="1">
                <A10Icon type="user" />
                <span>nav 1</span>
              </A10Menu.Item>
              <A10Menu.Item key="2">
                <A10Icon type="video-camera" />
                <span>nav 2</span>
              </A10Menu.Item>
              <A10Menu.Item key="3">
                <A10Icon type="upload" />
                <span>nav 3</span>
              </A10Menu.Item>
            </A10Menu>
          </Sider>
          <A10Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <A10Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              Content
          </Content>
          </A10Layout>
        </A10Layout>
      </CodeCard>
    )
  }
}
export default Demo6
