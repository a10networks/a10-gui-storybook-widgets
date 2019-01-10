import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import { Code, CodeComponent, CodeCard } from '../utils'
import * as readme from '../../src/Divider/README.md'

import BasicDemo from './demo/Basic'
import VerticalDemo from './demo/Vertical'
import OrientTitleDemo from './demo/OrientTitleDemo'
import { basicCode, verticalCode, titleOrientCode } from './demo/code'

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
        title="Vertical"
        desc="Use type=`vertical` make it vertical."
        code={<Code string={verticalCode} />}
      >
        <VerticalDemo />
      </CodeCard>

      <CodeCard
        title="Orientation of title"
        desc="Set orientation of divider to left or right."
        code={<Code string={titleOrientCode} />}
      >
        <OrientTitleDemo />
      </CodeCard>

    </CodeComponent>
  )
}

export default story => {
  story.add('A10Divider', withReadme(readme, Example))
}
