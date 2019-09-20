import * as React from 'react'
import { withDocs, withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'

import { Code, CodeComponent, CodeCard } from '../utils'
import { A10SearchBar, A10Icon } from '../../src'
import * as readme from '../../src/SearchBar/README.md'
import './styles/index.less'
// export default (story) => {
//   story.addDecorator(withReadme(readme))
//   .add('A10SearchBar', () => {
//     return (
//       <CodeComponent>
//         <CodeCard title="Basic Usage" desc="Basic Usage Example" code={<Code string={'<A10SearchBar />'} />}>
//           <A10SearchBar />
//         </CodeCard>
//       </CodeComponent>
//     )
//   })
// }
const searchBarCode = `import { A10SearchBar } from 'a10-gui-widgets'

const Example = () => (
  <A10SearchBar />
)

ReactDOM.render(<Example />, mountNode);`

const searchBarEnterButtonCode = `import { A10SearchBar } from 'a10-gui-widgets'

const Example = () => (
  <A10SearchBar enterButton={true} />
)

ReactDOM.render(<Example />, mountNode);`

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="Basic Usage Example"
        code={<Code string={searchBarCode} />}
      >
        <div id="BasicSearchBarSpecific">
          <A10SearchBar />
        </div>
      </CodeCard>
      <CodeCard
        title="Enter Button Usage"
        desc="Enter Button Usage Example"
        code={<Code string={searchBarEnterButtonCode} />}
      >
        <div id="SearchBarEnterSpecific">
          <A10SearchBar enterButton={true} />
        </div>
      </CodeCard>
    </CodeComponent>
  )
}

export default (story: any) => {
  story.add('A10SearchBar', withReadme(readme, Example))
}
