import * as React from 'react'
import { A10Descriptions } from '../../../src'

const Basic = () => (
  <A10Descriptions title="User Info">
    <A10Descriptions.Item label="UserName">Zhou Maomao</A10Descriptions.Item>
    <A10Descriptions.Item label="Telephone">1810000000</A10Descriptions.Item>
    <A10Descriptions.Item label="Live">Hangzhou, Zhejiang</A10Descriptions.Item>
    <A10Descriptions.Item label="Remark">empty</A10Descriptions.Item>
    <A10Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </A10Descriptions.Item>
  </A10Descriptions>
)

export default Basic
