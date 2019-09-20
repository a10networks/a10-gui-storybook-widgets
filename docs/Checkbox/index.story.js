import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Divider } from 'antd'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/Checkbox/README.md'
import BasicUsageDemo from './demo/BasicUsage'
import DisableUsageDemo from './demo/DisableUsage'
import ControlCheckboxDemo from './demo/ControlCheckbox'
import CheckboxGroupDemo from './demo/CheckboxGroupDemo'
import { demoString, disableUsageCode, controlCheckboxCode, checkboxGroupCode } from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="Basic usage of checkbox."
        code={<Code string={demoString} />}
      >
        <BasicUsageDemo />
      </CodeCard>
      <CodeCard
        title="Disable Usage"
        desc="Disabled checkbox."
        code={<Code string={disableUsageCode} />}
      >
        <DisableUsageDemo />
      </CodeCard>

      <CodeCard
        title="Controlled Checkbox"
        desc="Communicated with other components."
        code={<Code string={controlCheckboxCode} />}
      >
        <ControlCheckboxDemo />
      </CodeCard>

      <CodeCard
        title="Checkbox Group"
        desc="Generate a group of checkboxes from an array."
        code={<Code string={checkboxGroupCode} />}
      >
        <CheckboxGroupDemo />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Checkbox', withReadme(readme, Example))
}
