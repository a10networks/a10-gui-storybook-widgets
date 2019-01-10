import * as React from 'react'
import { A10Slider, A10Switch, A10Icon, A10InputNumber } from '../../src'
import { A10Row, A10Col } from '../../src/Grid'

export class BasicSlider extends React.Component {
  state = {
    disabled: false,
  };
  handleDisabledChange = (disabled: Boolean) => {
    this.setState({ disabled });
  }
  render() {
    const { disabled } = this.state;
    return (
      <div>
        <A10Slider defaultValue={30} disabled={disabled} />
        <A10Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <A10Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </div>
    );
  }
}

export class IntegerSlider extends React.Component {
  state = {
    inputValue: 1,
  }
  onChange = (value: number) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <A10Row>
        <A10Col span={12}>
          <A10Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
        </A10Col>
        <A10Col span={4}>
          <A10InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.onChange}
            size="middle"
          />
        </A10Col>
      </A10Row>
    );
  }
}

export class DecimalSlider extends React.Component {
  state = {
    inputValue: 0,
  }
  onChange = (value: number) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <A10Row>
        <A10Col span={12}>
          <A10Slider min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01} />
        </A10Col>
        <A10Col span={4}>
          <A10InputNumber
            min={0}
            max={1}
            style={{ marginLeft: 16 }}
            step={0.01}
            value={this.state.inputValue}
            onChange={this.onChange}
            size="middle"
          />
        </A10Col>
      </A10Row>
    );
  }
}