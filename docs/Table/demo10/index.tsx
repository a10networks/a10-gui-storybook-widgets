import * as React from 'react'
import { A10Table } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
]

class Demo extends React.Component {
  render() {
    return (
      <CodeCard
        title="Border, title and footer"
        desc="Add border, title and footer for table."
        code={<Code string={demoCode} />}
      >
        <A10Table
          columns={columns}
          dataSource={data}
          bordered
        />
      </CodeCard>
    )
  }
}
export default Demo
