import * as React from 'react'
import { A10Mentions } from '../../../src'

const { Option } = A10Mentions
const BasicUsage = () => {
  const onChange = value => {
    console.log('onChange', value)
  }

  const onSelect = option => {
    console.log('onSelect', option)
  }

  return (
    <A10Mentions
      style={{ width: '100%' }}
      onChange={onChange}
      onSelect={onSelect}
      defaultValue="@afc163"
    >
      <Option value="afc163">afc163</Option>
      <Option value="zombieJ">zombieJ</Option>
      <Option value="yesmeck">yesmeck</Option>
    </A10Mentions>
  )
}

export default BasicUsage
