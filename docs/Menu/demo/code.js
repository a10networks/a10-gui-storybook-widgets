
export const topNagivationCode = `import * as React from 'react'
import { A10Menu, A10Icon } from 'a10-gui-widgets';
const SubMenu = A10Menu.SubMenu;
const MenuItemGroup = A10Menu.ItemGroup;

class App extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <A10Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <A10Menu.Item key="mail">
          <A10Icon type="mail" />Navigation One
        </A10Menu.Item>
        <A10Menu.Item key="app" disabled>
          <A10Icon type="appstore" />Navigation Two
        </A10Menu.Item>
        <SubMenu title={<span><A10Icon type="setting" />Navigation Three - Submenu</span>}>
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
          <a href="#" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </A10Menu.Item>
      </A10Menu>
    );
  }
}

ReactDOM.render(<App />, mountNode);`

export const inlinemenu = `
import { A10Menu, A10Icon } from 'a10-gui-widgets';

const SubMenu = A10Menu.SubMenu;
const MenuItemGroup = A10Menu.ItemGroup;

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <A10Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><A10Icon type="mail" /><span>Navigation One</span></span>}>
          <MenuItemGroup key="g1" title="Item 1">
            <A10Menu.Item key="1">Option 1</A10Menu.Item>
            <A10Menu.Item key="2">Option 2</A10Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Item 2">
            <A10Menu.Item key="3">Option 3</A10Menu.Item>
            <A10Menu.Item key="4">Option 4</A10Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><A10Icon type="appstore" /><span>Navigation Two</span></span>}>
          <A10Menu.Item key="5">Option 5</A10Menu.Item>
          <A10Menu.Item key="6">Option 6</A10Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <A10Menu.Item key="7">Option 7</A10Menu.Item>
            <A10Menu.Item key="8">Option 8</A10Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><A10Icon type="setting" /><span>Navigation Three</span></span>}>
          <A10Menu.Item key="9">Option 9</A10Menu.Item>
          <A10Menu.Item key="10">Option 10</A10Menu.Item>
          <A10Menu.Item key="11">Option 11</A10Menu.Item>
          <A10Menu.Item key="12">Option 12</A10Menu.Item>
        </SubMenu>
      </A10Menu>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
`

export const collapsedInlineMenu = `
import { A10Menu, A10Icon, A10Button } from 'a10-gui-widgets';

const SubMenu = A10Menu.SubMenu;

class App extends React.Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div style={{ width: 256 }}>
        <A10Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <A10Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </A10Button>
        <A10Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <A10Menu.Item key="1">
            <A10Icon type="pie-chart" />
            <span>Option 1</span>
          </A10Menu.Item>
          <A10Menu.Item key="2">
            <A10Icon type="desktop" />
            <span>Option 2</span>
          </A10Menu.Item>
          <A10Menu.Item key="3">
            <A10Icon type="inbox" />
            <span>Option 3</span>
          </A10Menu.Item>
          <SubMenu key="sub1" title={<span><A10Icon type="mail" /><span>Navigation One</span></span>}>
            <A10Menu.Item key="5">Option 5</A10Menu.Item>
            <A10Menu.Item key="6">Option 6</A10Menu.Item>
            <A10Menu.Item key="7">Option 7</A10Menu.Item>
            <A10Menu.Item key="8">Option 8</A10Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><A10Icon type="appstore" /><span>Navigation Two</span></span>}>
            <A10Menu.Item key="9">Option 9</A10Menu.Item>
            <A10Menu.Item key="10">Option 10</A10Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <A10Menu.Item key="11">Option 11</A10Menu.Item>
              <A10Menu.Item key="12">Option 12</A10Menu.Item>
            </SubMenu>
          </SubMenu>
        </A10Menu>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);

`
export const openCurrentSubmenuOnly = `
import { A10Menu, A10Icon } from 'a10-gui-widgets';

const SubMenu = A10Menu.SubMenu;

class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <A10Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu key="sub1" title={<span><A10Icon type="mail" /><span>Navigation One</span></span>}>
          <A10Menu.Item key="1">Option 1</A10Menu.Item>
          <A10Menu.Item key="2">Option 2</A10Menu.Item>
          <A10Menu.Item key="3">Option 3</A10Menu.Item>
          <A10Menu.Item key="4">Option 4</A10Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><A10Icon type="appstore" /><span>Navigation Two</span></span>}>
          <A10Menu.Item key="5">Option 5</A10Menu.Item>
          <A10Menu.Item key="6">Option 6</A10Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <A10Menu.Item key="7">Option 7</A10Menu.Item>
            <A10Menu.Item key="8">Option 8</A10Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><A10Icon type="setting" /><span>Navigation Three</span></span>}>
          <A10Menu.Item key="9">Option 9</A10Menu.Item>
          <A10Menu.Item key="10">Option 10</A10Menu.Item>
          <A10Menu.Item key="11">Option 11</A10Menu.Item>
          <A10Menu.Item key="12">Option 12</A10Menu.Item>
        </SubMenu>
      </A10Menu>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
`

export const verticalMenu = `
import { A10Menu, A10Icon } from 'a10-gui-widgets';

const SubMenu = A10Menu.SubMenu;
const MenuItemGroup = A10Menu.ItemGroup;

function handleClick(e) {
  console.log('click', e);
}

ReactDOM.render(
  <A10Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
    <SubMenu key="sub1" title={<span><A10Icon type="mail" /><span>Navigation One</span></span>}>
      <MenuItemGroup title="Item 1">
        <A10Menu.Item key="1">Option 1</A10Menu.Item>
        <A10Menu.Item key="2">Option 2</A10Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Iteom 2">
        <A10Menu.Item key="3">Option 3</A10Menu.Item>
        <A10Menu.Item key="4">Option 4</A10Menu.Item>
      </MenuItemGroup>
    </SubMenu>
    <SubMenu key="sub2" title={<span><A10Icon type="appstore" /><span>Navigation Two</span></span>}>
      <A10Menu.Item key="5">Option 5</A10Menu.Item>
      <A10Menu.Item key="6">Option 6</A10Menu.Item>
      <SubMenu key="sub3" title="Submenu">
        <A10Menu.Item key="7">Option 7</A10Menu.Item>
        <A10Menu.Item key="8">Option 8</A10Menu.Item>
      </SubMenu>
    </SubMenu>
    <SubMenu key="sub4" title={<span><A10Icon type="setting" /><span>Navigation Three</span></span>}>
      <A10Menu.Item key="9">Option 9</A10Menu.Item>
      <A10Menu.Item key="10">Option 10</A10Menu.Item>
      <A10Menu.Item key="11">Option 11</A10Menu.Item>
      <A10Menu.Item key="12">Option 12</A10Menu.Item>
    </SubMenu>
  </MA10Menuenu>,
  mountNode
);
`

export const menuThemes = `
import { A10Menu, A10Icon ,A10Switch} from 'a10-gui-widgets';

const SubMenu = A10Menu.SubMenu;

class Sider extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <A10Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <A10Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><A10Icon type="mail" /><span>Navigation One</span></span>}>
            <A10Menu.Item key="1">Option 1</A10Menu.Item>
            <A10Menu.Item key="2">Option 2</A10Menu.Item>
            <A10Menu.Item key="3">Option 3</A10Menu.Item>
            <A10Menu.Item key="4">Option 4</A10Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><A10Icon type="appstore" /><span>Navigtion Two</span></span>}>
            <A10Menu.Item key="5">Option 5</A10Menu.Item>
            <A10Menu.Item key="6">Option 6</A10Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <A10Menu.Item key="7">Option 7</A10Menu.Item>
              <A10Menu.Item key="8">Option 8</A10Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><A10Icon type="setting" /><span>Navigation Three</span></span>}>
            <A10Menu.Item key="9">Option 9</A10Menu.Item>
            <A10Menu.Item key="10">Option 10</A10Menu.Item>
            <A10Menu.Item key="11">Option 11</A10Menu.Item>
            <A10Menu.Item key="12">Option 12</A10Menu.Item>
          </SubMenu>
        </A10Menu>
      </div>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
`

export const switchTheMenuType = `
import { A10Menu, A10Icon ,A10Switch} from 'a10-gui-widgets';

const { SubMenu } = A10Menu;

class Sider extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
  }

  changeMode = (value) => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  render() {
    return (
      <div>
        <A10Switch onChange={this.changeMode} /> Change Mode
        <span className="ant-divider" style={{ margin: '0 1em' }} />
        <A10Switch onChange={this.changeTheme} /> Change Theme
        <br />
        <br />
        <A10Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <A10Menu.Item key="1">
            <A10Icon type="mail" />
            Navigation One
          </A10Menu.Item>
          <A10Menu.Item key="2">
            <A10Icon type="calendar" />
            Navigation Two
          </A10Menu.Item>
          <SubMenu key="sub1" title={<span><A10Icon type="appstore" /><span>Navigation Three</span></span>}>
            <A10Menu.Item key="3">Option 3</A10Menu.Item>
            <A10Menu.Item key="4">Option 4</A10Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <A10Menu.Item key="5">Option 5</A10Menu.Item>
              <A10Menu.Item key="6">Option 6</A10Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" title={<span><A10Icon type="setting" /><span>Navigation Four</span></span>}>
            <A10Menu.Item key="7">Option 7</A10Menu.Item>
            <A10Menu.Item key="8">Option 8</A10Menu.Item>
            <A10Menu.Item key="9">Option 9</A10Menu.Item>
            <A10Menu.Item key="10">Option 10</A10Menu.Item>
          </SubMenu>
        </A10Menu>
      </div>
    );
  }
}

ReactDOM.render(<Sider />, mountNode);
`