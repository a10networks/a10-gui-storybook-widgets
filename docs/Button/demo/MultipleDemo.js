import * as React from 'react'
import { A10Button, A10Menu, A10Dropdown, A10Icon } from '../../../src'

function handleMenuClick(e) {
  console.log('click', e)
}

const menu = (
  <A10Menu onClick={handleMenuClick}>
    <A10Menu.Item key="1">1st item</A10Menu.Item>
    <A10Menu.Item key="2">2nd item</A10Menu.Item>
    <A10Menu.Item key="3">3rd item</A10Menu.Item>
  </A10Menu>
)

const MultipleDemo = () => {
  return (
    <div>
      <A10Button type="primary">primary</A10Button> &nbsp;
      <A10Button>secondary</A10Button> &nbsp;
      <A10Dropdown overlay={menu}>
        <A10Button>
          Actions <A10Icon type="down" />
        </A10Button>
      </A10Dropdown>
    </div>
  )
}

export default MultipleDemo
