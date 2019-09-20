
import * as React from 'react'

import { A10Transfer } from '../../src'

import { withReadme } from 'storybook-readme'
import { Code, CodeComponent, CodeCard } from '../utils'

import { basicTransferCode, searchTransferCode, advancedTransferCode, customCode } from './demo/code'
import BasicTransferExample from './demo/BasicTransfer'
import SearchTransferExample from './demo/SearchTransfer'
import AdvancedTransferExample from './demo/AdvancedTransfer'
import CustomExample from './demo/CustomTransfer'

const A10TransferReadme = require('../../src/Transfer/README.md')

const Example = () => {
  return (
    <div id="TransferSpecific">
      <CodeComponent>
        <CodeCard
          title="Basic Transfer"
          desc="The most basic usage of Transfer involves providing the source data and target keys arrays, plus the rendering and some callback functions."
          code={<Code string={basicTransferCode} />}
        >
          <BasicTransferExample />
        </CodeCard>

        <CodeCard
          title="Search Transfer"
          desc="Transfer with a search box."
          code={<Code string={searchTransferCode} />}
        >
          <SearchTransferExample />
        </CodeCard>

        <CodeCard
          title="Advanced Transfer"
          desc="You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer."
          code={<Code string={advancedTransferCode} />}
        >
          <AdvancedTransferExample />
        </CodeCard>

        <CodeCard
          title="Custom Data Source"
          desc="You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer.Custom each Transfer Item, and in this way you can render a complex datasource."
          code={<Code string={customCode} />}
        >
          <CustomExample />
        </CodeCard>

      </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10Transfer', withReadme(A10TransferReadme, Example))
}
