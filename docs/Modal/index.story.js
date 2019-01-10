import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { Code, CodeComponent, CodeCard } from '../utils'
import { BasicModalCode, CustomizedFooterModalCode, InformationModalCode } from './demo/code'
import BasicModal from './demo/BasicModal'
import CustomizedFooterModal from './demo/CustomizedFooterModal'
import InformationModal from './demo/InformationModal'
const A10ModalReadme = require('../../src/Modal/README.md')

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Modal"
        desc="Basic Modal Example"
        code={<Code string={BasicModalCode} />}
      >
        <BasicModal />
      </CodeCard>
      <CodeCard
        title="Customized Footer Modal"
        desc="Customized Footer Modal Example"
        code={<Code string={CustomizedFooterModalCode} />}
      >
        <CustomizedFooterModal />
      </CodeCard>
      <CodeCard
        title="Information Modal"
        desc="Information Modal Example"
        code={<Code string={InformationModalCode} />}
      >
        <InformationModal />
      </CodeCard>
    </CodeComponent>
  )
}
export default story => {
  story.add('A10Modal', withReadme(A10ModalReadme, Example))
}
