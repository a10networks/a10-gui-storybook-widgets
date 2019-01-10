import * as React from 'react'
import { A10Spin, A10Alert } from '../../../src'

const Example = () => {
  return (
    <A10Spin tip="Loading...">
    <A10Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </A10Spin>
  )
}

export default Example