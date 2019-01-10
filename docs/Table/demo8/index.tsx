import * as React from 'react'
import { A10Table, A10Input, A10Button, A10Icon } from '../../../src/'
import { CodeComponent, CodeCard, Code } from '../../utils'
const demoCode = require('./code.txt')

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
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

class Demo extends React.Component {
  searchInput = undefined
  state = {
    filterDropdownVisible: false,
    data,
    searchText: '',
    filtered: false,
  }
  onInputChange = (e) => {
    this.setState({ searchText: e.target.value })
  }
  onSearch = () => {
    const { searchText } = this.state
    const reg = new RegExp(searchText, 'gi')
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data
        .map((record) => {
          const match = record.name.match(reg)
          if (!match) {
            return null
          }
          return {
            ...record,
            name: (
              <span>
                {record.name
                  .split(reg)
                  .map(
                    (text, i) =>
                      i > 0
                        ? [<span className="highlight" key={i}>{match[0]}</span>, text]
                        : text,
                  )}
              </span>
            ),
          }
        })
        .filter((record) => !!record),
    })
  }

  handleReset = () => {
    this.setState({ searchText: '' });
    this.onSearch();
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <A10Input
              placeholder="Search name"
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
              style={{ height: '32px' }}
            />
            <div style={{ height: '8px' }}></div>
            <div style={{ textAlign: "center", height: '33px' }}>
              <A10Button type="primary" onClick={this.onSearch}>
                Search
            </A10Button>
              <A10Button type="secondary" onClick={this.handleReset}>
                Reset
            </A10Button>
            </div>
          </div>
        ),
        filterIcon: (
          <A10Icon
            type="smile-o"
            style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }}
          />
        ),
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: (visible) => {
          this.setState(
            {
              filterDropdownVisible: visible,
            },
            () => this.searchInput && this.searchInput.focus(),
          )
        },
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
        onFilter: (value, record) => record.address.indexOf(value) === 0,
      },
    ]
    return (
      <CodeCard
        title="Customized filter panel"
        desc="Implement a customized column search example via filterDropdown, filterDropdownVisible and filterDropdownVisibleChange."
        code={<Code string={demoCode} />}
      >
        <A10Table columns={columns} dataSource={this.state.data} />
      </CodeCard>
    )
  }
}
export default Demo
