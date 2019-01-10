import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withDocs, withReadme } from 'storybook-readme'
import { CodeComponent, CodeCard, Code } from '../utils'

import * as readme from '../../src/Table/README.md'
import './index.less'


import { A10Table, A10Divider, A10Icon } from '../../src'
const { Column, ColumnGroup } = A10Table

import { demo1Code, demo2Code } from './demo/code'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <A10Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];


const Demo1 = () => {
  return (
    <A10Table columns={columns} dataSource={data} />
  )
}

const Demo2 = () => {
  const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]

  return (
    <div id="JSXTableSpecific">
      <A10Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <span>
              <a href="#">Action 一 {record.name}</a>
              <span className="ant-divider" />
              <a href="#">Delete</a>
              <span className="ant-divider" />
              <a href="#" className="ant-dropdown-link">
                More actions <A10Icon type="down" />
              </a>
            </span>
          )}
        />
      </A10Table>
    </div>
  )
}

import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'
import Demo9 from './demo9'
import AjaxExample from './AjaxExample'
import Demo10 from './demo10'
import Demo11 from './demo11'
import Demo12 from './demo12'
import Demo13 from './demo13'
import Demo14 from './demo14'
import Demo15 from './demo15'
import Demo16 from './demo16'
import Demo17 from './demo17'
import Demo18 from './demo18'
import Demo19 from './demo19'
import Demo20 from './demo20'
import Demo21 from './demo21'
import Demo22 from './demo22'
import Demo23 from './demo23'

const Example = () => {
  return (
    <div id="TableSpecific">
      <CodeComponent>
        <CodeCard title="Basic Usage" desc="Simple table with actions." code={<Code string={demo1Code} />}>
          <Demo1 />
        </CodeCard>
        <CodeCard
          code={<Code string={demo2Code} />}
          title="JSX style API"
          desc="Using JSX style API (introduced in 2.5.0) Since this is just a syntax sugar for the prop columns, so that you can't compose Column and ColumnGroup with other Components."
        >
          <Demo2 />
        </CodeCard>
        <Demo3 />
        <Demo4 />
        <Demo5 />
        <Demo6 />
        <Demo7 />
        <Demo8 />
        <Demo9 />
        <AjaxExample />
        <Demo10 />
        <Demo11 />
        <Demo12 />
        <Demo13 />
        <Demo14 />
        <Demo15 />
        <Demo16 />
        <Demo17 />
        <Demo18 />
        <Demo19 />
        <Demo20 />
        <Demo21 />
        <Demo22 />
        <Demo23 />
        {/* <Demo24 /> */}
      </CodeComponent>
    </div>
  )
}

export default story => {
  story.add('A10Table', withReadme(readme, Example))
}

