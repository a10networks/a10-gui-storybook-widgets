import * as React from 'react'
import { A10Layout, A10Menu, A10Breadcrumb } from '../../../src/'
import { Layout, Icon } from 'antd'
const { Sider } = A10Layout
const { Header, Footer, Content } = Layout
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const { SubMenu } = A10Menu
const A10Icon = Icon

class Demo5 extends React.Component {
  state = {
    collapsed: false,
  }
  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({ collapsed })
  }
  render() {
    // tslint:disable:max-line-length
    const desc = `
    Two-columns layout. The sider menu can be collapsed when horizontal space is limited.
    Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area. Contents will adapt the layout to the viewing area to improve the horizontal space usage, while the layout of the whole page is not stable.
    The level of the aisde navigation is scalable. The first, second, and third level navigations could be present more fluently and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position, improving the user experience. However, this navigation occupies some horizontal space of the contents.
    `
    return (
      <CodeCard
        title="Sider"
        desc={desc}
        code={<Code string={demoCode} />}
      >
        <A10Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible={true}
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <A10Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
              <A10Menu.Item key="1">
                <A10Icon type="pie-chart" />
                <span>Option 1</span>
              </A10Menu.Item>
              <A10Menu.Item key="2">
                <A10Icon type="desktop" />
                <span>Option 2</span>
              </A10Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><A10Icon type="user" /><span>User</span></span>}
              >
                <A10Menu.Item key="3">Tom</A10Menu.Item>
                <A10Menu.Item key="4">Bill</A10Menu.Item>
                <A10Menu.Item key="5">Alex</A10Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><A10Icon type="team" /><span>Team</span></span>}
              >
                <A10Menu.Item key="6">Team 1</A10Menu.Item>
                <A10Menu.Item key="8">Team 2</A10Menu.Item>
              </SubMenu>
              <A10Menu.Item key="9">
                <A10Icon type="file" />
                <span>File</span>
              </A10Menu.Item>
            </A10Menu>
          </Sider>
          <A10Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <A10Breadcrumb style={{ margin: '16px 0' }}>
                <A10Breadcrumb.Item>User</A10Breadcrumb.Item>
                <A10Breadcrumb.Item>Bill</A10Breadcrumb.Item>
              </A10Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Footer
            </Footer>
          </A10Layout>
        </A10Layout>
      </CodeCard>
    )
  }
}
export default Demo5
