
export const basicButtonCode = `import { A10Button } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Button type="primary">Primary</A10Button>
    <A10Button>Default</A10Button>
    <A10Button type="dashed">Dashed</A10Button>
    <A10Button type="danger">Danger</A10Button>
  </div>,
  mountNode
);`

export const iconButtonCode = `import { A10Button } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Button type="primary" shape="circle" icon="search" />
    <A10Button type="primary" icon="search">Search</A10Button>
    <A10Button shape="circle" icon="search" />
    <A10Button icon="search">Search</A10Button>
    <br />
    <A10Button shape="circle" icon="search" />
    <A10Button icon="search">Search</A10Button>
    <A10Button type="dashed" shape="circle" icon="search" />
    <A10Button type="dashed" icon="search">Search</A10Button>
  </div>,
  mountNode
);`

export const sizeCode = `import { A10Button, A10Radio, A10Icon } from 'a10-gui-widgets';

class ButtonSize extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
      <div>
        <A10Radio.Group value={size} onChange={this.handleSizeChange}>
          <A10Radio.A10Button value="large">Large</A10Radio.A10Button>
          <A10Radio.A10Button value="default">Default</A10Radio.A10Button>
          <A10Radio.A10Button value="small">Small</A10Radio.A10Button>
        </A10Radio.Group>
        <br /><br />
        <A10Button type="primary" size={size}>Primary</A10Button>
        <A10Button size={size}>Normal</A10Button>
        <A10Button type="dashed" size={size}>Dashed</A10Button>
        <A10Button type="danger" size={size}>Danger</A10Button>
        <br />
        <A10Button type="primary" shape="circle" icon="download" size={size} />
        <A10Button type="primary" icon="download" size={size}>Download</A10Button>
        <br />
        <A10Button.Group size={size}>
          <A10Button type="primary">
            <A10Icon type="left" />Backward
          </A10Button>
          <A10Button type="primary">
            Forward<A10Icon type="right" />
          </A10Button>
        </A10Button.Group>
      </div>
    );
  }
}

ReactDOM.render(<ButtonSize />, mountNode);`

export const disableButtonCode = `import { A10Button } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Button type="primary">Primary</A10Button>
    <A10Button type="primary" disabled>Primary(disabled)</A10Button>
    <br />
    <A10Button>Default</A10Button>
    <A10Button disabled>Default(disabled)</A10Button>
    <br />
    <A10Button type="dashed">Dashed</A10Button>
    <A10Button type="dashed" disabled>Dashed(disabled)</A10Button>
    <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
      <A10Button ghost>Ghost</A10Button>
      <A10Button ghost disabled>Ghost(disabled)</A10Button>
    </div>
  </div>,
  mountNode
);`

export const multipleButtonsCode = `import {
  A10Button, A10Menu, A10Dropdown, A10Icon,
} from 'a10-gui-widgets';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <A10Menu onClick={handleMenuClick}>
    <A10Menu.Item key="1">1st item</A10Menu.Item>
    <A10Menu.Item key="2">2nd item</A10Menu.Item>
    <A10Menu.Item key="3">3rd item</A10Menu.Item>
  </A10Menu>
);

ReactDOM.render(
  <div>
    <A10Button type="primary">primary</A10Button>
    <A10Button>secondary</A10Button>
    <A10Dropdown overlay={menu}>
      <A10Button>
        Actions <A10Icon type="down" />
      </A10Button>
    </A10Dropdown>
  </div>,
  mountNode
);`

export const buttonGroupCode = `import { A10Button, A10Icon } from 'a10-gui-widgets';

const ButtonGroup = A10Button.Group;

ReactDOM.render(
  <div>
    <h4>Basic</h4>
    <ButtonGroup>
      <A10Button>Cancel</A10Button>
      <A10Button>OK</A10Button>
    </ButtonGroup>
    <ButtonGroup>
      <A10Button disabled>L</A10Button>
      <A10Button disabled>M</A10Button>
      <A10Button disabled>R</A10Button>
    </ButtonGroup>
    <ButtonGroup>
      <A10Button>L</A10Button>
      <A10Button>M</A10Button>
      <A10Button>R</A10Button>
    </ButtonGroup>

    <h4>With A10Icon</h4>
    <ButtonGroup>
      <A10Button type="primary">
        <A10Icon type="left" />Go back
      </A10Button>
      <A10Button type="primary">
        Go forward<A10Icon type="right" />
      </A10Button>
    </ButtonGroup>
    <ButtonGroup>
      <A10Button type="primary" icon="cloud" />
      <A10Button type="primary" icon="cloud-download" />
    </ButtonGroup>
  </div>,
  mountNode
);`

export const ghostButtonCode = `import { A10Button } from 'a10-gui-widgets';

ReactDOM.render(
  <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
    <A10Button type="primary" ghost>Primary</A10Button>
    <A10Button ghost>Default</A10Button>
    <A10Button type="dashed" ghost>Dashed</A10Button>
    <A10Button type="danger" ghost>danger</A10Button>
  </div>,
  mountNode
);`

export const loadingButtonCode = `import { A10Button } from 'a10-gui-widget'

ReactDOM.render(
  <div>
    <div style={{ paddingBottom: '8px' }}>
      <A10Button type="primary" loading>Loading</A10Button>
      <A10Button type="primary" size="small" loading>Loading</A10Button>
    </div>
    <div style={{ paddingBottom: '8px' }}>
      <A10Button shape="circle" loading />
      <A10Button type="primary" shape="circle" loading />
    </div>
  </div>
  , mountNode);`

export const blockButtonCode = `import { A10Button } from 'a10-gui-widgets';

  ReactDOM.render(
    <div>
      <A10Button type="primary" block>Primary</A10Button>
      <A10Button block>Default</A10Button>
      <A10Button type="dashed" block>Dashed</A10Button>
      <A10Button type="danger" block>danger</A10Button>
    </div>,
    mountNode
  );`
