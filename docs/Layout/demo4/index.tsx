import * as React from 'react'
import { A10Layout, A10Menu, A10Breadcrumb } from '../../../src/'
import { Layout, Icon } from 'antd'
const { Sider } = A10Layout
const { Header, Footer, Content } = Layout
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const { SubMenu } = A10Menu
const A10Icon = Icon

export const Demo4 = () => {
  return (
    <CodeCard
      title="Header Sider 3"
      desc="Both the top navigation and the sidebar, commonly used in documentation site."
      code={<Code string={demoCode} />}
    >
      <A10Layout>
        <Header className="header">
          <div className="logo" />
          <A10Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <A10Menu.Item key="1">nav 1</A10Menu.Item>
            <A10Menu.Item key="2">nav 2</A10Menu.Item>
            <A10Menu.Item key="3">nav 3</A10Menu.Item>
          </A10Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <A10Breadcrumb style={{ margin: '16px 0' }}>
            <A10Breadcrumb.Item>Home</A10Breadcrumb.Item>
            <A10Breadcrumb.Item>List</A10Breadcrumb.Item>
            <A10Breadcrumb.Item>App</A10Breadcrumb.Item>
          </A10Breadcrumb>
          <A10Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <A10Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu
                  key="sub1"
                  title={<span><A10Icon type="user" />subnav 1</span>}
                >
                  <A10Menu.Item key="1">option1</A10Menu.Item>
                  <A10Menu.Item key="2">option2</A10Menu.Item>
                  <A10Menu.Item key="3">option3</A10Menu.Item>
                  <A10Menu.Item key="4">option4</A10Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={<span><A10Icon type="laptop" />subnav 2</span>}
                >
                  <A10Menu.Item key="5">option5</A10Menu.Item>
                  <A10Menu.Item key="6">option6</A10Menu.Item>
                  <A10Menu.Item key="7">option7</A10Menu.Item>
                  <A10Menu.Item key="8">option8</A10Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={<span><A10Icon type="notification" />subnav 3</span>}
                >
                  <A10Menu.Item key="9">option9</A10Menu.Item>
                  <A10Menu.Item key="10">option10</A10Menu.Item>
                  <A10Menu.Item key="11">option11</A10Menu.Item>
                  <A10Menu.Item key="12">option12</A10Menu.Item>
                </SubMenu>
              </A10Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              Content
            </Content>
          </A10Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Footer
        </Footer>
      </A10Layout>
    </CodeCard>
  )
}
export default Demo4
