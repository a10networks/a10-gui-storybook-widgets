import * as React from 'react'
import {
  A10Table,
  A10Badge,
  A10Menu,
  A10Dropdown,
  A10Icon,
} from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
import '../index.less'
const demoCode = require('./code.txt')

const menu = (
  <A10Menu>
    <A10Menu.Item>Action 1</A10Menu.Item>
    <A10Menu.Item>Action 2</A10Menu.Item>
  </A10Menu>
)

function NestedTable() {
  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <A10Badge status="success" />
            Finished
          </span>
        ),
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <span className="table-operation">
            <a href="javascript:;">Pause </a>
            <a href="javascript:;">Stop </a>
            <A10Dropdown overlay={menu}>
              <a href="javascript:;">
                More <A10Icon type="down" />
              </a>
            </A10Dropdown>
          </span>
        ),
      },
    ]

    const data = []
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      })
    }
    return <A10Table columns={columns} dataSource={data} pagination={false} />
  }

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Action',
      key: 'operation',
      render: () => <a href="javascript:;">Publish</a>,
    },
  ]

  const data = []
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    })
  }

  return (
    <A10Table
      className="components-table-demo-nested"
      columns={columns}
      expandedRowRender={expandedRowRender}
      dataSource={data}
    />
  )
}

class Demo extends React.Component {
  render() {
    const desc = 'Showing more detailed info of every row.'
    return (
      <div id="NestedTableSpecific">
        <CodeCard
          title="Nested tables"
          desc={desc}
          code={<Code string={demoCode} />}
        >
          <NestedTable />
        </CodeCard>
      </div>
    )
  }
}
export default Demo
