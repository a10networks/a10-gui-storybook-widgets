import * as React from 'react'

import { Code, CodeComponent, CodeCard } from '../utils'
import { withReadme } from 'storybook-readme'
const readme = require('../../src/Descriptions/README.md')

import Basic from './demo/Basic'
import Border from './demo/Border'
import CustomSize from './demo/CustomSize'
import Responsive from './demo/Responsive'
import Vertical from './demo/Vertical'
import VerticalBorder from './demo/VerticalBorder'

import {
  basicCode,
  boderCode,
  customSizeCode,
  responsizeCode,
  verticalCode,
  verticalBorderCode,
} from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic"
        desc="Simplest Usage."
        code={<Code string={basicCode} />}
      >
        <Basic />
      </CodeCard>
      <CodeCard
        title="border"
        desc="Descriptions with border and background color."
        code={<Code string={boderCode} />}
      >
        <Border />
      </CodeCard>
      <CodeCard
        title="Custom size"
        desc="Custom sizes to fit in a variety of containers."
        code={<Code string={customSizeCode} />}
      >
        <CustomSize />
      </CodeCard>
      <CodeCard
        title="responsive"
        desc="Responsive configuration enables perfect presentation on small screen devices."
        code={<Code string={responsizeCode} />}
      >
        <Responsive />
      </CodeCard>
      <CodeCard
        title="Vertical"
        desc="Simplest Usage."
        code={<Code string={verticalCode} />}
      >
        <Vertical />
      </CodeCard>
      <CodeCard
        title="Vertical border"
        desc="Descriptions with border and background color."
        code={<Code string={verticalBorderCode} />}
      >
        <VerticalBorder />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Descriptions', withReadme(readme, Example))
}
