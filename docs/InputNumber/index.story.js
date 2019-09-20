
import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Code, CodeComponent, CodeCard } from '../utils'

import * as readme from '../../src/Breakcrumb/README.md'
import BasicUsage from './demo/BasicUsage'
import FormatterUsage from './demo/FormatterUsage'
import SizeCode from './demo/Size'
import Disabled from './demo/Disabled'
import Decimals from './demo/Decimals'
import { basicUsageCode, formatterUsageCode, sizetest, disabled, decimals } from './demo/code'
import { demo2Code } from '../Input/demo/code';
import './demo/index.less'
const readme = require('../../src/InputNumber/README.md')

const Example = () => (
  <CodeComponent>
    <CodeCard
      title="Basic Usage"
      desc="Numeric-only input box."
      code={<Code string={basicUsageCode} />}
    >
      <BasicUsage />
    </CodeCard>

    <CodeCard
      title="Formatter"
      desc="Display value within it's situation with formatter, and we usually use parser at the same time."
      code={<Code string={formatterUsageCode} />}
    >
      <FormatterUsage />
    </CodeCard>
    <CodeCard
      title="Sizes"
      desc="There are three sizes available to a numeric input box. By default, the size is 32px. The two additional sizes are large and small which means 40px and 24px, respectively."
      code={<Code string={sizetest} />}
    >
      <SizeCode />
    </CodeCard>
    <CodeCard
      title="Disabled"
      desc="Click the button to toggle between available and disabled states."
      code={<Code string={disabled} />}
    >
      <Disabled />
    </CodeCard>
    <CodeCard
      title="Decimals"
      desc="A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop."
      code={<Code string={decimals} />}
    >
      <Decimals />
    </CodeCard>

  </CodeComponent>
)

export default story => {
  story.add('A10InputNumber', withReadme(readme, Example))
}
