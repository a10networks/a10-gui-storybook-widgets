import * as React from 'react'
import { A10Menu, A10Dropdown, A10Button } from '../../../src'
import './index.less'

const menu = (
  <A10Menu>
    <A10Menu.Item>1st menu item</A10Menu.Item>
    <A10Menu.Item>2nd menu item</A10Menu.Item>
    <A10Menu.Item>3rd menu item</A10Menu.Item>
  </A10Menu>
)

const Example = () => {
  return (
    <div className="dropdown-cls">
      <A10Dropdown overlay={menu} placement="bottomLeft">
        <A10Button>bottomLeft</A10Button>
      </A10Dropdown>
      <A10Dropdown overlay={menu} placement="bottomCenter">
        <A10Button>bottomCenter</A10Button>
      </A10Dropdown>
      <A10Dropdown overlay={menu} placement="bottomRight">
        <A10Button>bottomRight</A10Button>
      </A10Dropdown>
      <br />
      <A10Dropdown overlay={menu} placement="topLeft">
        <A10Button>topLeft</A10Button>
      </A10Dropdown>
      <A10Dropdown overlay={menu} placement="topCenter">
        <A10Button>topCenter</A10Button>
      </A10Dropdown>
      <A10Dropdown overlay={menu} placement="topRight">
        <A10Button>topRight</A10Button>
      </A10Dropdown>
    </div>
  )
}

export default Example
