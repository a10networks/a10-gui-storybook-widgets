import * as React from 'react'

import { Code, CodeComponent, CodeCard } from '../utils'
import { withReadme } from 'storybook-readme'
const readme = require('../../src/PageHeader/README.md')

import BasicPageHeader from './demo/BasicPageHeader'
import UseWithBreadcrumbs from './demo/UseWithBreadcrumbs'
import ExampleWithContent from './demo/ExampleWithContent'
import ComplexExample from './demo/ComplexExample'

import {
  basicPageHeader,
  useWithBreadcrumbs,
  exampleWithContent,
  complexExample,
} from './demo/code'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Page Header"
        desc="Standard header, suitable for use in scenarios that require a brief description."
        code={<Code string={basicPageHeader} />}
      >
        <BasicPageHeader />
      </CodeCard>
      <CodeCard
        title="Use with breadcrumbs"
        desc="With breadcrumbs, it is suitable for deeper pages, allowing users to navigate quickly."
        code={<Code string={useWithBreadcrumbs} />}
      >
        <UseWithBreadcrumbs />
      </CodeCard>
      <CodeCard
        title="Example with content"
        desc="An example with content that gives priority to the main information of the page."
        code={<Code string={exampleWithContent} />}
      >
        <ExampleWithContent />
      </CodeCard>
      <CodeCard
        title="Complex example"
        desc="Use the operating area and customize the sub-nodes, suitable for use in the need to display some complex information to help users quickly understand the information and operations of this page."
        code={<Code string={complexExample} />}
      >
        <ComplexExample />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10PageHeader', withReadme(readme, Example))
}
