import * as React from 'react'
import { A10Descriptions } from '../../../src'

const Responsive = () => {
  return (
    <div>
      <A10Descriptions
        title="Responsive A10Descriptions"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
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
          Region: East China 1
        </A10Descriptions.Item>
      </A10Descriptions>
    </div>
  )
}

export default Responsive
