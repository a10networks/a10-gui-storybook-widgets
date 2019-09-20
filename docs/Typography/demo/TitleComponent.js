import * as React from 'react'
import { A10Typography } from '../../../src'

const { Title } = A10Typography

const TitleComponent = () => (
  <div>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
  </div>
)

export default TitleComponent
