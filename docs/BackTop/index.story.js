import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import * as readme from '../../src/BackTop/README.md'

import CustomDemo from './demo/Custom'
import BasicDemo from './demo/Basic'
import { basicCode, customCode } from './demo/code'

const Example = () => {
  return (
    <div id="backTopSpecific">
      <CodeComponent>
        <CodeCard
          title="Basic Usage"
          desc="The most basic usage."
          code={<Code string={basicCode} />}
        >
          <BasicDemo />
        </CodeCard>
        <CodeCard
          title="Custom Usage"
          desc="You can customize the style of the button, just note the size limit: no more than 40px * 40px."
          code={<Code string={customCode} />}
        >
          <CustomDemo />
        </CodeCard>
      </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10BackTop', withReadme(readme, Example))