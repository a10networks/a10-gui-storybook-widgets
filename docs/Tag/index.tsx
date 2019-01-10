
import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Layout, Divider } from 'antd'
import { CodeComponent, CodeCard, Code } from '../utils'
import AddRemoveExample from './demo/AddRemove'
import HotExample from './demo/Hot'
import ControlledExample from './demo/Controlled'
import CheckableExample from './demo/Checkable'
import "./demo/index.less"
import { A10Tag } from '../../src'
const readme = require('../../src/Switch/README.md')

import { basicString, colorfulString, addRemoveString, hotString, controlledString, checkableString } from './codes'


const { Content } = Layout

const log = (e: any) => console.log(e)

const preventDefault = (e: any) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

const Example = () => (
  <div id="TagSpecific">
    <Layout style={{ backgroundColor: '#FFF', padding: '16px' }}>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Basic" bordered={true}>
          <p>Usage of basic Tag, and it could be closable by set closable property. Closable Tag supports onClose afterClose events.</p>
          <div>
            <A10Tag>Tag 1</A10Tag>
            <A10Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></A10Tag>
            <A10Tag closable onClose={log}>Tag 2</A10Tag>
            <A10Tag closable onClose={preventDefault}>Prevent Default</A10Tag>
          </div>
          <Code string={basicString} />
        </Card>
      </Content>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Colorful Tag" bordered={true}>
          <p>We preset a series of colorful tag style for different situation usage. And you can always set it to a hex color string for custom color.</p>
          <div>
            <h4 style={{ marginBottom: 16 }}>Presets:</h4>
            <div>
              <A10Tag color="magenta">magenta</A10Tag>
              <A10Tag color="red">red</A10Tag>
              <A10Tag color="volcano">volcano</A10Tag>
              <A10Tag color="orange">orange</A10Tag>
              <A10Tag color="gold">gold</A10Tag>
              <A10Tag color="lime">lime</A10Tag>
              <A10Tag color="green">green</A10Tag>
              <A10Tag color="cyan">cyan</A10Tag>
              <A10Tag color="blue">blue</A10Tag>
              <A10Tag color="geekblue">geekblue</A10Tag>
              <A10Tag color="purple">purple</A10Tag>
            </div>
            <h4 style={{ margin: '16px 0' }}>Custom:</h4>
            <div>
              <A10Tag color="#f50">#f50</A10Tag>
              <A10Tag color="#2db7f5">#2db7f5</A10Tag>
              <A10Tag color="#87d068">#87d068</A10Tag>
              <A10Tag color="#108ee9">#108ee9</A10Tag>
            </div>
          </div>
          <Code string={colorfulString} />
        </Card>
      </Content>

      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Add and Remove Dynamcally" bordered={true}>
          <p>Generating a set of Tags by array, you can add and remove dynamically. It's based on afterClose event, which will be triggered while the close animation end.</p>
          <AddRemoveExample />
          <Code string={addRemoveString} />
        </Card>
      </Content>

      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Hot Tags" bordered={true}>
          <p>Select your favourite topics.</p>
          <HotExample />
          <Code string={hotString} />
        </Card>
      </Content>

      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Checkable Tags" bordered={true}>
          <p>CheckableTag works like Checkbox, click it to toggle checked state. It is an absolute controlled component and has no uncontrolled mode.</p>
          <CheckableExample />
          <Code string={checkableString} />
        </Card>
      </Content>

      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Controlled Tags" bordered={true}>
          <p>By using the visible prop, you can control the close state of Tag.</p>
          <ControlledExample />
          <Code string={controlledString} />
        </Card>
      </Content>
    </Layout>
  </div>
)

export default (story: any) => {
  story.add('A10Tag', withReadme(readme, Example))
}
