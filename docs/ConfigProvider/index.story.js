import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/ConfigProvider/README.md'
const code = `import { A10ConfigProvider } from 'a10-gui-widgets';

// ...

return (
  <A10ConfigProvider {...yourConfig}>
    <App />
  </A10ConfigProvider>
);`

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="This component provides a configuration to all React components underneath itself via the context API, in the render tree all components will have access to the provided config."
        code={<Code string={code} />}
      >
        <span />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10ConfigProvider', withReadme(readme, Example))
}
