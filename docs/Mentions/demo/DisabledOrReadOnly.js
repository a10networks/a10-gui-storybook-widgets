import * as React from 'react'
import { A10Mentions } from '../../../src'

const { Option } = A10Mentions

function getOptions() {
  return ['afc163', 'zombiej', 'yesmeck'].map(value => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ))
}

function DisabledOrReadOnly() {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <A10Mentions
          style={{ width: '100%' }}
          placeholder="this is disabled A10Mentions"
          disabled
        >
          {getOptions()}
        </A10Mentions>
      </div>
      <A10Mentions
        style={{ width: '100%' }}
        placeholder="this is readOnly A10Mentions"
        readOnly
      >
        {getOptions()}
      </A10Mentions>
    </div>
  )
}

export default DisabledOrReadOnly
