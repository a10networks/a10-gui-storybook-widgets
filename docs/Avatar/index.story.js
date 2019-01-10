import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Layout, Divider, Badge } from 'antd'
import { CodeComponent, CodeCard, Code } from '../utils'

import { A10Avatar } from '../../src'
const readme = require('../../src/Avatar/README.md')

import { basicString, typeString, badgeString, autosetString } from './demo/codes'
import Autoset from './demo/AutosetExample'
import './demo/index.less'
const { Content } = Layout

const Example = () => (
  <div id="avatarSpecific">
    <Layout style={{ backgroundColor: '#FFF', padding: '16px' }}>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Basic" bordered={true}>
          <p>Four sizes and two shapes are available.</p>
          <div>
            <div class="basicAvatarClass">
              <A10Avatar size={64} icon="user" />
              <A10Avatar size="large" icon="user" />
              <A10Avatar icon="user" />
              <A10Avatar size="small" icon="user" />
            </div>
            <div class="basicAvatarClass">
              <A10Avatar shape="square" size={64} icon="user" />
              <A10Avatar shape="square" size="large" icon="user" />
              <A10Avatar shape="square" icon="user" />
              <A10Avatar shape="square" size="small" icon="user" />
            </div>
          </div>
          <Code string={basicString} />
        </Card>
      </Content>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Type" bordered={true}>
          <p>Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.</p>
          <div>
            <A10Avatar icon="user" style={{ marginRight: '10px' }} />
            <A10Avatar style={{ marginRight: '10px' }}>U</A10Avatar>
            <A10Avatar style={{ marginRight: '10px' }}>USER</A10Avatar>
            <A10Avatar style={{ marginRight: '10px' }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <A10Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginRight: '10px' }}>U</A10Avatar>
            <A10Avatar style={{ backgroundColor: '#87d068', marginRight: '10px' }} icon="user" />
          </div>
          <Code string={typeString} />
        </Card>
      </Content>

      <Content style={{ paddingBottom: '16px' }}>
        <Card title="With Badge" bordered={true}>
          <p>Usually used for messages remind.</p>
          <div>
            <span style={{ marginRight: 24 }}>
              <Badge count={1}><A10Avatar shape="square" icon="user" /></Badge>
            </span>
            <span>
              <Badge dot><A10Avatar shape="square" icon="user" /></Badge>
            </span>
          </div>
          <Code string={badgeString} />
        </Card>
      </Content>
      <Content style={{ paddingBottom: '16px' }}>
        <Card title="Autoset Font Size" bordered={true}>
          <p>For letter type A10Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the A10Avatar.</p>
          <Autoset />
          <Code string={autosetString} />
        </Card>
      </Content>
    </Layout>
  </div>
)

export default story => {
  story.add('A10Avatar', withReadme(readme, Example))
}