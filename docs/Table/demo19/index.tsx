import * as React from 'react'
import { A10Table, A10Input } from '../../../src/'
import { Popconfirm } from 'antd'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const A10Popconfirm = Popconfirm

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  })
}

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable ? (
      <A10Input
        style={{ margin: '-5px 0' }}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    ) : (
        value
      )}
  </div>
)

class EditableTable extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: '25%',
        render: (text, record) => this.renderColumns(text, record, 'name'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        width: '15%',
        render: (text, record) => this.renderColumns(text, record, 'age'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        width: '40%',
        render: (text, record) => this.renderColumns(text, record, 'address'),
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editable } = record
          return (
            <div className="editable-row-operations">
              {editable ? (
                <span>
                  <a onClick={() => this.save(record.key)}>Save </a>
                  <A10Popconfirm
                    title="Sure to cancel?"
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <a>Cancel</a>
                  </A10Popconfirm>
                </span>
              ) : (
                  <a onClick={() => this.edit(record.key)}>Edit</a>
                )}
            </div>
          )
        },
      },
    ]
    this.state = { data }
    this.cacheData = data.map(item => ({ ...item }))
  }
  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    )
  }
  handleChange(value, key, column) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item.key)[0]
    if (target) {
      target[column] = value
      this.setState({ data: newData })
    }
  }
  edit(key) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item.key)[0]
    if (target) {
      target.editable = true
      this.setState({ data: newData })
    }
  }
  save(key) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item.key)[0]
    if (target) {
      delete target.editable
      this.setState({ data: newData })
      this.cacheData = newData.map(item => ({ ...item }))
    }
  }
  cancel(key) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item.key)[0]
    if (target) {
      Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
      delete target.editable
      this.setState({ data: newData })
    }
  }
  render() {
    return (
      <A10Table bordered dataSource={this.state.data} columns={this.columns} />
    )
  }
}

class Demo extends React.Component {
  render() {
    return (
      <CodeCard
        title="Editable Rows"
        desc="Table with editable rows."
        code={<Code string={demoCode} />}
      >
        <EditableTable />
      </CodeCard>
    )
  }
}

export default Demo
