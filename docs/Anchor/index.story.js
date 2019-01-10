import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import * as readme from '../../src/Anchor/README.md'

import BasicDemo from './demo/Basic'
import StaticDemo from './demo/Static'
import CustomizeOnClickDemo from './demo/CustomizeOnClick'
import { basicCode, staticCode, customizeOnClick } from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="The simplest usage."
        code={<Code string={basicCode} />}
      >
        <BasicDemo />
      </CodeCard>

      <CodeCard
        title="Static Anchor"
        desc="Do not change state when page is scrolling."
        code={<Code string={staticCode} />}
      >
        <StaticDemo />
      </CodeCard>

      <CodeCard
        title="Customize the onClick event"
        desc="Clicking on an anchor does not record history."
        code={<Code string={customizeOnClick} />}
      >
        <CustomizeOnClickDemo />
      </CodeCard>

    </CodeComponent>
  )
}

export default story => {
  story.add('A10Anchor', withReadme(readme, Example))
}
