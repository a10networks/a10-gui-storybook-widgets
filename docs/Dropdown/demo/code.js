export const basicCode = `import { A10Menu, A10Dropdown, A10Icon } from 'a10-gui-widgets';

const menu = (
  <A10Menu>
    <A10Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/">1st menu item</a>
    </A10Menu.Item>
    <A10Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/company/meet-a10">2nd menu item</a>
    </A10Menu.Item>
    <A10Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/products">3rd menu item</a>
    </A10Menu.Item>
  </A10Menu>
);

ReactDOM.render(
  <A10Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me <A10Icon type="down" />
    </a>
  </A10Dropdown>,
  mountNode
);`

export const otherCode = `import { A10Menu, A10Dropdown, A10Icon } from 'a10-gui-widgets';

const menu = (
  <A10Menu>
  <A10Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/">1st menu item</a>
  </A10Menu.Item>
  <A10Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/company/meet-a10">2nd menu item</a>
  </A10Menu.Item>
  <A10Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/products">3rd menu item</a>
  </A10Menu.Item>
  </A10Menu>
);

ReactDOM.render(
  <A10Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me <A10Icon type="down" />
    </a>
  </A10Dropdown>,
  mountNode
);
`

export const clickCode = `import {
  A10Menu, A10Dropdown, A10Icon, A10Message,
} from 'a10-gui-widgets';

const onClick = ({ key }) => {
  A10Message.info(\`Click on item $\{ key }\`);
};

const menu = (
  <A10Menu onClick={onClick}>
    <A10Menu.Item key="1">1st menu item</A10Menu.Item>
    <A10Menu.Item key="2">2nd memu item</A10Menu.Item>
    <A10Menu.Item key="3">3rd menu item</A10Menu.Item>
  </A10Menu>
);

ReactDOM.render(
  <A10Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me, Click menu item <A10Icon type="down" />
    </a>
  </A10Dropdown>,
  mountNode
);`

export const cascadingCode = `import { A10Menu, A10Dropdown, A10Icon } from 'a10-gui-widgets';

const SubMenu = A10Menu.SubMenu;

const menu = (
  <A10Menu>
    <A10Menu.Item>1st menu item</A10Menu.Item>
    <A10Menu.Item>2nd menu item</A10Menu.Item>
    <SubMenu title="sub menu">
      <A10Menu.Item>3rd menu item</A10Menu.Item>
      <A10Menu.Item>4th menu item</A10Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <A10Menu.Item>5d menu item</A10Menu.Item>
      <A10Menu.Item>6th menu item</A10Menu.Item>
    </SubMenu>
  </A10Menu>
);

ReactDOM.render(
  <A10Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Cascading menu <A10Icon type="down" />
    </a>
  </A10Dropdown>,
  mountNode
);`

export const contextCode = `import { A10Menu, A10Dropdown } from 'a10-gui-widgets';

const menu = (
  <A10Menu>
    <A10Menu.Item key="1">1st menu item</A10Menu.Item>
    <A10Menu.Item key="2">2nd menu item</A10Menu.Item>
    <A10Menu.Item key="3">3rd menu item</A10Menu.Item>
  </A10Menu>
);

ReactDOM.render(
  <A10Dropdown overlay={menu} trigger={['contextMenu']}>
    <span style={{ userSelect: 'none' }}>Right Click on Me</span>
  </A10Dropdown>,
  mountNode
);`

export const placementCode = `import { A10Menu, A10Dropdown, A10Button } from 'a10-gui-widgets';

const menu = (
  <A10Menu>
  <A10Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/">1st menu item</a>
  </A10Menu.Item>
  <A10Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/company/meet-a10">2nd menu item</a>
  </A10Menu.Item>
  <A10Menu.Item>
    <a target="_blank" rel="noopener noreferrer" href="https://www.a10networks.com/products">3rd menu item</a>
  </A10Menu.Item>
  </A10Menu>
);

ReactDOM.render(
  <div>
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
  </div>,
  mountNode
);`

export const triggerCode = `import { A10Menu, A10Dropdown, A10Icon } from 'a10-gui-widgets';

const menu = (
  <A10Menu>
  <A10Menu.Item key="0">
    <a href="https://www.a10networks.com">1st menu item</a>
  </A10Menu.Item>
  <A10Menu.Item key="1">
    <a href="https://www.a10networks.com/company/meet-a10">2nd menu item</a>
  </A10Menu.Item>
  <A10Menu.Divider />
  <A10Menu.Item key="3">3rd menu item</A10Menu.Item>
  </A10Menu>
);

ReactDOM.render(
  <A10Dropdown overlay={menu} trigger={['hover']}>
    <a className="ant-dropdown-link" href="#">
      Click me <A10Icon type="down" />
    </a>
  </A10Dropdown>,
  mountNode
);
`

export const buttonDropdownCode = `import {
  A10Menu, A10Dropdown, A10Button, A10Icon, A10Message,
} from 'a10-gui-widgets';

function handleButtonClick(e) {
  A10Message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  A10Message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <A10Menu onClick={handleMenuClick}>
    <A10Menu.Item key="1"><A10Icon type="user" />1st menu item</A10Menu.Item>
    <A10Menu.Item key="2"><A10Icon type="user" />2nd menu item</A10Menu.Item>
    <A10Menu.Item key="3"><A10Icon type="user" />3rd item</A10Menu.Item>
  </A10Menu>
);

ReactDOM.render(
  <div>
    <A10Dropdown.A10Button onClick={handleButtonClick} overlay={menu}>
      A10Dropdown
    </A10Dropdown.A10Button>
    <A10Dropdown.A10Button
      onClick={handleButtonClick}
      overlay={menu}
      disabled
      style={{ marginLeft: 8 }}
    >
      A10Dropdown
    </A10Dropdown.A10Button>
    <A10Dropdown overlay={menu}>
      <A10Button style={{ marginLeft: 8 }}>
        A10Button <A10Icon type="down" />
      </A10Button>
    </A10Dropdown>
  </div>,
  mountNode
);`

export const hidingMenuCode = `import { A10Menu, A10Dropdown, A10Icon } from 'a10-gui-widgets';

class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  }

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }

  render() {
    const menu = (
      <A10Menu onClick={this.handleMenuClick}>
        <A10Menu.Item key="1">Clicking me will not close the menu.</A10Menu.Item>
        <A10Menu.Item key="2">Clicking me will not close the menu also.</A10Menu.Item>
        <A10Menu.Item key="3">Clicking me will close the menu</A10Menu.Item>
      </A10Menu>
    );
    return (
      <A10Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" href="#">
          Hover me <A10Icon type="down" />
        </a>
      </A10Dropdown>
    );
  }
}

ReactDOM.render(<OverlayVisible />, mountNode);`