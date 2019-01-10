import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import * as readme from '../../src/Popconfirm/README.md'

import BasicDemo from './demo/Basic'
import LocaleTextDemo from './demo/LocaleText'
import PlacementcDemo from './demo/Placement'

import ConditionalTriggerDemo from './demo/ConditionalTrigger'
import CustomizeIconDemo from './demo/CustomizeIcon'

import { basicCode, localeTextCode, placementCode, conditionalTriggerCode, customizeIconCode } from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="The basic example."
        code={<Code string={basicCode} />}
      >
        <BasicDemo />
      </CodeCard>
      <CodeCard
        title="Locale text"
        desc="Set okText and cancelText props to customize the button's labels."
        code={<Code string={localeTextCode} />}
      >
        <LocaleTextDemo />
      </CodeCard>
      <CodeCard
        title="Placement"
        desc="There are 12 placement options available. Use arrowPointAtCenter if you want arrow point at the center of target."
        code={<Code string={placementCode} />}
      >
        <PlacementcDemo />
      </CodeCard>
      <CodeCard
        title="Conditional trigger"
        desc="Make it pop up under some conditions."
        code={<Code string={conditionalTriggerCode} />}
      >
        <ConditionalTriggerDemo />
      </CodeCard>
      <CodeCard
        title="Customize icon"
        desc="Set icon props to customize the icon."
        code={<Code string={customizeIconCode} />}
      >
        <CustomizeIconDemo />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Popconfirm', withReadme(readme, Example))
}
