
import * as React from 'react'

import { A10Link } from '../../src'

import { Code, CodeComponent, CodeCard } from '../utils'
import { withReadme } from 'storybook-readme'
const A10LinkReadme = require('../../src/Link/README.md')

const code = `import { A10Link } from 'a10-gui-widgets'

ReactDOM.render(
  <A10Link href="http://localhost:6006/tooltip">Tooltip Storybook</A10Link>
, mountNode);`

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Link"
        desc="Click the link to open Tooltip Storybook"
        code={<Code string={code} />}
      >
        <A10Link href="http://localhost:6006/?selectedKind=A10%20Widgets&selectedStory=A10Tooltip&full=0&addons=1&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel">Tooltip Storybook</A10Link>
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Link', withReadme(A10LinkReadme, Example))
}
