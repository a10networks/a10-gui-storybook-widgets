import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Divider } from 'antd'
import { CodeComponent, CodeCard, Code } from '../utils'
import * as readme from '../../src/SearchableSelector/README.md'
// import SimpleUsage from './SimpleUsage'
import { code1, code2, code3 } from './SimpleUsage/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Simple Usage"
        desc="Simple usage"
        code={<Code string={code1} />}
      >
        <span />
      </CodeCard>

      <CodeCard
        title="Multiple Urls Request"
        desc="Request with multiple urls"
        code={<Code string={code2} />}
      >
        <span />
      </CodeCard>

      <CodeCard
        title="Show data without None option"
        desc="Show data without None option"
        code={<Code string={code3} />}
      >
        <span />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10SearchableSelector', withReadme(readme, Example))
}
