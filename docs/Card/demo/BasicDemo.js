import * as React from 'react'
import { A10Card } from '../../../src';

const Example = () => (
  <A10Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </A10Card>
)

export default Example
