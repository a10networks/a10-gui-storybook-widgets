import * as React from 'react'
import { A10Slider, A10Row, A10Icon, A10InputNumber } from '../../src'
import { A10Row, A10Col } from '../../src/Grid'

export class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  }

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <A10Row>
        <A10Col span={12}>
          <A10Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </A10Col>
        <A10Col span={4}>
          <A10InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
            size="middle"
          />
        </A10Col>
      </A10Row>
    );
  }
}

export class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  }

  onChange = (value) => {
    if (Number.isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <A10Row>
        <A10Col span={12}>
          <A10Slider
            min={0}
            max={1}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.01}
          />
        </A10Col>
        <A10Col span={4}>
          <A10InputNumber
            min={0}
            max={1}
            style={{ marginLeft: 16 }}
            step={0.01}
            value={inputValue}
            onChange={this.onChange}
            size="middle"
          />
        </A10Col>
      </A10Row>
    );
  }
}