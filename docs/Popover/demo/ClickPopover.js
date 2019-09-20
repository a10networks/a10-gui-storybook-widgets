
import * as React from 'react'
import { A10Popover, A10Button } from '../../../src'

export default class App extends React.Component {
  state = {
    visible: false,
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  render() {
    return (
      <A10Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <A10Button type="primary">Click me</A10Button>
      </A10Popover>
    );
  }
}
