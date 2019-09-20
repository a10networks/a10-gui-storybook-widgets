import * as React from 'react'
import { A10Spin, A10Alert, A10Switch } from '../../../src'

class Card extends React.Component {
  state = { loading: false }

  toggle = (value) => {
    this.setState({ loading: value });
  }

  render() {
    const container = (
      <A10Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <A10Spin spinning={this.state.loading} delay={500}>{container}</A10Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：<A10Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

export default Card