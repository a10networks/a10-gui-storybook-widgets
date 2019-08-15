import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Card, Divider } from 'antd'
import { CodeComponent, Code, CodeCard } from '../utils'

import * as A10MentionReadme from '../../src/Mention/README.md'
import BasicUsageDemo from './demo/BasicUsage'
import PlacementUsageDemo from './demo/PlacementUsage'
import IconImageUsageDemo from './demo/IconImage'
import AsynchronousDemo from './demo/Asynchronous'
import CustomizeSuggestionDemo from './demo/CustomizeSuggestion'
import ControlledDemo from './demo/Controlled'
import WithFormDemo from './demo/WithForm'
import MultiLinesDemo from './demo/MultiLines'
import DisabledOrReadOnlyDemo from './demo/DisabledOrReadOnly'
import SuggestionContainerDemo from './demo/SuggestionContainer'
import CustomizeTriggerTokenDemo from './demo/CustomizeTriggerToken'
import {
  basicDemoCode,
  placementCode,
  iconImageCode,
  asynchronous,
  customizeSuggestion,
  controlled,
  withForm,
  multiLines,
  disabledOrReadOnly,
  suggestionContainer,
  customizeTriggerToken,
} from './demo/code'
const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc={'Basic usage.'}
        code={<Code string={basicDemoCode} />}
      >
        <BasicUsageDemo />
      </CodeCard>

      <CodeCard
        title="Placement"
        desc={'Change the suggestions placement.'}
        code={<Code string={placementCode} />}
      >
        <PlacementUsageDemo />
      </CodeCard>
      <CodeCard
        title="Asynchronous loading"
        desc={'async'}
        code={<Code string={asynchronous} />}
      >
        <AsynchronousDemo />
      </CodeCard>
      <CodeCard
        title="Customize Suggestion"
        desc={'Customize suggestions.'}
        code={<Code string={customizeSuggestion} />}
      >
        <CustomizeSuggestionDemo />
      </CodeCard>
      <CodeCard
        title="Icon Image"
        desc={'Customize suggestions.'}
        code={<Code string={iconImageCode} />}
      >
        <IconImageUsageDemo />
      </CodeCard>
      <CodeCard
        title="Controlled"
        desc={'Controlled mode.'}
        code={<Code string={controlled} />}
      >
        <ControlledDemo />
      </CodeCard>
      <CodeCard
        title="With Form"
        desc={'Controlled mode, for example, to work with Form.'}
        code={<Code string={withForm} />}
      >
        <WithFormDemo />
      </CodeCard>
      <CodeCard
        title="Multi-lines Mode"
        desc={'Multi lines mode.'}
        code={<Code string={multiLines} />}
      >
        <MultiLinesDemo />
      </CodeCard>
      <CodeCard
        title="disabled or readOnly"
        desc={'Configurate disabled and readOnly.'}
        code={<Code string={disabledOrReadOnly} />}
      >
        <DisabledOrReadOnlyDemo />
      </CodeCard>
      <CodeCard
        title="SuggestionContainer"
        desc={'To set the container of the suggestion.'}
        code={<Code string={suggestionContainer} />}
      >
        <SuggestionContainerDemo />
      </CodeCard>
      <CodeCard
        title="Customize Trigger Token"
        desc={
          'Customize Trigger Token by prefix props. Default to @, Array<string> also supported.'
        }
        code={<Code string={customizeTriggerToken} />}
      >
        <CustomizeTriggerTokenDemo />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Mention', withReadme(A10MentionReadme, Example))
}
