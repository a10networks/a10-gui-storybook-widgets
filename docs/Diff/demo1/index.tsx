import * as React from 'react'
import { A10Diff } from '../../../src'
import { CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

export const Demo1 = ({ diffString }) => {
  return (
    <CodeCard
      title="Line by Line"
      desc="matching='lines'"
      code={<Code string={demoCode} />}
    >
      <A10Diff diff={diffString} matching="lines" />
    </CodeCard>
  )
}
export default Demo1
