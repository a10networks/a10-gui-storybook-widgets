import * as React from 'react'
import { A10Mentions } from '../../../src'

const { Option } = A10Mentions

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
}

class CustomizeTriggerToken extends React.Component {
  state = {
    prefix: '@',
  }

  onSearch = (_, prefix) => {
    this.setState({ prefix })
  }

  render() {
    const { prefix } = this.state

    return (
      <A10Mentions
        style={{ width: '100%' }}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearch={this.onSearch}
      >
        {(MOCK_DATA[prefix] || []).map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </A10Mentions>
    )
  }
}

export default CustomizeTriggerToken
