import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { A10Message, A10Button } from '../../src'
import { Code, CodeComponent, CodeCard } from '../utils'
import { successMessageCode, durationMessageCode, loadingMessageCode } from './demo/code'
import { SuccessMessage, DurationMessage, LoadingMessage } from './demo/example'
const A10MessageReadme = require('../../src/Message/README.md')


const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Success Message"
        desc="Success Message Example"
        code={<Code string={successMessageCode} />}
      >
        <SuccessMessage />
      </CodeCard>
      <CodeCard
        title="Duration Message"
        desc="Duration Message Example"
        code={<Code string={durationMessageCode} />}
      >
        <DurationMessage />
      </CodeCard>
      <CodeCard
        title="Loading Message"
        desc="Loading Message Example"
        code={<Code string={loadingMessageCode} />}
      >
        <LoadingMessage />
      </CodeCard>
    </CodeComponent>
  )
}
export default story => {
  story.add('A10Message', withReadme(A10MessageReadme, Example))
}
