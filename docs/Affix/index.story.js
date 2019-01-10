import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import * as readme from '../../src/Affix/README.md'

import BasicDemo from './demo/Basic'
import ScrollDemo from './demo/Scroll'
import CallbackDemo from './demo/Callback'
import { basicCode, callbackCode, scrollCode } from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic"
        desc="The simplest usage."
        code={<Code string={basicCode} />}
      >
        <BasicDemo />
      </CodeCard>

      <CodeCard
        title="Callback"
        desc="Callback with affixed state."
        code={<Code string={callbackCode} />}
      >
        <CallbackDemo />
      </CodeCard>

      <CodeCard
        title="Scroll"
        desc="Container to Scroll."
        code={<Code string={scrollCode} />}
      >
        <ScrollDemo />
      </CodeCard>
    </CodeComponent>
}

export default story => {
  story.add('A10Affix', withReadme(readme, Example))
}