import * as React from 'react'
import { A10Rate } from '../../src'

export const showCopywritingString = `import { A10Rate } from 'a10-gui-widgets'

class Rater extends React.Component {
  state = {
    value: 3,
  }
  handleChange = (value) => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <span>
        <A10Rate onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
    );
  }
}

ReactDOM.render(<Rater />, mountNode);`

export const ShowCopywritingDemo = () => {

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }

  class RateDemo extends React.Component {
    state = {
      value: 3,
    }

    handleChange = (value) => {
      this.setState({ value });
    }

    render() {
      const { value } = this.state;
      return (
        <span>
        <A10Rate onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
      );
    }
  }

  return <RateDemo />
}
