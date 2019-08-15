import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { CodeComponent, Code, CodeCard } from '../utils'

import * as A10MentionsReadme from '../../src/Mentions/README.md'
import BasicUsage from './demo/BasicUsage'
import PlacementUsage from './demo/PlacementUsage'
import Asynchronous from './demo/Asynchronous'
import WithForm from './demo/WithForm'
import DisabledOrReadOnly from './demo/DisabledOrReadOnly'
import CustomizeTriggerToken from './demo/CustomizeTriggerToken'
import {
  basicDemoCode,
  placementCode,
  asynchronous,
  withForm,
  disabledOrReadOnly,
  customizeTriggerToken,
} from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic"
        desc={'Basic usage.'}
        code={<Code string={basicDemoCode} />}
      >
        <BasicUsage />
      </CodeCard>

      <CodeCard
        title="Placement"
        desc={'Change the suggestions placement.'}
        code={<Code string={placementCode} />}
      >
        <PlacementUsage />
      </CodeCard>
      <CodeCard
        title="Asynchronous loading"
        desc={'async'}
        code={<Code string={asynchronous} />}
      >
        <Asynchronous />
      </CodeCard>
      <CodeCard
        title="With Form"
        desc={'Controlled mode, for example, to work with Form.'}
        code={<Code string={withForm} />}
      >
        <WithForm />
      </CodeCard>
      <CodeCard
        title="disabled or readOnly"
        desc={'Configurate disabled and readOnly.'}
        code={<Code string={disabledOrReadOnly} />}
      >
        <DisabledOrReadOnly />
      </CodeCard>
      <CodeCard
        title="Customize Trigger Token"
        desc={
          'Customize Trigger Token by prefix props. Default to @, Array<string> also supported.'
        }
        code={<Code string={customizeTriggerToken} />}
      >
        <CustomizeTriggerToken />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Mentions', withReadme(A10MentionsReadme, Example))
}
