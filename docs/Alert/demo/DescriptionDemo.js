import * as React from 'react'
import { A10Alert } from '../../../src'

class Example extends React.Component {

  render() {
    return (
      <div>
        <A10Alert
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"
          showIcon
        />
        <div style={{ height: '8px' }} />
        <A10Alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
          showIcon
        />
        <div style={{ height: '8px' }} />
        <A10Alert
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
          showIcon
        />
        <div style={{ height: '8px' }} />
        <A10Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
          showIcon
        />
      </div>
    )
  }
}

export default Example
