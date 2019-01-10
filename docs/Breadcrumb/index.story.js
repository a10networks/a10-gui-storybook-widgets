
import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Code, CodeComponent, CodeCard } from '../utils'

import * as readme from '../../src/Breakdcrumb/README.md'
import BasicUsage from './demo/BasicUsage'
import SeparatorUsage from './demo/SeparatorUsage'
import WithIcon from './demo/WithIcon'
import OtherRouter from './demo/OtherRouter'
import ReactRouter from './demo/ReactRouter'
import { basicUsageCode, separatorUsageCode, withIconCode, otherRouterCode, reactRouterCode } from './demo/code'


const readme = require('../../src/Breadcrumb/README.md')

const Example = () => (
  <CodeComponent>
    <CodeCard
      title="Basic Usage"
      desc="The simplest use"
      code={<Code string={basicUsageCode} />}
    >
      <BasicUsage />
    </CodeCard>

    <CodeCard
      title="With an Icon"
      desc="The icon should be placed in front of the text."
      code={<Code string={withIconCode} />}
    >
      <WithIcon />
    </CodeCard>

    {/* <CodeCard
      title="React Router Integration"
      desc="Used together with react-router@4"
      code={<Code string={reactRouterCode} />}
    >
      <ReactRouter />
    </CodeCard> */}

    {/* <CodeCard
      title="Other Router Integration"
      desc="Used together with react-router@4 or other router."
      code={<Code string={otherRouterCode} />}
    >
      <OtherRouter />
    </CodeCard> */}

    <CodeCard
      title="Configuring the Separator"
      desc={`The separator can be customized by setting the separator property: separator=">"`}
      code={<Code string={separatorUsageCode} />}
    >
      <SeparatorUsage />
    </CodeCard>
  </CodeComponent>
)

export default story => {
  story.add('A10Breadcrumb', withReadme(readme, Example))
}
