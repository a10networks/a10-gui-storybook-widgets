import * as React from 'react'
import { A10AutoComplete } from '../../../src'

class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
    }
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    })
  }

  render() {
    const { dataSource } = this.state
    const onSelect = (value) => {
      console.log('onSelect', value);
    }
    return (
      <A10AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        placeholder="input here"
      />
    )
  }
}

export default Example
