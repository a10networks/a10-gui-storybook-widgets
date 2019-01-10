import * as React from 'react'
import { A10Radio } from '../../../src'
const RadioGroup = A10Radio.Group;

class App extends React.Component {
  state = {
    value: 1,
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <A10Radio value={1}>A</A10Radio>
        <A10Radio value={2}>B</A10Radio>
        <A10Radio value={3}>C</A10Radio>
        <A10Radio value={4}>D</A10Radio>
      </RadioGroup>
    );
  }
}

export default App
