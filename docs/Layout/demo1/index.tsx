import * as React from 'react'
import { A10Layout, A10Menu } from '../../../src/'
import { Layout } from 'antd'
const { Sider } = A10Layout
const { Header, Footer, Content } = Layout
import { CodeComponent, CodeCard, Code } from '../../utils'
const demo1Code = require('./code.txt')

export const Demo1 = () => {
  return (
    <CodeCard
      title="Basic Structure"
      desc="Classic page layouts."
      code={<Code string={demo1Code} />}
    >
      <div id="components-layout-demo-basic">
        <div className="code-box-demo">
          <div>
            <A10Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </A10Layout>

            <A10Layout>
              <Header>Header</Header>
              <A10Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
              </A10Layout>
              <Footer>Footer</Footer>
            </A10Layout>

            <A10Layout>
              <Header>Header</Header>
              <A10Layout>
                <Content>Content</Content>
                <Sider>Sider</Sider>
              </A10Layout>
              <Footer>Footer</Footer>
            </A10Layout>

            <A10Layout>
              <Sider>Sider</Sider>
              <A10Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
              </A10Layout>
            </A10Layout>
          </div>
        </div>
      </div>
    </CodeCard>
  )
}
export default Demo1
