import * as React from 'react'

import { A10ConfigList, A10Input } from '../../../src'

class NonExample extends React.Component {

  state = {
    includeData: [],
    excludeData: [],
  }

  onChangeInclude = (value) => {
    console.log(value)
    this.setState({ includeData: value })
  }

  onChangeExclude = (value) => {
    console.log(value)
    this.setState({ excludeData: value })
  }

  render() {
    const options = {}
    const formItemLayout = {
      labelCol: { span: 9 },
      wrapperCol: { span: 13 },
    }
    return (
      <React.Fragment>
        <A10ConfigList
          data={this.state.includeData}
          inputRender={{ type: 'A10Input', options }}
          label="Include"
          createLabel="Associate Include"
          formItemLayout={formItemLayout}
          onChange={this.onChangeInclude}
        />

        <A10ConfigList
          data={this.state.excludeData}
          inputRender={{ type: 'A10Input', options }}
          label="Exclude"
          createLabel="Associate Exclude"
          formItemLayout={formItemLayout}
          onChange={this.onChangeExclude}
        />
      </React.Fragment>
    )
  }
}

export default NonExample
