import * as React from 'react'
import { A10Radio, A10Button } from '../../../src'

class App extends React.Component {
  state = {
    disabled: true,
  }
  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
  render() {
    return (
      <div>
        <A10Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</A10Radio>
        <br />
        <A10Radio defaultChecked disabled={this.state.disabled}>Disabled</A10Radio>
        <div style={{ marginTop: 20 }}>
          <A10Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </A10Button>
        </div>
      </div>
    );
  }
}

export default App
