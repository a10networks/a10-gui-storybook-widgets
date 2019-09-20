import * as React from 'react'
import { A10Descriptions, A10Badge } from '../../../src'

const VerticalBoder = () => (
  <A10Descriptions title="User Info" layout="vertical" bordered>
    <A10Descriptions.Item label="Product">Cloud Database</A10Descriptions.Item>
    <A10Descriptions.Item label="Billing Mode">Prepaid</A10Descriptions.Item>
    <A10Descriptions.Item label="Automatic Renewal">YES</A10Descriptions.Item>
    <A10Descriptions.Item label="Order time">
      2018-04-24 18:00:00
    </A10Descriptions.Item>
    <A10Descriptions.Item label="Usage Time" span={3}>
      2019-04-24 18:00:00
    </A10Descriptions.Item>
    <A10Descriptions.Item label="Status" span={3}>
      <A10Badge status="processing" text="Running" />
    </A10Descriptions.Item>
    <A10Descriptions.Item label="Negotiated Amount">
      $80.00
    </A10Descriptions.Item>
    <A10Descriptions.Item label="Discount">$20.00</A10Descriptions.Item>
    <A10Descriptions.Item label="Official Receipts">
      $60.00
    </A10Descriptions.Item>
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
)

export default VerticalBoder
