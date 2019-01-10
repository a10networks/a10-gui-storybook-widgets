
import * as React from 'react'

import { Code, CodeComponent, CodeCard } from '../utils'
import BasicRadioDemo from './demo/BasicRadio'
import DisableRadioDemo from './demo/DisableRadio'
import RadioGroupDemo from './demo/RadioGroup'
import RadioButtonDemo from './demo/RadioButton'
import RadioGroupButtonDemo from './demo/RadioGroupButton'
import VerticalRadioGroupDemo from './demo/VerticalRadioGroup'
import RadioGroupNameDemo from './demo/RadioGroupName'
import RadioStyleDemo from './demo/RadioStyle'
import SolidRadioDemo from './demo/SolidRadio'
import SizeDemo from './demo/Size'
import {
  basicRadioCode,
  disableRadioCode,
  radioGroupCode,
  radioButtonCode,
  radioButtonCodeOptional,
  verticalRadioGroupCode,
  radioStyleCode,
  radioGroupNameCode,
  solidRadioCode,
  sizeCode
} from './demo/code'

import { withReadme } from 'storybook-readme'
const readme = require('../../src/Radio/README.md')

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Radio"
        desc="The simplest use."
        code={<Code string={basicRadioCode} />}
      >
        <BasicRadioDemo />
      </CodeCard>

      <CodeCard
        title="Disable Radio"
        desc="Radio unavailable."
        code={<Code string={disableRadioCode} />}
      >
        <DisableRadioDemo />
      </CodeCard>

      <CodeCard
        title="Radio Group"
        desc="A group of radio components."
        code={<Code string={radioGroupCode} />}
      >
        <RadioGroupDemo />
      </CodeCard>

      <CodeCard
        title="Radio Button"
        desc="The combination of radio button style."
        code={<Code string={radioButtonCode} />}
      >
        <RadioButtonDemo />
      </CodeCard>

      <CodeCard
        title="RadioGroup group - optional"
        desc="Render radios by configuring options."
        code={<Code string={radioButtonCodeOptional} />}
      >
        <RadioGroupButtonDemo />
      </CodeCard>

      <CodeCard
        title="Vertical RadioGroup"
        desc="Vertical RadioGroup, with more radios."
        code={<Code string={verticalRadioGroupCode} />}
      >
        <VerticalRadioGroupDemo />
      </CodeCard>

      <CodeCard
        title="radio style"
        desc="The combination of radio button style."
        code={<Code string={radioStyleCode} />}
      >
        <RadioStyleDemo />
      </CodeCard>

      <CodeCard
        title="RadioGroup with name"
        desc="Passing the name property to all input[type='radio'] that are in the same RadioGroup. It is usually used to let the browser see your RadioGroup as a real 'group' and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same RadioGroup."
        code={<Code string={radioGroupNameCode} />}
      >
        <RadioGroupNameDemo />
      </CodeCard>

      <CodeCard
        title="Solid radio button"
        desc="Solid radio button style."
        code={<Code string={solidRadioCode} />}
      >
        <SolidRadioDemo />
      </CodeCard>

      <CodeCard
        title="Size"
        desc="There are three sizes available: large, medium, and small. It can coordinate with input box."
        code={<Code string={sizeCode} />}
      >
        <SizeDemo />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Radio', withReadme(readme, Example))
}
