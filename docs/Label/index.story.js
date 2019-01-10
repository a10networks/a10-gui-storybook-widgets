
import * as React from 'react'

import { A10Label } from '../../src'

import { Code, CodeComponent, CodeCard } from '../utils'
import { withReadme } from 'storybook-readme'
const A10LabelReadme = require('../../src/Label/README.md')

const code = `import { A10Link } from 'a10-gui-widgets'

ReactDOM.render(
  <A10Label title="This is a test.">Test Label</A10Label>
, mountNode);`

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Label"
        desc="Label Example"
        code={<Code string={code} />}
      >
        <A10Label title="This is a test.">Test Label</A10Label>
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Label', withReadme(A10LabelReadme, Example))
}
