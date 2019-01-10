import * as React from 'react'
import { A10Mention } from '../../../src'
const { toString, toContentState } = A10Mention

const BasicUsageDemo = () => {
  const onChange = contentState => {
    console.log(toContentState)
    console.log(toString)
    console.log('onChange', contentState)
  }

  const onSelect = suggestion => {
    console.log('onSelect', suggestion)
  }

  class CheckboxDemo extends React.Component {
    render() {
      return (
        <A10Mention
          style={{ width: '100%' }}
          onChange={onChange}
          defaultValue={toContentState('@afc163')}
          suggestions={[
            'afc163',
            'benjycui',
            'yiminghe',
            'RaoHai',
            '中文',
            'にほんご',
          ]}
          onSelect={onSelect}
        />
      )
    }
  }

  return <CheckboxDemo />
}

export default BasicUsageDemo
