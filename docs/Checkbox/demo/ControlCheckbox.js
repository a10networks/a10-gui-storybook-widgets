import * as React from 'react'
import { A10Checkbox, A10Button } from '../../../src';

class Example extends React.Component {
  state = {
    checked: true,
    disabled: false,
  };

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          <A10Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </A10Checkbox>
        </p>
        <p>
          <A10Button
            type="primary"
            onClick={this.toggleChecked}
          >
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </A10Button>
          <A10Button
            style={{ marginLeft: '10px' }}
            type="primary"
            onClick={this.toggleDisable}
          >
            {!this.state.disabled ? 'Disable' : 'Enable'}
          </A10Button>
        </p>
      </div>
    );
  }
  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  }
  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  }
  onChange = (e) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  }
}

export default Example
