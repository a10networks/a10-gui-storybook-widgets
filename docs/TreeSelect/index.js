import * as React from 'react'
import { withReadme } from 'storybook-readme'
import { Card, Divider } from 'antd'
import { CodeComponent, Code } from '../utils'

import * as A10TreeSelectReadme from '../../src/TreeSelect/README.md'
import { BasicUsageDemo, BasicDemoString } from './basicUsage'
import { MultipleCode, MultipleDemo } from './Multiple'
import { FromTreeDataUsageDemo, FromTreeDataDemoString } from './fromTreeData'
import { CheckableCode, CheckableDemo } from './Checkable'
const Example = () => {
  return (
    <CodeComponent>
      <Card title="Basic Usage">
        <BasicUsageDemo />
        <Divider />
        <p>The tree structure can be populated using <strong>treeData</strong> property. This is a quick and easy way to provide the tree content.</p>
        <Code string={BasicDemoString} />
      </Card>
      <Card title="Generate form tree data">
        <FromTreeDataUsageDemo />
        <Divider />
        <p>The tree structure can be populated using <strong>treeData</strong> property. This is a quick and easy way to provide the tree content.</p>
        <Code string={FromTreeDataDemoString} />
      </Card>

      <Card title="Multiple Selection">
        <MultipleDemo />
        <Divider />
        <p>Multiple selection usage</p>
        <Code string={MultipleCode} />
      </Card>


      <Card title="Checkable">
        <CheckableDemo />
        <Divider />
        <p>Multiple and checkable.</p>
        <Code string={CheckableCode} />
      </Card>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10TreeSelect', withReadme(A10TreeSelectReadme, Example))
}

