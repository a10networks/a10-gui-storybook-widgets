export const basicString = `
import { A10Switch } from 'a10-gui-widgets';

function onChange(checked) {
  console.log(\`A10Switch to $\{checked}\`);
}

ReactDOM.render(
  <A10Switch defaultChecked onChange={onChange} />,
  mountNode
);
`

export const disableString = `
import { A10Switch, Button } from 'a10-gui-widgets';

class App extends React.Component {
  state = {
    disabled: true,
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  render() {
    return (
      <div>
        <A10Switch disabled={this.state.disabled} defaultChecked />
        <br />
        <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);`

export const textIconString = `
import { A10Switch, Icon } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <A10Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <A10Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
  </div>,
  mountNode
);`

export const loadingString = `
import { A10Switch } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Switch loading defaultChecked />
    <br />
    <A10Switch size="small" loading />
  </div>,
  mountNode
);`

export const twoSizesString = `import { A10Switch } from 'a10-gui-widgets';

ReactDOM.render(
  <div>
    <A10Switch defaultChecked />
    <br />
    <A10Switch size="small" defaultChecked />
  </div>,
  mountNode
);`
