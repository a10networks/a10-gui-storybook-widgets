import * as React from 'react'
import { A10Table } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]
const data = []

class Demo extends React.Component {
  render() {
    return (
      <CodeCard
        title="Size"
        desc="Two compacted table size: middle and small, small size is used in Modal only."
        code={<Code string={demoCode} />}
      >
        <h4>Middle size table</h4>
        <A10Table columns={columns} dataSource={data} size="middle" />
        <h4>Small size table</h4>
        <A10Table columns={columns} dataSource={data} size="small" />
      </CodeCard>
    )
  }
}
export default Demo
