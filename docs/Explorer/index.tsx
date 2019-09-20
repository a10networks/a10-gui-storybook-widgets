
import * as React from 'react'
import { withDocs, withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'

import { Card, Layout, Divider } from 'antd'
const { Content } = Layout

import BasicExample from './demo/Basic'
import DefaultOpenExample from './demo/DefaultOpen'
import LoadingExample from './demo/Loading'
import ActionsExample from './demo/Actions'

import {
  basicCode,
  defaultOpenCode,
  loadingCode,
  actionCode,
} from './demo/code'
import { Code, CodeComponent, CodeCard } from '../utils'
const readme = require('../../src/Explorer/README.md')

const Example = () => {
  return (
    <div id="ExplorerSpecific">
      <CodeComponent>
        <CodeCard
          title="Actions A10Explorer"
          desc="Actions explorer tree"
          code={<Code string={actionCode} />}
        >
          <ActionsExample />
        </CodeCard>
        <CodeCard
          title="Basic A10Explorer"
          desc="Basic explorer tree"
          code={<Code string={basicCode} />}
        >
          <BasicExample />
        </CodeCard>
        <CodeCard
          title="Default Open"
          desc="Default select one node when first display the explorer tree."
          code={<Code string={defaultOpenCode} />}
        >
          <DefaultOpenExample />
        </CodeCard>
        <CodeCard
          title="Loading"
          desc="Show loading status for loading data."
          code={<Code string={loadingCode} />}
        >
          <LoadingExample />
        </CodeCard>
      </CodeComponent>
    </div>
  )
}

export default (story: any) => {
  story.add('A10Explorer', withReadme(readme, Example))
}
