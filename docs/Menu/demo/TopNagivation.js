import * as React from 'react'
import { A10Menu, A10Icon } from '../../../src'
const SubMenu = A10Menu.SubMenu
const MenuItemGroup = A10Menu.ItemGroup

class App extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }
  render() {
    return (
      <A10Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <A10Menu.Item key="mail">
          <A10Icon type="mail" />
          Navigation One
        </A10Menu.Item>
        <A10Menu.Item key="app" disabled>
          <A10Icon type="appstore" />
          Navigation Two
        </A10Menu.Item>
        <SubMenu
          title={
            <span>
              <A10Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <MenuItemGroup title="Item 1">
            <A10Menu.Item key="setting:1">Option 1</A10Menu.Item>
            <A10Menu.Item key="setting:2">Option 2</A10Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <A10Menu.Item key="setting:3">Option 3</A10Menu.Item>
            <A10Menu.Item key="setting:4">Option 4</A10Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <A10Menu.Item key="docs">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </A10Menu.Item>
      </A10Menu>
    )
  }
}

export default App
