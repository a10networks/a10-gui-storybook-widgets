import * as React from 'react'
import { A10Button } from '../../../src'

const IconDemo = () => {
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <A10Button type="primary" shape="circle" icon="search" />
      &nbsp;
      <A10Button type="primary" icon="search">
        Search
      </A10Button>
      <div style={{ width: 12 }} />
      <A10Button shape="circle" icon="search" />
      &nbsp;
      <A10Button icon="search">Search</A10Button>
      <div style={{ width: 12 }} />
      <A10Button shape="circle" icon="search" />
      &nbsp;
      <A10Button icon="search">Search</A10Button>
      <div style={{ width: 12 }} />
      <A10Button type="dashed" shape="circle" icon="search" />
      &nbsp;
      <A10Button type="dashed" icon="search">
        Search
      </A10Button>
    </div>
  )
}

export default IconDemo
