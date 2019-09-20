import * as React from 'react'

import { A10ListInput } from '../../../src'

class Example extends React.Component {

  constructor(){
    super()
    this.state = {
      inputValue: []
    }
  }

  render() {
    return (
      <A10ListInput
        validation={['ipv4']}
        value={this.state.inputValue}
        errorMessage="Enter a valid IPv4 address."
        onChangeValue={(values: string[]) => {
          this.setState({ inputValue: values })
        }}
      />
    )
  }
}

export default Example
