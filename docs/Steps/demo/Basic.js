import * as React from 'react'
import { A10Steps } from '../../../src'

const Step = A10Steps.Step;

const Example = () => {
  return (
    <A10Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </A10Steps>
  )
}

export default Example
