import * as React from 'react'
import { A10Badge, A10Button, A10Icon, A10Switch } from '../../../src';
const ButtonGroup = A10Button.Group;

export default class DynamicBadge extends React.Component {
  state = {
    count: 5,
    show: true,
  }

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  }

  onChange = (show: boolean) => {
    this.setState({ show });
  }

  render() {
    return (
      <div>
        <div>
          <A10Badge count={this.state.count}>
            <a href="#" className="head-example" />
          </A10Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <A10Button onClick={this.increase}>+</A10Button>&nbsp;
          <A10Button onClick={this.decline}>-</A10Button>
        </div>
        <div style={{ marginTop: 10 }}>
          <A10Badge dot={this.state.show}>
            <a href="#" className="head-example" />
          </A10Badge>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <A10Switch onChange={this.onChange} checked={this.state.show} />
        </div>
      </div>
    );
  }
}
