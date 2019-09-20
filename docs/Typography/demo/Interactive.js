import * as React from 'react'
import { A10Typography } from '../../../src'

const { Paragraph } = A10Typography

class Interactive extends React.Component {
  state = {
    str: 'This is an editable text.',
  }

  onChange = str => {
    console.log('Content change:', str)
    this.setState({ str })
  }

  render() {
    return (
      <div>
        <Paragraph editable={{ onChange: this.onChange }}>
          {this.state.str}
        </Paragraph>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>
          Replace copy text.
        </Paragraph>
      </div>
    )
  }
}

export default Interactive
