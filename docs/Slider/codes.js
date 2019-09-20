export const basicString = `import { A10Slider } from 'a10-gui-widgets'

class Example extends React.Component {
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
ReactDOM.render(<Example />, mountNode);`

export const sliderInputNumberString = `
import {
    A10Slider, A10InputNumber, A10Row, A10Col,
  } from 'a10-gui-widgets';
  
  class IntegerStep extends React.Component {
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
            />
          </A10Col>
        </A10Row>
      );
    }
  }
  
  class DecimalStep extends React.Component {
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
            />
          </A10Col>
        </A10Row>
      );
    }
  }
  
  ReactDOM.render(
    <div>
      <IntegerStep />
      <DecimalStep />
    </div>,
    mountNode
  );
`

export const sliderIconString = `
import { A10Slider, A10Icon } from 'a10-gui-widgets';

class IconSlider extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    return (
      <div className="icon-wrapper">
        <A10Icon style={{ color: preColor }} type="frown-o" />
        <A10Slider {...this.props} onChange={this.handleChange} value={value} />
        <A10Icon style={{ color: nextColor }} type="smile-o" />
      </div>
    );
  }
}

ReactDOM.render(<IconSlider min={0} max={20} />, mountNode);

`

export const eventString = `
import { A10Slider } from 'a10-gui-widgets';

function onChange(value) {
  console.log('onChange: ', value);
}

function onAfterChange(value) {
  console.log('onAfterChange: ', value);
}

ReactDOM.render(
  <div>
    <A10Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
    <A10Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
  </div>,
  mountNode
);
`



export const verticalString = `import { A10Slider } from 'a10-gui-widgets'

const style = {
    float: 'left',
    height: 300,
    marginLeft: 70,
}

const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
        style: {
            color: '#f50',
        },
        label: <strong>100°C</strong>,
    }
}
const Example = () => (
    <div style={{ height: 300 }}>
        <div style={style}>
            <A10Slider vertical defaultValue={30} />
        </div>
        <div style={style}>
            <A10Slider vertical range step={10} defaultValue={[20, 50]} />
        </div>
        <div style={style}>
            <A10Slider vertical range marks={marks} defaultValue={[26, 37]} />
        </div>
    </div>
)
ReactDOM.render(<Example />, mountNode);`

export const IntegerSliderString = `import { A10Slider, A10InputNumber, A10Row, A10Col } from 'a10-gui-widgets'

class Example extends React.Component {
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
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </A10Col>
            </A10Row>
        );
    }
}
ReactDOM.render(<Example />, mountNode);`

export const DecimalString = `
import { A10Slider, A10InputNumber, A10Row, A10Col } from 'a10-gui-widgets'
class DecimalSlider extends React.Component {
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
                    />
                </A10Col>
            </A10Row>
        );
    }
}
ReactDOM.render(<Example />, mountNode);`
