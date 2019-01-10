
import * as React from 'react'

import { Code, CodeComponent, CodeCard } from '../utils'
import BasicSlidingPageDemo from './demo/BasicSlidingPage'
import MoreSlidingPageDemo from './demo/MoreSlidingPage'

import {
  basicSlidingPageCode, moreSlidingPageCode
} from './demo/code'

import { withReadme } from 'storybook-readme'
const readme = require('../../src/SlidingPage/README.md')

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic SlidingPage"
        desc="The simplest use."
        code={<Code string={basicSlidingPageCode} />}
      >
        <BasicSlidingPageDemo />
      </CodeCard>
      <CodeCard
        title="Left SlidingPage"
        desc=""
        code={<Code string={moreSlidingPageCode} />}
      >
        <MoreSlidingPageDemo />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10SlidingPage', withReadme(readme, Example))
}
