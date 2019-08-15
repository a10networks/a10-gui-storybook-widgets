import * as React from 'react'
import { A10Mentions } from '../../../src'

const { Option } = A10Mentions

const PlacementUsage = () => {
  return (
    <A10Mentions style={{ width: '100%' }} placement="top">
      <Option value="afc163">afc163</Option>
      <Option value="zombieJ">zombieJ</Option>
      <Option value="yesmeck">yesmeck</Option>
    </A10Mentions>
  )
}

export default PlacementUsage
