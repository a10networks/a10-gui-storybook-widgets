import * as React from 'react'
import { A10Affix, A10Button } from '../../../src'
import './index.less'


class BasicDemo extends React.Component {
  state = {
    top: 10,
    bottom: 10,
  }

  render() {
    return (
      <div>
        <A10Affix offsetTop={this.state.top}>
          <A10Button
            type="primary"
            onClick={() => {
              this.setState({
                top: this.state.top + 10,
              });
            }}
          >
            A10Affix top
            </A10Button>
        </A10Affix>
        <br />
        <A10Affix offsetBottom={this.state.bottom}>
          <A10Button
            type="primary"
            onClick={() => {
              this.setState({
                bottom: this.state.bottom + 10,
              });
            }}
          >
            A10Affix bottom
            </A10Button>
        </A10Affix>
      </div>
    );
  }
}

export default BasicDemo