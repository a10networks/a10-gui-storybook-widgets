import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { CodeComponent, CodeCard, Code } from '../utils'
import { subCompCode, listCode } from './demo/code'
import { A10Skeleton } from '../../src'
import SubCompDemo from './demo/SubComp'
import ListDemo from './demo/List'
import * as readme from '../../src/Skeleton/README.md'

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="Simplest Skeleton usage."
        code={<Code string={'<A10Skeleton />'} />}
      >
        <A10Skeleton />
      </CodeCard>

      <CodeCard
        title="Complex combination"
        desc="Complex combination with avatar and multiple paragraphs."
        code={
          <Code
            string={'<A10Skeleton avatar={true} paragraph={{ rows: 4 }} />'}
          />
        }
      >
        <A10Skeleton avatar={true} paragraph={{ rows: 4 }} />
      </CodeCard>

      <CodeCard
        title="Active Animation"
        desc="Display active animation."
        code={<Code string={'<A10Skeleton active={true} />'} />}
      >
        <A10Skeleton active={true} />
      </CodeCard>

      <CodeCard
        title="Contains sub component"
        desc="Skeleton contains sub component."
        code={<Code string={subCompCode} />}
      >
        <SubCompDemo />
      </CodeCard>
      <CodeCard
        title="List"
        desc="Use skeleton in list component."
        code={<Code string={listCode} />}
      >
        <ListDemo />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10Skeleton', withReadme(readme, Example))
}
