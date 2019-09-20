import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/ListInput/README.md'
import SimpleUsage from './SimpleUsage'
import SimpleUsageCode from './SimpleUsage/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Usage"
        desc=""
        code={<Code string={SimpleUsageCode} />}
      >
        <SimpleUsage />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10ListInput', withReadme(readme, Example))
}
