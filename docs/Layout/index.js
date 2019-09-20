import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withDocs, withReadme } from 'storybook-readme'
import './index.less'

import { CodeComponent, CodeCard, Code } from '../utils'
import * as readme from '../../src/Layout/README.md'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'

const Example = () => {
  return (
    <CodeComponent className="demo-layout">
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
      <Demo5 />
      <Demo6 />
      <Demo7 />
    </CodeComponent>
  )
}

export default story => {
  return story.add('A10Layout', withReadme(readme, Example))
}
