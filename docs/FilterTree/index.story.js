import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { storiesOf } from '@storybook/react'
import { Code, CodeComponent, CodeCard } from '../utils'
import { A10FilterTree } from '../../src'

import FilterTreeExample from './FilterExample'

import filterMapping from './FilterMapping'

const readme = require('../../src/FilterTree/README.md')

const code = `import { A10FilterTree } from 'a10-gui-widgets'

const filterMapping = [
  {
    label: 'IP Version',
    filters: [
      {
        name: 'Chrome',
        'total-count': 10,
      },
      {
        name: 'IE/Edge',
        'total-count': 20,
      },
      {
        name: 'Firefox',
        'total-count': 15,
      },
      {
        name: 'Safari',
        'total-count': 4,
      },
      {
        name: 'Opera',
        'total-count': 3,
      },
    ],
    orderInfo: {},
    'total-count': 10,
  },
  {
    label: 'Protocol',
    filters: [],
    type: 'scroll',
    min: 0,
    max: 10,
    orderInfo: {},
    'total-count': 10,
  },
  {
    label: 'Subscriber IP',
    filters: [],
    orderInfo: {},
    'total-count': 10,
  },
]

<A10FilterTree groups={filterMapping} hideFilterCounter={true} onChangeFilter={onChangeFilter} />
`
const Example = () => (
  <CodeComponent>
    <CodeCard title="A10FilterTree" desc="" code={<Code string={code} />}>
      <div style={{ width: 300 }}>
        <FilterTreeExample />
      </div>
    </CodeCard>
  </CodeComponent>
)

export default story => {
  story.add('A10FilterTree', withReadme(readme, Example))
}
