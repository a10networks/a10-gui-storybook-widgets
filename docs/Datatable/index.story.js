
import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Code, CodeComponent, CodeCard } from '../utils'

import Example from './Example/index'
import * as readme from '../../src/Datatable/README.md'
import ExampleUsageCode from './Example/code'

const Example = () => (
  <CodeComponent>
    <CodeCard
      title="Simple Usage"
      desc="Simple Usage"
      code={<Code string={ExampleUsageCode} />}
    >
      <div />
      {/* <Example /> */}
    </CodeCard>
  </CodeComponent>
)

export default story => {
  story.add('A10Datatable', withReadme(readme, Example))
}
