import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { A10Message, A10Button } from '../../src'
import { Code, CodeComponent, CodeCard } from '../utils'
import { basicDemoCode, draggableCode, searchableCode, customizeCode, basicControlCode, loadAsyncCode, treeCode, directoryCode } from './demo/code'
import BasicDemo from './demo/BasicDemo'
import DragDemo from './demo/DragDemo'
import SearchableDemo from './demo/SearchableDemo'
import CustomizeDemo from './demo/CustomizeDemo'
import BasicControlDemo from './demo/BasicControl'
import LoadAsyncDemo from './demo/LoadAsyncDemo'
import TreeDemo from './demo/TreeWithLine'
import DirectoryDemo from './demo/DirectoryDemo'

const A10MessageReadme = require('../../src/Tree/README.md')


const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc."
        code={<Code string={basicDemoCode} />}
      >
        <BasicDemo />
      </CodeCard>

      <CodeCard
        title="Draggable Usage"
        desc="Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode."
        code={<Code string={draggableCode} />}
      >
        <DragDemo />
      </CodeCard>

      <CodeCard
        title="Searchable"
        desc="Searchable Tree."
        code={<Code string={searchableCode} />}
      >
        <SearchableDemo />
      </CodeCard>

      <CodeCard
        title="Customize"
        desc="You can customize icons for different nodes."
        code={<Code string={customizeCode} />}
      >
        <CustomizeDemo />
      </CodeCard>

      <CodeCard
        title="basic controlled example"
        desc="basic controlled example"
        code={<Code string={basicControlCode} />}
      >
        <BasicControlDemo />
      </CodeCard>

      <CodeCard
        title="load data asynchronously"
        desc="To load data asynchronously when click to expand a treeNode."
        code={<Code string={loadAsyncCode} />}
      >
        <LoadAsyncDemo />
      </CodeCard>

      <CodeCard
        title="Tree With Line"
        desc="Tree With Line"
        code={<Code string={treeCode} />}
      >
        <TreeDemo />
      </CodeCard>

      <CodeCard
        title="Directory"
        desc="Built-in directory tree. multiple support ctrl(Windows) / command(Mac) selection."
        code={<Code string={directoryCode} />}
      >
        <DirectoryDemo />
      </CodeCard>
    </CodeComponent>
  )
}
export default story => {
  story.add('A10Tree', withReadme(A10MessageReadme, Example))
}
