import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme }  from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import * as readme from '../../src/Spin/README.md'

import BasicDemo from './demo/Basic'
import SizeDemo from './demo/Size'
import InsideContentDemo from './demo/InsideContent'

import EmbeddedModeDemo from './demo/EmbeddedMode'
import CustomizedDemo from './demo/Customized'
import CustomSpinningDemo from './demo/CustomSpinning'
import DelayDemo from './demo/Delay'
import { basicCode, sizeCode, embeddedModeCode,
  insideContentCode, customizedCode, customSpinningCode, delayCode
} from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="A simple loading status."
        code={<Code string={basicCode} />}
      >
        <BasicDemo />
      </CodeCard>

      <CodeCard
        title="Size"
        desc="A small Spin use in loading text, default Spin use in loading card-level block, and large Spin use in loading page."
        code={<Code string={sizeCode} />}
      >
        <SizeDemo />
      </CodeCard>
      <CodeCard
        title="Inside a container"
        desc="Spin in a container."
        code={<Code string={insideContentCode} />}
      >
        <InsideContentDemo />
      </CodeCard>
      <CodeCard
        title="Embedded mode"
        desc="Embedding content into Spin will alter it into loading state."
        code={<Code string={embeddedModeCode} />}
      >
        <EmbeddedModeDemo />
      </CodeCard>
      <CodeCard
        title="Customized description"
        desc="Customized description content."
        code={<Code string={customizedCode} />}
      >
        <CustomizedDemo />
      </CodeCard>
      <CodeCard
        title="Custom spinning indicator"
        desc="Use custom loading indicator."
        code={<Code string={customSpinningCode} />}
      >
        <CustomSpinningDemo />
      </CodeCard>
      <CodeCard
        title="delay"
        desc="Specifies a delay for loading state. If spinning ends during delay, loading status won't appear."
        code={<Code string={delayCode} />}
      >
        <DelayDemo />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Spin', withReadme(readme, Example))
}
