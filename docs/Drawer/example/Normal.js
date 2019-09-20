import * as React from 'react'
import { A10Drawer, A10Button } from '../../../src'

export default class App extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <A10Button type="primary" onClick={this.showDrawer}>
          Open
        </A10Button>
        <A10Drawer
          title="Basic A10Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </A10Drawer>
      </div>
    );
  }
}
