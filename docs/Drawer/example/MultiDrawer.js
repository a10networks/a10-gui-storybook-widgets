import * as React from 'react'
import { A10Drawer, A10Button } from '../../../src'

export default class App extends React.Component {
  state = { visible: false, childrenDrawer: false };

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

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <div>
        <A10Button type="primary" onClick={this.showDrawer}>
          Open drawer
        </A10Button>
        <A10Drawer
          title="Multi-level drawer"
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <A10Button type="primary" onClick={this.showChildrenDrawer}>
            Two-level drawer
          </A10Button>
          <A10Drawer
            title="Two-level A10Drawer"
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
            This is two-level drawer
          </A10Drawer>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <A10Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Cancel
            </A10Button>
            <A10Button onClick={this.onClose} type="primary">
              Submit
            </A10Button>
          </div>
        </A10Drawer>
      </div>
    );
  }
}
