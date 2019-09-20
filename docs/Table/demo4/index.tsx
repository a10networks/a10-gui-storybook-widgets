import * as React from 'react'
import { A10Table, A10Button } from '../../../src/'
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
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

class Demo extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  }
  start = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      })
    }, 1000)
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }
  render() {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0
    return (
      <CodeCard
        title="Selection and operation"
        desc="To perform operations and clear selections after selecting some rows, use rowSelection.selectedRowKeys to control selected rows."
        code={<Code string={demoCode} />}
      >
        <div style={{ marginBottom: 16 }}>
          <A10Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </A10Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <A10Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </CodeCard>
    )
  }
}
export default Demo
