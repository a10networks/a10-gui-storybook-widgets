import * as React from 'react'
import { A10Table } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

class Demo extends React.Component {
  render() {
    const desc = `
  Display large amounts of data in scrollable view.
  Specify the width of each column if header and cell do not align properly.`
    return (
      <CodeCard
        title="Fixed Header"
        desc={desc}
        code={<Code string={demoCode} />}
      >
        <A10Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      </CodeCard>
    )
  }
}
export default Demo
