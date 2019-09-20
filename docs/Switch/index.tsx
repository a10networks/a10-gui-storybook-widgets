
import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Layout, Divider } from 'antd'
import { CodeComponent, CodeCard, Code } from '../utils'
import DisabledExample from './Disabled'
import { A10Switch, A10Icon } from '../../src'
// import * as readme from '../../src/Switch/README.md'
const readme = require('../../src/Switch/README.md')

import {
  basicString,
  disableString,
  textIconString,
  loadingString,
  twoSizesString
} from './codes'

const { Content } = Layout

const onChange = (checked: boolean) => console.log('checked:', checked)

const Example = () => (
  <Layout style={{ backgroundColor: '#FFF', padding: '16px' }}>
    <Content style={{ paddingBottom: '16px' }}>
      <Card title="Basic" bordered={true}>
        <A10Switch defaultChecked onChange={onChange} />
        <Divider />
        <Code string={basicString} />
      </Card>
    </Content>
    <Content style={{ paddingBottom: '16px' }}>
      <Card title="Disabled Switch" bordered={true}>
        <DisabledExample />
        <Divider />
        <Code string={disableString} />
      </Card>
    </Content>
    <Content style={{ paddingBottom: '16px' }}>
      <Card title="Text & Icon" bordered={true} >
        <A10Switch checkedChildren="on" unCheckedChildren="off" defaultChecked />
        <Divider />
        <A10Switch id="checkZeroSpecific" checkedChildren={<A10Icon type="check" />} unCheckedChildren={<A10Icon type="close" />} defaultChecked />
        <Divider />
        <A10Switch checkedChildren="1" unCheckedChildren="0" />
      </Card>
    </Content>
    <Content style={{ paddingBottom: '16px' }}>
      <Card title="Loading Switch" bordered={true} >
        <A10Switch loading defaultChecked />
        <Divider />
        <A10Switch size="small" loading />
      </Card>
    </Content>
    <Content style={{ paddingBottom: '16px' }}>
      <Card title="Two Sizes Switch" bordered={true} >
        <A10Switch defaultChecked />
        <Divider />
        <Divider />
        <A10Switch defaultChecked size="small" />
        <Divider />
        <Code string={twoSizesString} />
      </Card>
    </Content>
  </Layout>
)

export default (story: any) => {
  story.add('A10Switch', withReadme(readme, Example))
}
