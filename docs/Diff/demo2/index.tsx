import * as React from 'react'
import { A10Diff } from '../../../src/'
import { CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

export const Demo2 = ({ diffString }) => {
  return (
    <CodeCard
      title="Side by Side"
      desc="matching='lines'"
      code={<Code string={demoCode} />}
    >
      <A10Diff diff={diffString} outputFormat="side-by-side" matching="lines" />
    </CodeCard>
  )
}
export default Demo2
