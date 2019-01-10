import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/Drawer/README.md'

import NormalExample from './example/Normal'
import SubmitExample from './example/SubmitDemo'
import MultiDrawer from './example/MultiDrawer'
import CustomPlacementExample from './example/CustomPlacementExample'
import PreviewExample from './example/PreviewDrawer'
import { basicCode, submitCode, multiDrawerCode, customCode, previewCode } from './example/code'
import { A10Form } from '../../src'



const Example = () => {
  return (
    <CodeComponent>
      <CodeCard title="Basic Usage" desc="Basic drawer." code={<Code string={basicCode} />}>
        <NormalExample />
      </CodeCard>

      <CodeCard title="Submit form in drawer" desc="Use form in drawer with submit button." code={<Code string={submitCode} />}>
        <SubmitExample />
      </CodeCard>

      <CodeCard
        title="Multi-level drawer"
        desc="Open a new drawer on top of an existing drawer to handle multi branch tasks"
        code={<Code string={multiDrawerCode} />}
      >
        <MultiDrawer />
      </CodeCard>

      <CodeCard
        title="Custom Placement"
        desc="Basic drawer."
        code={<Code string={customCode} />}
      >
        <CustomPlacementExample />
      </CodeCard>

      <CodeCard
        title="Preview Placement"
        desc="Use when you need to quickly preview the outline of the object. Such as list item preview."
        code={<Code string={previewCode} />}
      >
        <PreviewExample />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Drawer', withReadme(readme, Example))
}
