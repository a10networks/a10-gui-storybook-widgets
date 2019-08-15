import * as React from 'react'
import { A10Descriptions, A10Radio } from '../../../src'

class CustomSize extends React.Component {
  state = {
    size: 'default',
  }

  onChange = e => {
    console.log('size checked', e.target.value)
    this.setState({
      size: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <A10Radio.Group onChange={this.onChange} value={this.state.size}>
          <A10Radio value="default">default</A10Radio>
          <A10Radio value="middle">middle</A10Radio>
          <A10Radio value="small">small</A10Radio>
        </A10Radio.Group>
        <br />
        <br />
        <A10Descriptions
          bordered
          title="Custom Size"
          border
          size={this.state.size}
        >
          <A10Descriptions.Item label="Product">
            Cloud Database
          </A10Descriptions.Item>
          <A10Descriptions.Item label="Billing">Prepaid</A10Descriptions.Item>
          <A10Descriptions.Item label="time">18:00:00</A10Descriptions.Item>
          <A10Descriptions.Item label="Amount">$80.00</A10Descriptions.Item>
          <A10Descriptions.Item label="Discount">$20.00</A10Descriptions.Item>
          <A10Descriptions.Item label="Official">$60.00</A10Descriptions.Item>
          <A10Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication_factor:3
            <br />
            Region: East China 1<br />
          </A10Descriptions.Item>
        </A10Descriptions>
      </div>
    )
  }
}

export default CustomSize
