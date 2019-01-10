import * as React from 'react'
import { A10Spin, A10Icon } from '../../../src'

const antIcon = <A10Icon type="loading" style={{ fontSize: 24 }} spin />;

const Example = () => {
  return (
    <A10Spin indicator={antIcon} />
  )
}

export default Example