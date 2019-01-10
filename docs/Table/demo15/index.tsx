import * as React from 'react'
import { A10Table } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="#">action</a>,
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
]

class Demo extends React.Component {
  render() {
    const desc = `
    To fix some columns and scroll inside other columns, and you must set scoll.x meanwhile.
    Specify the width of columns if header and cell do not align properly.
    A fixed value which is greater than table width for scroll.x is recommended. The sum of unfixed columns should not greater than scroll.x.`
    return (
      <CodeCard
        title="Fixed Columns"
        desc={desc}
        code={<Code string={demoCode} />}
      >
        <A10Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
      </CodeCard>
    )
  }
}
export default Demo
