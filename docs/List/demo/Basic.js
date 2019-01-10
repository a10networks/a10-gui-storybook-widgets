import * as React from 'react'
import { A10List } from '../../../src'
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Example = () => {
  return (
    <div>
      <h3 style={{ marginBottom: 16 }}>Default Size</h3>
      <A10List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<A10List.Item>{item}</A10List.Item>)}
      />
      <h3 style={{ margin: '16px 0' }}>Small Size</h3>
      <A10List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<A10List.Item>{item}</A10List.Item>)}
      />
      <h3 style={{ margin: '16px 0' }}>Large Size</h3>
      <A10List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<A10List.Item>{item}</A10List.Item>)}
      />
    </div>
  )
}

export default Example
