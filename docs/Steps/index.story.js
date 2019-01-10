import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import * as readme from '../../src/Steps/README.md'
import "./demo/index.less"
import BasicDemo from './demo/Basic'
import DotDemo from './demo/Dot'
import ErrorDemo from './demo/Error'
import VerticalMiniDemo from './demo/VerticalMini'
import MiniDemo from './demo/Mini'
import WithIconDemo from './demo/WithIcon'
import SwitchDemo from './demo/Switch'
import VerticalDemo from './demo/Vertical'
import CustomizeDot from './demo/CustomizeDot'
import { basicCode, dotCode, errorCode, verticalMiniCode, miniCode, withIconCode, switchCode, verticalCode, customizeDotCode } from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="The simplest usage."
        code={<Code string={basicCode} />}
      >
        <BasicDemo />
      </CodeCard>

      <CodeCard
        title="Mini version"
        desc="By setting like this: <Steps size='small'>, you can get a mini version."
        code={<Code string={miniCode} />}
      >
        <MiniDemo />
      </CodeCard>


      <CodeCard
        title="With Icon"
        desc="You can use your own custom icons by setting the property icon for Steps.Step."
        code={<Code string={withIconCode} />}
      >
        <WithIconDemo />
      </CodeCard>

      <CodeCard
        title="Switch Step"
        desc="Cooperate with the content and buttons, to represent the progress of a process."
        code={<Code string={switchCode} />}
      >
        <SwitchDemo />
      </CodeCard>


      <CodeCard
        title="Vertical"
        desc="A simple step bar in the vertical direction."
        code={<Code string={verticalCode} />}
      >
        <VerticalDemo />
      </CodeCard>

      <CodeCard
        title="Vertical mini version"
        desc="A simple mini version step bar in the vertical direction."
        code={<Code string={verticalMiniCode} />}
      >
        <VerticalMiniDemo />
      </CodeCard>

      <CodeCard
        title="Dot Style"
        desc="Steps with progress dot style."
        code={<Code string={dotCode} />}
      >
        <DotDemo />
      </CodeCard>

      <CodeCard
        title="Error Status"
        desc="By using status of Steps, you can specify the state for current step."
        code={<Code string={errorCode} />}
      >
        <ErrorDemo />
      </CodeCard>

      <CodeCard
        title="Customized Dot Style"
        desc="You can customize the display for Steps with progress dot style."
        code={<Code string={customizeDotCode} />}
      >
        <CustomizeDot />
      </CodeCard>

    </CodeComponent>
  )
}

export default story => {
  story.add('A10Steps', withReadme(readme, Example))
}
