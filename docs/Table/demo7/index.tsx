import * as React from 'react'
import { A10Table, A10Button } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter)
}

class Demo extends React.Component {
  render() {
    const desc = `
    Use filters to generate filter menu in columns, onFilter to determine filtered result, and filterMultiple to indicate whether it's multiple or single selection.
Use sorter to make a column sortable. sorter can be a function function(a, b) { ... } for sorting data locally.
Uses defaultSortOrder to make a column sorted by default.
    `
    return (
      <CodeCard
        title="Filter and sorter"
        desc={desc}
        code={<Code string={demoCode} />}
      >
        <A10Table columns={columns} dataSource={data} onChange={onChange} />
      </CodeCard>
    )
  }
}
export default Demo
