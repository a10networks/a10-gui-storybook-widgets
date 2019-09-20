import { A10Breadcrumb, A10Icon } from '../../../src'
import * as React from 'react'

const WithIcon = () => {
    return (
        <A10Breadcrumb>
        <A10Breadcrumb.Item href="">
          <A10Icon type="home" />
        </A10Breadcrumb.Item>
        <A10Breadcrumb.Item href="">
          <A10Icon type="user" />
          <span>Application List</span>
        </A10Breadcrumb.Item>
        <A10Breadcrumb.Item>
          Application
        </A10Breadcrumb.Item>
      </A10Breadcrumb>
    )
  }
export default WithIcon