
import * as React from 'react'
import { withReadme }  from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Code, CodeComponent, CodeCard } from '../utils'

import * as readme from '../../src/ConfigList/README.md'
import SimpleUsage from './SimpleUsage'
import SimpleUsageCode from './SimpleUsage/code'

const Example = () => (
  <CodeComponent>
    <CodeCard
      title="Simple Usage"
      desc="Simple Usage"
      code={<Code string={SimpleUsageCode} />}
    >
      <SimpleUsage />
    </CodeCard>
  </CodeComponent>
)

export default story => {
  story.add('A10CompoundConfigList', withReadme(readme, Example))
}
