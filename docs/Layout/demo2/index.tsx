import * as React from 'react'
import { A10Layout, A10Menu } from '../../../src/'
import { Layout } from 'antd'
const { Sider } = A10Layout
const { Header, Footer, Content } = Layout
import { CodeComponent, CodeCard, Code } from '../../utils'
const demo2Code = require('./code.txt')
const demo2Desc = require('./desc.txt')

export const Demo2 = () => {
  return (
    <CodeCard
      title="Header-Content-Footer"
      desc={demo2Desc}
      code={<Code string={demo2Code} />}
    >
      <A10Layout className="layout">
        <Header>
          <div className="logo" />
          <A10Menu
            theme="dark"
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
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </A10Layout>
    </CodeCard>
  )
}
export default Demo2
