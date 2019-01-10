import * as React from 'react'
import { withReadme } from 'storybook-readme'

import { CodeComponent, CodeCard, Code } from '../utils'
import { basicExample } from './code'
import * as readme from '../../src/DnD/Table/README.md'
import { A10DnDTable } from '../../src'
console.log(A10DnDTable)

import './style.less'

class ExampleTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: this.getDataSource([
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
          key: '3',
          name: 'Cindy',
          age: 11,
          address: '11 Downing Street',
        },
        {
          key: '4',
          name: 'Gina',
          age: 33,
          address: '12 Downing Street',
        },
      ]),
    }
    this.columns = this.getColumns([
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ])
  }

  moveRow(originIndex, finalIndex, direction) {
    const { dataSource } = this.state
    const tmp = dataSource[originIndex]
    dataSource[originIndex] = dataSource[finalIndex]
    dataSource[finalIndex] = tmp
    this.setState({
      dataSource: [...dataSource],
    })
  }

  getColumns(columns = []) {
    return [
      {
        title: '',
        dataIndex: '',
        render: (text, row, index) => {
          const realIndex = index / 2
          if (realIndex % 1 === 0) {
            return null
          }
          return Math.floor(realIndex) + 1
        },
      },
      ...columns,
    ]
  }

  getDataSource(dataSource = []) {
    return dataSource.reduce((result, data, index) => {
      const basicIndex = index * 2
      result.push({ key: basicIndex })
      data.key = basicIndex + 1
      result.push(data)
      return result
    }, [])
  }

  render() {
    return (
      <A10DnDTable
        className="example-dnd-table"
        dataSource={this.state.dataSource}
        columns={this.columns}
        showHeader={false}
        onMoveRow={this.moveRow.bind(this)}
      />
    )
  }
}

const Example = () => {
  return (
    <CodeComponent>
      <CodeCard
        title="Basic Usage"
        desc="Basic Usage Example"
        code={<Code string={basicExample} />}
      >
        <ExampleTable />
      </CodeCard>
    </CodeComponent>
  )
}

export default story => {
  story.add('A10DnDTable', withReadme(readme, Example))
}