import * as React from 'react'
import { A10AutoComplete } from '../../../src'

const Option = A10AutoComplete.Option;

class Example extends React.Component {

  constructor() {
    super()
    this.state = {
      result: [],
    }
  }

  handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    })

    return (
      <A10AutoComplete
        style={{ width: 200 }}
        onSearch={this.handleSearch}
        placeholder="input here"
      >
        {children}
      </A10AutoComplete>
    )
  }
}

export default Example
