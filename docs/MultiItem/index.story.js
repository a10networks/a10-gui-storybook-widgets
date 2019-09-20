import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { Code, CodeComponent, CodeCard } from '../utils'
import { A10MultiItem } from '../../src'
const A10MultiItemReadme = require('../../src/MultiItem/README.md')

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic A10MultiItem"
        desc="Basic A10MultiItem Example"
        code={<Code string={'<A10MultiItem items={[1, 2, 3]} drawerTitle="Test" showItemClose={true} onCloseItem={(index) => console.log(index)}/>'} />}
      >
        <A10MultiItem items={[1, 2, 3]} drawerTitle="Test" showItemClose={true} onCloseItem={(index) => console.log(index)}/>
      </CodeCard>

      <CodeCard
        title="Customized item renderer"
        desc="Customized item renderer Example"
        code={<Code string={'<A10MultiItem items={[1, 2, 3]} drawerTitle="Test" onRenderItem={(index, value) => value} />'} />}
      >
        <A10MultiItem items={[1, 2, 3]} drawerTitle="Test" onRenderItem={(index, value) => value} />
      </CodeCard>
    </CodeComponent>
  )
}
export default story => {
  story.add('A10MultiItem', withReadme(A10MultiItemReadme, Example))
}
